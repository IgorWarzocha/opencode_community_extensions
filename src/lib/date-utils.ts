/**
 * Date and time formatting utilities
 *
 * Provides consistent date formatting and time-related functions
 * for displaying temporal data throughout the application.
 */

/**
 * Format date consistently
 *
 * @param date - Date to format
 * @returns Formatted date string
 *
 * @example
 * formatDate(new Date()) // "Nov 29, 2025"
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return "Invalid date";
  }

  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Get relative time string
 *
 * @param date - Date to compare
 * @returns Relative time string
 *
 * @example
 * timeAgo(new Date(Date.now() - 86400000)) // "1 day ago"
 */
export function timeAgo(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();

  if (isNaN(diffMs)) return "Invalid date";

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
}
