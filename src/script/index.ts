import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { reactifySvg } from './svg';
import { iSvgMetadata } from '../types';
import { pascalCase } from '../helpers';

const ICONS_OUTPUT_DIR = path.join(__dirname, '../icons');
const ALIASES_PATH = path.join(__dirname, '../library/aliases.json');
const ICON_ENTRY_PATH = path.join(__dirname, '../library/iconEntry.ts');
const METADATA_PATH = path.join(__dirname, '../library/svgl/metadata.json');

const ICON_METRIC_PATH = path.join(__dirname, '../../ICON_METRIC.md');

interface GenerationStats {
  total: number;
  generated: number;
  dualMode: number;
  failed: number;
  skipped: number;
}

/**
 * Generate iconEntry.ts with all icons, aliases, and component imports
 */
async function generateIconEntry() {
  const metadata: { icon: string; title: string }[] = JSON.parse(
    fs.readFileSync(METADATA_PATH, 'utf8')
  );
  const aliases: Record<string, string[]> = JSON.parse(
    fs.readFileSync(ALIASES_PATH, 'utf8')
  );

  const imports: string[] = [];
  const entries: string[] = [];

  for (const item of metadata) {
    const componentName = item.icon; // directly from metadata
    const iconPath = `../icons/${componentName}`; // relative import from iconEntry.ts

    imports.push(`import { ${componentName} } from '${iconPath}';`);

    const entry = `{
  name: '${item.title}',
  aliases: ${JSON.stringify(aliases[item.title] || [])},
  icon: ${componentName}
}`;

    entries.push(entry);
  }

  const content = `${imports.join('\n')}
import { GetIconType } from "../types";

export const iconEntry: GetIconType[] = [
${entries.join(',\n')}
];
`;

  const formatted = await prettier.format(content, { parser: 'typescript' });

  fs.writeFileSync(ICON_ENTRY_PATH, formatted, 'utf8');
  console.log(`✓ iconEntry.ts generated with ${metadata.length} icons`);
}

/**
 * Generate icon metrics markdown.
 */
async function generateIconMetrics() {
  // Load metadata
  const metadata: iSvgMetadata[] = JSON.parse(
    fs.readFileSync(METADATA_PATH, 'utf8')
  );
  const aliases: Record<string, string[]> = JSON.parse(
    fs.readFileSync(ALIASES_PATH, 'utf8')
  );

  const totalIcons = metadata.length;
  const generatedIcons = Object.keys(aliases).length;
  const checkedIcons = metadata.filter((m) => m.checked).length;

  const dualMode = metadata.filter((m) => m.path.light && m.path.dark).length;
  const singleMode = metadata.filter(
    (m) => m.path.light && !m.path.dark
  ).length;

  const dateGenerated = new Date().toLocaleString();

  let mdContent = `# Icon Metrics

This file was automatically generated on **${dateGenerated}**.

## Summary

- **Total icons available:** ${totalIcons}
- **Total icons generated:** ${generatedIcons}
- **Total icons checked / optimized:** ${checkedIcons}
- **Dual-mode icons (light + dark):** ${dualMode}
- **Single-mode icons (light only):** ${singleMode}

## Aliases

Some icons have aliases — alternate names that can be used to refer to the same icon.  
For example, if there is a **JavaScript** icon, the aliases allow a user to type **JS** or **java-script** and get the same icon.  
This makes it easier to use icons dynamically in TextStack or other systems.

## Notes

All icons are sourced from [SVGL](https://github.com/pheralb/svgl).

- To **add an icon**, you must submit it through the platform — this is the official source.  
- To **remove an icon**, you must also do it through the platform. We only take icons from this platform.

---

*Generated automatically by the icon generation system.*`;

  // Format markdown
  mdContent = await prettier.format(mdContent, { parser: 'markdown' });

  fs.writeFileSync(ICON_METRIC_PATH, mdContent, 'utf8');
  console.log(`✓ iconmetric.md generated`);
}

