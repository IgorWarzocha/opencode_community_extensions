/**
 * Main utilities module with re-exports
 *
 * This file serves as the central entry point for all utility functions
 * while maintaining modular organization. The original `cn` function is kept here
 * for backward compatibility and convenience.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Re-export all modular utilities for backward compatibility
export * from "./string-utils.js";
export * from "./url-utils.js";
export * from "./array-utils.js";
export * from "./date-utils.js";
export * from "./validation-utils.js";
export * from "./plugin-utils.js";
export * from "./type-utils.js";

/**
 * Merge class names using clsx and tailwind-merge
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
