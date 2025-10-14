import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SVG_DIR = path.join(__dirname);
const CATEGORIES_FILE = path.join(SVG_DIR, 'categories.json');

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function findFileIgnoreCase(name, list) {
    const lower = name.toLowerCase();
    return list.find(f => f.toLowerCase() === lower) || null;
}

async function main() {
    const args = process.argv.slice(2);
    const apply = args.includes('--apply');

    if (!fs.existsSync(CATEGORIES_FILE)) {
        console.error('categories.json not found in', SVG_DIR);
        process.exit(1);
    }

    const data = readJson(CATEGORIES_FILE);
    const svgFiles = fs.readdirSync(SVG_DIR).filter(f => f.toLowerCase().endsWith('.svg'));

    for (const cat of data.order || Object.keys(data.categories)) {
        const files = data.categories[cat] || [];
        const targetDir = path.join(SVG_DIR, 'categories', cat);
        ensureDir(targetDir);

        for (const file of files) {
            const match = findFileIgnoreCase(file, svgFiles);
            if (!match) {
                console.warn('Missing:', file);
                continue;
            }

            const src = path.join(SVG_DIR, match);
            const dst = path.join(targetDir, match);

            if (apply) {
                fs.renameSync(src, dst);
                console.log(`Moved ${match} -> categories/${cat}/`);
            } else {
                console.log(`[dry-run] ${match} -> categories/${cat}/`);
            }
        }
    }

    // list any SVGs not referenced
    const remaining = fs.readdirSync(SVG_DIR).filter(f => f.toLowerCase().endsWith('.svg'));
    if (remaining.length) {
        console.log('\nUnreferenced SVGs:');
        remaining.forEach(f => console.log(' -', f));
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
