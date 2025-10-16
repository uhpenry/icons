import { SvgAllowedType } from "../types";

/**
 * Style properties that should be *completely removed* from SVG styles.
 * This list is case-insensitive and covers both kebab-case and camelCase variants.
 */
export const STYLE_PROPS_TO_REMOVE = new Set([
  // Design tool artifacts
  'enablebackground',
  'enable-background',
  'solidcolor',
  'solid-color',
  'blockprogression',
  'block-progression',
  'solid-opacity',
  'inkscapefontspecification',

  // Rendering or unsupported props
  'shape-rendering',
  'color-interpolation-filters',
  'color-profile',
  'baseline-shift',
  'lighting-color',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'writing-mode',
  'text-rendering',

  // Noise
  'display',
  'overflow',
  'clip',
  'cursor',
  'pointer-events',
  'user-select',
  'mix-blend-mode',
  'sketch:type',
  'isolation',
]);

export const BANNED_STYLE_PROPS = new Set([
  // Deprecated / non-standard
  'enablebackground',
  'shape-rendering',
  'color-interpolation-filters',
  'color-profile',
  'baseline-shift',
  'sketch:type',
  'lighting-color',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'writing-mode',
  'text-rendering',

  // Rarely useful in React / SVG context
  'isolation',
  'mix-blend-mode',
  'vector-effect',
  'cursor',
  'pointer-events',
  'user-select',

  // Export noise from design tools
  'display',
  'overflow',
  'clip',
  'enable-background', // included for redundancy

  // Unsupported field in the CSS Properties
  'blockProgression',
  'InkscapeFontSpecification',
]);

export const SVG_ALLOWED_ATTRIBUTE_VALUES: Record<string, SvgAllowedType> = {

  // Stroke attributes
  strokeLinecap: ['butt', 'round', 'square', 'inherit'],
  strokeLinejoin: ['miter', 'round', 'bevel', 'inherit'],
  strokeMiterlimit: 'number',
  strokeDasharray: 'string',
  strokeDashoffset: 'string',
  strokeOpacity: 'number',
  strokeWidth: 'number',
  stroke: 'string',

  // Fill & clip
  fillRule: ['nonzero', 'evenodd', 'inherit'],
  clipRule: ['nonzero', 'evenodd'],
  fillOpacity: 'number',
  fill: 'string',
  clipPath: 'string',
  mask: 'string',

  // Text
  textAnchor: ['start', 'middle', 'end', 'inherit'],
  alignmentBaseline: [
    'auto',
    'baseline',
    'before-edge',
    'text-before-edge',
    'middle',
    'central',
    'after-edge',
    'text-after-edge',
    'ideographic',
    'alphabetic',
    'hanging',
    'mathematical',
    'inherit',
  ],
  dominantBaseline: [
    'auto',
    'text-bottom',
    'alphabetic',
    'ideographic',
    'middle',
    'central',
    'mathematical',
    'hanging',
    'text-top',
  ],

  // Font
  fontStyle: ['normal', 'italic', 'oblique', 'inherit'],
  fontWeight: [
    'normal',
    'bold',
    'bolder',
    'lighter',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'inherit',
  ],
  fontVariant: ['normal', 'small-caps', 'inherit'],
  fontStretch: [
    'normal',
    'wider',
    'narrower',
    'ultra-condensed',
    'extra-condensed',
    'condensed',
    'semi-condensed',
    'semi-expanded',
    'expanded',
    'extra-expanded',
    'ultra-expanded',
  ],

  // Rendering
  colorInterpolationFilters: ['auto', 'sRGB', 'linearRGB', 'inherit'],
  shapeRendering: ['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision'],
  textRendering: [
    'auto',
    'optimizeSpeed',
    'optimizeLegibility',
    'geometricPrecision',
  ],
  imageRendering: ['auto', 'optimizeQuality', 'optimizeSpeed'],

  // Blend and compositing
  mixBlendMode: [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity',
  ],
  isolation: ['auto', 'isolate'],

  // Display and visibility
  display: [
    'inline',
    'block',
    'list-item',
    'run-in',
    'marker',
    'table',
    'none',
  ],
  visibility: ['visible', 'hidden', 'collapse', 'inherit'],

  // Overflow and clip
  overflow: ['visible', 'hidden', 'scroll', 'auto'],
  clip: 'string',

  // Directionality
  direction: ['ltr', 'rtl', 'inherit'],
};

/**
 * List of SVG attributes allowed in React-rendered SVG components.
 *
 * Only these attributes will be preserved when sanitizing or preparing
 * SVG content for React, to prevent React warnings and remove unsafe
 * or unnecessary attributes.
 *
 * Usage: Any attribute not in this list will be stripped from the <svg> element.
 */
export const ALLOWED_SVG_ATTRIBUTES: string[] = [
  // Core namespace attributes
  'xmlns', // Standard SVG namespace
  'xmlnsXlink', // XLink namespace for linking resources
  'xmlSpace', // Whitespace handling for XML

  // Layout attributes
  'viewBox', // Defines SVG coordinate system
  'width', // SVG width
  'height', // SVG height

  // React / DOM integration
  'ref', // React ref for element reference
  'role', // ARIA role for accessibility
  'aria-label', // Accessibility label
  'focusable', // Focus handling in IE / Edge

  // Visual attributes
  'fill', // Fill color
  'stroke', // Stroke color
];
