import fs from 'fs';
import path from 'path';

// simple camelize helper (minimal replacement for @cpmech/basic.camelize)
const camelize = (str, upperFirst = false, sep = '-') => {
    const parts = str.split(sep).map((p) => p.trim());
    const camel = parts.map((p, i) => i === 0 && !upperFirst ? p.toLowerCase() : p.charAt(0).toUpperCase() + p.slice(1)).join('');
    return camel;
};
import { ICON_DIR, NATIVE_ATTR, SVG_DIR } from './utils/constants.mjs';
import { convertSvgToReact, ensureDirectoryExists, fileExists, isCol, toPascalCase } from './utils/helpers.mjs';
import { generateComponent, generateIndexFile } from './utils/services.mjs';



/**
 * Processes and generates React components for all SVG files in the given directory.
 */
const processSvgFiles = async () => {
    // Ensure ICON_DIR exists
    await ensureDirectoryExists(ICON_DIR);

    try {
        // Read all files from SVG_DIR recursively
        const svgFiles = [];

        async function walk(dir) {
            const entries = await fs.promises.readdir(dir, { withFileTypes: true });
            for (const e of entries) {
                const full = path.join(dir, e.name);
                if (e.isDirectory()) await walk(full);
                else if (e.isFile() && path.extname(e.name).toLowerCase() === '.svg') {
                    // store relative path from SVG_DIR
                    svgFiles.push(path.relative(SVG_DIR, full));
                }
            }
        }

        await walk(SVG_DIR);

        // Process each SVG file
        for (const relPath of svgFiles) {
            const file = path.basename(relPath);
            const componentName = toPascalCase(file);

            // Determine mirrored subdirectory under ICON_DIR
            const subDir = path.dirname(relPath); // '.' or nested path like 'categories/programming-languages'
            const targetDir = subDir === '.' ? ICON_DIR : path.join(ICON_DIR, subDir);

            // Ensure target directory exists
            await ensureDirectoryExists(targetDir);

            const componentFilePath = path.join(targetDir, `${componentName}.tsx`);

            // Skip if component file already exists
            if (await fileExists(componentFilePath)) {
                console.log(`Component for ${file} already exists at ${componentFilePath}. Skipping...`);
                continue;
            }

            // Read the SVG content asynchronously
            const svgContent = await fs.promises.readFile(path.join(SVG_DIR, relPath), 'utf-8');

            // Prepare replacements for native attributes
            const replacements = NATIVE_ATTR.map((p) => ({
                from: p,
                to: camelize(p, false, isCol(p) ? ':' : '-'),
                rx: new RegExp(p.replace(':', '\\:'), 'mg'),
            }));

            // Apply replacements to SVG content
            const pureReactSvg = replacements.reduce((acc, curr) => acc.replace(curr.rx, curr.to), svgContent);

            // Generate the React component content
            const componentContent = generateComponent(componentName, convertSvgToReact(pureReactSvg));

            // Write the component file asynchronously
            await fs.promises.writeFile(componentFilePath, componentContent.trim());
            console.log(`Generated component: ${componentName} -> ${componentFilePath}`);
        }

        // Generate the index file after processing all SVG files
        generateIndexFile();

    } catch (err) {
        console.error('Error processing SVG files:', err);
    }
};



// Run the SVG processing function
processSvgFiles();
