/**
 * String formatting and manipulation utilities
 *
 * Provides common string operations for text processing, formatting,
 * and transformation throughout the application.
 */

/**
 * Convert text to URL-friendly slug
 *
 * @param text - Text to convert to slug
 * @returns URL-friendly slug string
 *
 * @example
 * slugify("Hello World!") // "hello-world"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars except hyphens
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Truncate text with ellipsis
 *
 * @param text - Text to truncate
 * @param length - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 *
 * @example
 * truncate("This is a long text", 10) // "This is..."
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

/**
 * Capitalize first letter of text
 *
 * @param text - Text to capitalize
 * @returns Capitalized text
 *
 * @example
 * capitalize("hello world") // "Hello world"
 */
export function capitalize(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert text to kebab-case
 *
 * @param text - Text to convert
 * @returns kebab-case string
 *
 * @example
 * kebabCase("HelloWorld") // "hello-world"
 */
export function kebabCase(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert hyphen between camelCase
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .toLowerCase();
}
