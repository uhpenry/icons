import {
  ALLOWED_SVG_ATTRIBUTES,
  BANNED_STYLE_PROPS,
  STYLE_PROPS_TO_REMOVE,
  SVG_ALLOWED_ATTRIBUTE_VALUES,
} from './constants';

const convertStyleToObject = (styleString: string): Record<string, string> =>
  styleString.split(';').reduce(
    (styleObj, styleProp) => {
      if (!styleProp.trim()) return styleObj;
      const [key, value] = styleProp.split(':').map((s) => s.trim());
      if (!key || !value) return styleObj;

      const normalizedKey = key.toLowerCase();

      // Skip banned props
      if (BANNED_STYLE_PROPS.has(normalizedKey)) return styleObj;

      const camelCaseKey = key.replace(/-([a-z])/g, (_, char) =>
        char.toUpperCase()
      );
      styleObj[camelCaseKey] = value;
      return styleObj;
    },
    {} as Record<string, string>
  );

const cleanCssContent = (css: string): string => {
  let cleaned = css.replace(/\/\*[\s\S]*?\*\//g, '');
  cleaned = cleaned.replace(/#[0-9A-Fa-f]{3,8}/g, (match) =>
    match.toLowerCase()
  );
  return cleaned.trim();
};

const applySvgRootAttributesRules = (svg: string): string => {
  return svg.replace(/<svg([^>]*)>/i, (match, attributes) => {
    const allowedAttrs: string[] = [];

    // Match all key="value" pairs
    const attrRegex = /(\S+)=["']([^"']*)["']/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attributes)) !== null) {
      const [_, key, value] = attrMatch;
      if (ALLOWED_SVG_ATTRIBUTES.includes(key)) {
        allowedAttrs.push(`${key}="${value}"`);
      }
    }

    return `<svg ${allowedAttrs.join(' ')}>`;
  });
};

const dropDisallowedStyleProps = (styleString: string): string => {
  if (!styleString) return '';
  const safeEntries: string[] = [];

  styleString.split(';').forEach((styleProp) => {
    const [rawKey, rawValue] = styleProp.split(':').map((s) => s.trim());
    if (!rawKey || !rawValue) return;

    const key = rawKey.toLowerCase();
    if (!STYLE_PROPS_TO_REMOVE.has(key)) {
      safeEntries.push(`${rawKey}: ${rawValue}`);
    }
  });

  return safeEntries.join('; ');
};

const optimizeSvgWithSVGO = async (svg: string): Promise<string> => {
  const { optimize } = await import('svgo');
  const result = optimize(svg, {
    multipass: true,
    plugins: [
      'removeDoctype',
      'removeComments',
      'removeMetadata',
      {
        name: 'removeAttrs',
        params: {
          attrs: ['xmlns:*', 'sodipodi:*', 'inkscape:*', 'enable-background'],
        },
      },
      'removeScripts',
      'cleanupIds',
      'removeEmptyText',
      'removeTitle',
      'removeDeprecatedAttrs',
      'removeDesc',
      'removeHiddenElems',
      'removeUnknownsAndDefaults',
      'removeUselessDefs',
      'collapseGroups',
    ],
  });
  return result.data;
};

/**
 * Scans SVG for all inline styles and removes banned properties entirely.
 */
const applyDisallowedStylePropsInline = (svg: string): string => {
  return svg.replace(/style="([^"]*)"/gi, (match, styleString) => {
    const cleaned = dropDisallowedStyleProps(styleString);
    return cleaned ? `style="${cleaned}"` : ''; // removes style completely if empty
  });
};

