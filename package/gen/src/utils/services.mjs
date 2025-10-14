import fs from 'fs';
import path from 'path';
import { ICON_DIR, INDEX_FILE } from './constants.mjs';

/**
 * Generates a React component from the provided SVG content.
 * - Converts the SVG content into a functional React component.
 * - The component uses the `forwardRef` API to pass a ref to the SVG element.
 * - The component accepts a `size` prop to control the width and height of the SVG.
 *
 * @param {string} name - The name of the component (e.g., 'MyIcon').
 * @param {string} svgContent - The SVG content to embed in the component.
 * @returns {string} The generated React component code as a string.
 */
export const generateComponent = (name, svgContent) => {
  // Extract the viewBox attribute from the SVG content
  const viewBoxMatch = svgContent.match(/<svg[^>]*\sviewBox=['"]([^'"]+)['"]/);
  const viewBox = viewBoxMatch ? `viewBox="${viewBoxMatch[1]}"` : '';

  // Generate the React component
  return `
import * as React from 'react';
import { IconProps } from '../../../types';

export const ${name} = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    ${svgContent.replace(
    /<svg([^>]*)>/,
    `<svg
        fill="currentColor"
        width={size} 
        height={size} 
        ${viewBox} 
        {...props} 
        ref={forwardedRef}>`
  )}
  )
);

${name}.displayName = '${name}';
`;
};


/**
 * Generates an `index.ts` file for exporting all icon components.
 * - Reads all `.tsx` files in the `ICON_DIR` directory.
 * - Filters out non-TypeScript files and generates export statements for each icon component.
 * - Writes the export statements to the `INDEX_FILE`.
 *
 * @returns {void}
 */
export const generateIndexFile = () => {
  // Walk ICON_DIR recursively and collect .tsx files and subdirectories
  const exports = [];

  function walk(dir, relative = '.') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const localExports = [];

    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        const childRelative = relative === '.' ? e.name : path.join(relative, e.name);
        walk(full, childRelative);
        // If this is the special 'categories' folder, export each category index explicitly
        if (e.name === 'categories') {
          const cats = fs.readdirSync(full, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
          for (const c of cats) {
            localExports.push(`export * from './${e.name}/${c}/index';`);
          }
        } else {
          // Re-export the child index from this level
          localExports.push(`export * from './${e.name}/index';`);
        }
      } else if (e.isFile() && e.name.endsWith('.tsx')) {
        const name = path.basename(e.name, '.tsx');
        localExports.push(`export { ${name} } from './${name}';`);
      }
    }

    // For subfolders, ensure an index.ts exists with local exports
    if (relative !== '.') {
      const indexPath = path.join(dir, 'index.ts');
      fs.writeFileSync(indexPath, localExports.join('\n'), { encoding: 'utf8' });
    }
  }

  // walk to create indexes in subfolders
  walk(ICON_DIR, '.');

  // Create a categories/index.ts that re-exports each category index, if categories folder exists
  const categoriesDir = path.join(ICON_DIR, 'categories');
  if (fs.existsSync(categoriesDir)) {
    const cats = fs.readdirSync(categoriesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
    const catExports = cats.map(c => `export * from './${c}/index';`).join('\n');
    const categoriesIndexPath = path.join(categoriesDir, 'index.ts');
    fs.writeFileSync(categoriesIndexPath, catExports, { encoding: 'utf8' });
    console.log(`Categories index updated at ${categoriesIndexPath}`);
  }

  // At the top level, export everything from './categories'
  fs.writeFileSync(INDEX_FILE, `export * from './categories';\n`, { encoding: 'utf8' });
  console.log(`Index file updated at ${INDEX_FILE}`);
};
