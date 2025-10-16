import fs from 'fs';
import path from 'path';
import axios from 'axios';
import prettier from 'prettier';
import { iSvgMetadata, iSvgAPIData } from '../types';
import { pascalCase } from './helpers';

const SVGS_DIR = path.join(__dirname, '../library/svgl');
const METADATA_PATH = path.join(__dirname, '../library/svgl/metadata.json');

const API_URL = 'https://api.svgl.app';
const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/pheralb/svgl/main/static/library';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Utils
const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const toGithubRawUrl = (url?: string): string | undefined =>
  url ? url.replace('https://svgl.app/library', GITHUB_RAW_BASE) : undefined;

async function downloadFile(url: string, outputPath: string): Promise<void> {
  const headers: Record<string, string> = {
    'User-Agent': 'SVG-Downloader/1.0',
  };
  if (GITHUB_TOKEN && url.includes('githubusercontent.com')) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }

  const res = await axios.get(url, {
    responseType: 'text',
    timeout: 15000,
    headers,
  });
  fs.writeFileSync(outputPath, res.data, 'utf8');
}

async function fetchIconData(): Promise<iSvgAPIData[]> {
  const res = await axios.get<iSvgAPIData[]>(API_URL, { timeout: 10000 });
  return res.data;
}

// Stage 2: Generate + Sync
async function main() {
  ensureDir(SVGS_DIR);

  // Load metadata, initialize if empty
  let metadata: iSvgMetadata[] = [];
  if (fs.existsSync(METADATA_PATH)) {
    try {
      const content = fs.readFileSync(METADATA_PATH, 'utf8').trim();
      if (content) metadata = JSON.parse(content);
    } catch {
      console.warn('⚠️ Could not parse metadata.json, starting fresh.');
    }
  }

  const data = await fetchIconData();
  console.log(`📡 Found ${data.length} icons`);

  for (const icon of data) {
    const folderName = icon.title.toLowerCase().replace(/\s+/g, '-');
    const iconDir = path.join(SVGS_DIR, folderName);
    ensureDir(iconDir);

    const existingMeta = metadata.find((m) => m.title === icon.title);
    const paths: Record<string, string> = existingMeta?.path || {};

    let lightUrl: string | undefined;
    let darkUrl: string | undefined;

    if (typeof icon.route === 'string') {
      lightUrl = toGithubRawUrl(icon.route);
    } else {
      lightUrl = toGithubRawUrl(icon.route?.light);
      darkUrl = toGithubRawUrl(icon.route?.dark);
    }

    // Download only if not checked
    const shouldDownload = !existingMeta?.checked;

    try {
      if (lightUrl && shouldDownload) {
        const lightPath = path.join(iconDir, `${folderName}-light.svg`);
        await downloadFile(lightUrl, lightPath);
        paths.light = lightPath.replace(process.cwd() + path.sep, '');
        console.log(`✓ ${icon.title} (light)`);
      }

      if (darkUrl && shouldDownload) {
        const darkPath = path.join(iconDir, `${folderName}-dark.svg`);
        await downloadFile(darkUrl, darkPath);
        paths.dark = darkPath.replace(process.cwd() + path.sep, '');
        console.log(`✓ ${icon.title} (dark)`);
      }
    } catch (err) {
      console.warn(
        `⚠️ Failed to download ${icon.title}:`,
        (err as any).message
      );
      continue;
    }

    // Update metadata
    if (existingMeta) {
      // Preserve checked & existing path if checked
      existingMeta.path = paths;
      existingMeta.url = icon.url ?? '';
      existingMeta.icon = pascalCase(icon.title) + 'Icon';
    } else {
      metadata.push({
        id: icon.id,
        path: paths,
        checked: false,
        title: icon.title,
        url: icon.url || '',
        icon: pascalCase(icon.title) + 'Icon',
      });
    }
  }

  // Save metadata
  const formattedMeta = await prettier.format(JSON.stringify(metadata), {
    parser: 'json',
  });
  fs.writeFileSync(METADATA_PATH, formattedMeta, 'utf8');

  console.log(`\n🗂  Updated ${metadata.length} metadata entries`);
}

// Run
main().catch((err) => {
  console.error('❌ Failed:', err);
  process.exit(1);
});