const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

/**
 * Extracts SVG attributes and content.
 */
function extractSvgParts(svg: string) {
  const match = svg.match(/<svg([^>]*)>([\s\S]*)<\/svg>/);
  if (!match) throw new Error('Invalid SVG format');
  const attributes = match[1]
    .replace(/\s*(width|height)="[^\"]*"/gi, '')
    .trim();
  const safeAttributes = attributes ? ' ' + attributes : '';
  return { attributes: safeAttributes, content: match[2] };
}

/**
 * Generates React component code for one or two-mode icons.
 */
function generateComponent(
  name: string,
  svgLight: string,
  svgDark?: string
): string {
  const light = extractSvgParts(svgLight);
  if (!svgDark) {
    return `import React from 'react';
import { SVGIconProps } from '../types';

export const ${name} = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg${light.attributes} width={size} height={size} ref={ref} {...props}>
      ${light.content}
    </svg>
  )
);

${name}.displayName = '${name}';
`;
  } else {
    const dark = extractSvgParts(svgDark);
    return `import React from 'react';
import { SVGIconProps } from '../types';

export const ${name} = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === 'dark' || isDark;
    return useDark ? (
      <svg${dark.attributes} width={size} height={size} ref={ref} {...props}>
        ${dark.content}
      </svg>
    ) : (
      <svg${light.attributes} width={size} height={size} ref={ref} {...props}>
        ${light.content}
      </svg>
    );
  }
);

${name}.displayName = '${name}';
`;
  }
}

/**
 * Generate svgEntry.ts with all icons, aliases, and raw SVG content.
 */
async function generateSvgEntry() {
  const metadata: {
    icon: string;
    title: string;
    path: { light?: string; dark?: string };
  }[] = JSON.parse(fs.readFileSync(METADATA_PATH, 'utf8'));
  const aliases: Record<string, string[]> = JSON.parse(
    fs.readFileSync(ALIASES_PATH, 'utf8')
  );

  const entries: string[] = [];

  for (const item of metadata) {
    try {
      const svgLight = item.path.light
        ? fs.readFileSync(item.path.light, 'utf8')
        : '';
      const svgDark = item.path.dark
        ? fs.readFileSync(item.path.dark, 'utf8')
        : undefined;

      // Store as raw SVG strings, trimmed for consistency
      const svgEntry = `{
  name: '${item.title}',
  aliases: ${JSON.stringify(aliases[item.title] || [])},
  svg: {
    light: \`${svgLight.trim()}\`,
    dark: ${svgDark ? `\`${svgDark.trim()}\`` : 'null'}
  }
}`;

      entries.push(svgEntry);
    } catch (err: any) {
      console.error(`❌ Failed to include ${item.title}:`, err.message);
    }
  }

  const content = `// Auto-generated file
// Contains raw SVG content for icons
// Generated on: ${new Date().toISOString()}


import { SvgEntry } from '../types';


