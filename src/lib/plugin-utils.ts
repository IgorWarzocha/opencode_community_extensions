/**
 * Plugin-specific utilities
 *
 * Provides utility functions specific to plugin management,
 * installation, and formatting for the OpenCode plugin ecosystem.
 */

/**
 * Generate opencode install command
 *
 * @param slug - Plugin slug
 * @returns Install command string
 *
 * @example
 * generateInstallCommand("rust-analyzer") // "opencode install rust-analyzer"
 */
export function generateInstallCommand(slug: string): string {
  const cleanSlug = slug.trim();
  return `opencode install ${cleanSlug}`;
}

/**
 * Format file size in human-readable format
 *
 * @param bytes - Size in bytes
 * @returns Formatted file size string
 *
 * @example
 * formatFileSize(1024) // "1.0 KB"
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";

  const units = ["B", "KB", "MB", "GB", "TB"];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${units[i]}`;
}
