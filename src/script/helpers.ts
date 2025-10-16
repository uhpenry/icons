import { IconType } from '../types';
import { iconEntry } from '../library/iconEntry';

export const pascalCase = (str: string): string => {
  let result = str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .trim()
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/\s+/g, '');
  if (/^\d/.test(result)) result = 'Icon' + result;
  return result;
};

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
