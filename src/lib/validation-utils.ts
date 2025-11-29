/**
 * Data validation utilities
 *
 * Provides validation functions for common data types and formats
 * used throughout the application for input validation and data integrity.
 */

/**
 * Check if value is empty
 *
 * @param value - Value to check
 * @returns True if value is empty
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

/**
 * Basic email validation
 *
 * @param email - Email to validate
 * @returns True if valid email format
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validate slug format
 *
 * @param slug - Slug to validate
 * @returns True if valid slug format
 */
export function isSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug.trim());
}