export const reactifySvg = async (svg: string) => {
  let sanitized = await optimizeSvgWithSVGO(svg);

  // Step 1. Remove comments and metadata
  sanitized = sanitized.replace(/<!--[\s\S]*?-->/g, '');
  sanitized = sanitized.replace(/<metadata[\s\S]*?<\/metadata>/gi, '');

  // Step 2. Remove <script>, <title>, <desc>, <description>
  sanitized = sanitized
    // Remove normal <script>...</script>
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    // Remove self-closing or incomplete <script .../>
    .replace(/<script\b[^>]*\/?>/gi, '')
    // Remove <title>, <desc>, <description> (with or without closing)
    .replace(/<title[\s\S]*?<\/title>/gi, '')
    .replace(/<desc[\s\S]*?<\/desc>/gi, '')
    .replace(/<description[\s\S]*?<\/description>/gi, '')
    .replace(/<title\b[^>]*\/?>/gi, '')
    .replace(/<desc\b[^>]*\/?>/gi, '')
    .replace(/<description\b[^>]*\/?>/gi, '');

  sanitized = sanitized
    // Remove entire elements like <sodipodi:guide ... /> or <inkscape:perspective>...</inkscape:perspective>
    .replace(
      /<(sodipodi|inkscape|adobe|sketch):[^>]*>[\s\S]*?<\/\1:[^>]*>/gi,
      ''
    )
    .replace(/<(sodipodi|inkscape|adobe|sketch):[^>]*\/?>/gi, '')
    // Remove attributes like inkscape:label="Layer 1"
    .replace(/\s+(sodipodi|inkscape|adobe|sketch):[a-zA-Z0-9-]+="[^"]*"/gi, '');

  // Step 3. Clean inline <style> blocks (CSS inside <style> tags)
  sanitized = sanitized.replace(
    /<style[^>]*>([\s\S]*?)<\/style>/gi,
    (_, css) => `<style>{${JSON.stringify(cleanCssContent(css))}}</style>`
  );

  // //  Step 4. Normalize fills/strokes
  // sanitized = sanitized
  //   .replace(/fill="(?!none")[^"]*"/gi, 'fill="currentColor"')
  //   .replace(/stroke="(?!none")[^"]*"/gi, 'stroke="currentColor"');

  //  Step 5. Remove banned inline style props (ALL elements)
  sanitized = applyDisallowedStylePropsInline(sanitized);

  //  Step 6. Convert inline style string → React object syntax
  sanitized = sanitized.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = convertStyleToObject(styleString);
    if (!styleObj || Object.keys(styleObj).length === 0) return '';
    return `style={${JSON.stringify(styleObj)}}`;
  });

  //  Step 7. Clean any existing style={{ ... }} React-style blocks
  sanitized = sanitized.replace(/style=\{\{([\s\S]*?)\}\}/g, (match, inner) => {
    try {
      const obj = Function(`"use strict"; return ({${inner}})`)();
      for (const key of Object.keys(obj)) {
        if (STYLE_PROPS_TO_REMOVE.has(String(key).toLowerCase())) {
          delete obj[key];
        }
      }
      const entries = Object.entries(obj).map(
        ([k, v]) => `${k}: ${JSON.stringify(v)}`
      );
      return entries.length === 0 ? '' : `style={{ ${entries.join(', ')} }}`;
    } catch {
      return match;
    }
  });

  //  Step 8. Clean root <svg> attributes
  sanitized = applySvgRootAttributesRules(sanitized);

  //  Step 9. React attribute name mappings
  sanitized = sanitized
    .replace(/class="/g, 'className="')
    .replace(/clip-rule="/g, 'clipRule="')
    .replace(/clip-path="/g, 'clipPath="')
    .replace(/fill-rule="/g, 'fillRule="')
    .replace(/fill-opacity="/g, 'fillOpacity="')
    .replace(/stroke-width="/g, 'strokeWidth="')
    .replace(/stroke-linecap="/g, 'strokeLinecap="')
    .replace(/stroke-linejoin="/g, 'strokeLinejoin="')
    .replace(/stroke-dasharray="/g, 'strokeDasharray="')
    .replace(/stroke-dashoffset="/g, 'strokeDashoffset="')
    .replace(/stroke-miterlimit="/g, 'strokeMiterlimit="')
    .replace(/stroke-opacity="/g, 'strokeOpacity="')
    .replace(/text-anchor="/g, 'textAnchor="')
    .replace(/text-decoration="/g, 'textDecoration="')
    .replace(/font-family="/g, 'fontFamily="')
    .replace(/font-size="/g, 'fontSize="')
    .replace(/font-weight="/g, 'fontWeight="')
    .replace(/font-style="/g, 'fontStyle="')
    .replace(/xml:space="/g, 'xmlSpace="')
    .replace(/xml:lang="/g, 'xmlLang="')
    .replace(/xlink:href="/g, 'xlinkHref="')
    .replace(/xmlns:xlink="/g, 'xmlnsXlink="')
    .replace(/stop-color="/g, 'stopColor="')
    .replace(/stop-opacity="/g, 'stopOpacity="')
    .replace(/marker-end="/g, 'markerEnd="')
    .replace(/marker-mid="/g, 'markerMid="')
    .replace(/color-interpolation-filters="/g, 'colorInterpolationFilters="')
    .replace(/letter-spacing="/g, 'letterSpacing="')
    .replace(/paint-order="/g, 'paintOrder="')
    .replace(/alignment-baseline="/g, 'alignmentBaseline="')
    .replace(/marker-start="/g, 'markerStart="')
    .replace(/flood-opacity="/g, 'floodOpacity="');

  // Step 10. Validate allowed attribute values
  for (const [attr, rule] of Object.entries(SVG_ALLOWED_ATTRIBUTE_VALUES)) {
    const regex = new RegExp(`${attr}="([^"]*)"`, 'gi');
    sanitized = sanitized.replace(regex, (match, value) => {
      if (Array.isArray(rule)) {
        return rule.includes(value) ? match : '';
      } else if (rule === 'number') {
        return !isNaN(Number(value)) ? match : '';
      } else if (rule === 'string') {
        return typeof value === 'string' && value.trim() !== '' ? match : '';
      }
      return '';
    });
  }

  return sanitized;
};
