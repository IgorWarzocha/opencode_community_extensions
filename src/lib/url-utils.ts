/**
 * URL validation and formatting utilities
 *
 * Provides URL processing, validation, and formatting functions
 * for handling web links and external resources.
 */

/**
 * Basic URL validation
 *
 * @param url - URL to validate
 * @returns True if valid URL
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ["http:", "https:"].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

/**
 * Generate GitHub profile URL
 *
 * @param username - GitHub username
 * @returns Full GitHub profile URL
 *
 * @example
 * formatGithubUrl("johndoe") // "https://github.com/johndoe"
 */
export function formatGithubUrl(username: string): string {
  const cleanUsername = username.trim().replace(/^@/, "");
  return `https://github.com/${cleanUsername}`;
}

/**
 * Check if URL is external to current domain
 *
 * @param url - URL to check
 * @returns True if URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.origin !== window.location.origin;
  } catch {
    return true; // Treat invalid URLs as external
  }
}

/**
 * Extract repository name from URL
 *
 * @param url - Repository URL
 * @returns Repository name
 *
 * @example
 * extractRepoName("https://github.com/user/repo") // "repo"
 */
export function extractRepoName(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split("/").filter(Boolean);
    return pathParts[pathParts.length - 1] || "";
  } catch {
    return "";
  }
}