export const svgEntry: SvgEntry[] = [
${entries.join(',\n')}
];
`;

  const formatted = await prettier.format(content, { parser: 'typescript' });

  const SVG_ENTRY_PATH = path.join(__dirname, '../library/svgEntry.ts');
  fs.writeFileSync(SVG_ENTRY_PATH, formatted, 'utf8');

  console.log(`✓ svgEntry.ts generated with ${metadata.length} icons`);
}

/**
 * Reads the metadata.json file.
 */
function readMetadata(): iSvgMetadata[] {
  if (!fs.existsSync(METADATA_PATH))
    throw new Error('metadata.json not found!');
  const data = JSON.parse(fs.readFileSync(METADATA_PATH, 'utf8'));
  return data;
}

/**
 * Writes alias map synced to icon metadata.
 */
async function writeAliases(metadata: iSvgMetadata[]) {
  let existingAliases: Record<string, string[]> = {};

  // Load existing aliases if file exists
  if (fs.existsSync(ALIASES_PATH)) {
    const content = fs.readFileSync(ALIASES_PATH, 'utf8').trim();
    if (content) {
      try {
        existingAliases = JSON.parse(content);
      } catch {
        console.warn(
          '⚠️ Could not parse existing aliases.json, starting fresh.'
        );
      }
    }
  }

  // Build a new aliases object synced with metadata
  const newAliases: Record<string, string[]> = {};
  for (const m of metadata) {
    // Preserve existing aliases if present, otherwise start with empty array
    newAliases[m.title] = existingAliases[m.title] || [];
  }

  // Optional: sort keys alphabetically for clean diffs
  const sortedAliases = Object.keys(newAliases)
    .sort()
    .reduce(
      (acc, key) => {
        acc[key] = newAliases[key];
        return acc;
      },
      {} as Record<string, string[]>
    );

  // Format JSON with prettier
  const formatted = await prettier.format(JSON.stringify(sortedAliases), {
    parser: 'json',
  });

  fs.writeFileSync(ALIASES_PATH, formatted, 'utf8');
  console.log(
    `✓ aliases.json synchronized (${Object.keys(sortedAliases).length} entries)`
  );
}

/**
 * Generates an index.ts for exports.
 */
function generateIndexFile(names: string[]) {
  const exports = names.map((n) => `export { ${n} } from './${n}';`).join('\n');
  const content = `// Auto-generated index\n// Generated on: ${new Date().toISOString()}\n\n${exports}\n`;
  fs.writeFileSync(path.join(ICONS_OUTPUT_DIR, 'index.ts'), content, 'utf8');
  console.log('✓ index.ts generated');
}

/**
 * Main generation function.
 */
async function generateFromLocalSvgs() {
  ensureDir(ICONS_OUTPUT_DIR);

  const metadata = readMetadata();

  const componentNames: string[] = [];
  const stats: GenerationStats = {
    total: metadata.length,
    generated: 0,
    dualMode: 0,
    failed: 0,
    skipped: 0,
  };

  for (const item of metadata) {
    const componentName = pascalCase(item.title) + 'Icon';

    if (!item.path.light && !item.path.dark) {
      console.warn(`⚠️ Skipping ${item.title}: no SVG path found`);
      stats.skipped++;
      continue;
    }

    try {
      const svgLight = item.path.light
        ? fs.readFileSync(item.path.light, 'utf8')
        : '';
      const svgDark = item.path.dark
        ? fs.readFileSync(item.path.dark, 'utf8')
        : undefined;

      const reactifiedLight = await reactifySvg(svgLight);
      const reactifiedDark = svgDark ? await reactifySvg(svgDark) : undefined;

      const componentCode = generateComponent(
        componentName,
        reactifiedLight,
        reactifiedDark
      );
      const formatted = await prettier.format(componentCode, {
        parser: 'typescript',
      });

      fs.writeFileSync(
        path.join(ICONS_OUTPUT_DIR, `${componentName}.tsx`),
        formatted,
        'utf8'
      );

      componentNames.push(componentName);

      if (svgDark) stats.dualMode++;
      else stats.generated++;

      console.log(`✓ Generated ${componentName}`);
    } catch (err: any) {
      stats.failed++;
      console.error(`❌ Failed for ${item.title}:`, err.message);
    }
  }

  // Write outputs
  await writeAliases(metadata);
  generateIndexFile(componentNames);
  await generateIconMetrics();
  await generateSvgEntry();
  await generateIconEntry();

  console.log(
    `\n🎉 Done! Generated: ${stats.generated + stats.dualMode}/${stats.total}`
  );
}

if (require.main === module) {
  generateFromLocalSvgs().catch((err) => {
    console.error('❌ Generation failed:', err);
    process.exit(1);
  });
}

export { generateFromLocalSvgs };
