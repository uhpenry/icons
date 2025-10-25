import { IconType, SvgEntry } from '../types';
import { iconEntry } from '../library/iconEntry';
import { svgEntry } from '../library/svgEntry';

/**
 * Escape special regex characters in a string
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escapes special chars
}

/**
 * Get icon by name or alias
 * @param name - name or alias to search
 * @param defaultIcon - optional default icon if not found
 */
export function getIcon(
  name: string,
  defaultIcon?: IconType
): IconType | undefined {
  try {
    if (!name) return defaultIcon;
    const search = name.toLowerCase();

    // Create a regex for exact match, ignoring case, and escape special chars
    const regex = new RegExp(`^${escapeRegex(search)}$`, 'i');

    for (const entry of iconEntry) {
      // Check main name
      if (regex.test(entry.name.toLowerCase())) {
        return entry.icon;
      }
      // Check aliases
      if (
        entry.aliases.some((alias: string) => regex.test(alias.toLowerCase()))
      ) {
        return entry.icon;
      }
    }
    return defaultIcon;
  } catch (error: any) {
    console.log({
      message: `@uhpenry/icons: ${error?.message}. Default icon was used.`,
    });
    return defaultIcon || iconEntry[0].icon;
  }
}

/**
 * Retrieves the SVG entry (raw SVG content + aliases) for a given icon name.
 *
 * @param {string} name - The name or alias of the icon to retrieve.
 * @returns {SvgEntry | undefined} The matching SVG entry object if found, otherwise the default (first) icon entry.
 *
 * @description
 * - Matches both primary names and aliases (case-insensitive).
 * - Falls back to the first icon in `svgEntry` if no match is found or an error occurs.
 * - Logs meaningful messages in case of invalid input or unexpected errors.
 */
export function getSvg(name: string): SvgEntry | undefined {
  try {
    if (!name || typeof name !== 'string') {
      console.log({
        message:
          '@uhpenry/icons: No valid icon name provided. Default icon has been used instead.',
      });
      return svgEntry[0];
    }

    const search = name.toLowerCase();

    // Escape special characters and create a case-insensitive exact match regex
    const regex = new RegExp(`^${escapeRegex(search)}$`, 'i');

    for (const entry of svgEntry) {
      // Match main name
      if (regex.test(entry.name.toLowerCase())) {
        return entry;
      }

      // Match aliases
      if (
        entry.aliases.some((alias: string) => regex.test(alias.toLowerCase()))
      ) {
        return entry;
      }
    }

    // If no match found, use default icon
    console.log({
      message: `@uhpenry/icons: No icon found for "${name}". Default icon has been used instead.`,
    });
    return svgEntry[0];
  } catch (error: any) {
    console.log({
      message: `@uhpenry/icons: An unexpected error occurred while retrieving the icon — ${error?.message}. Default icon has been used instead.`,
    });
    return svgEntry[0];
  }
}

export const pascalCase = (str: string): string => {
  let result = str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .trim()
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/\s+/g, '');
  if (/^\d/.test(result)) result = 'Icon' + result;
  return result;
};
