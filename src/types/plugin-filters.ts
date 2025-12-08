/**
 * Plugin filter type definitions
 *
 * This file contains all type definitions for the plugin filtering system.
 * Following TypeScript 5.9+ best practices with strict typing and verbatimModuleSyntax.
 */

import type {
  EXTENSION_CATEGORIES,
  COMPATIBILITY_OPTIONS,
} from "../constants/plugin-form.js";

/**
 * Extension category type for filters (derived from constants)
 */
export type Category = (typeof EXTENSION_CATEGORIES)[number];

/**
 * Extension compatibility type for filters (derived from constants)
 */
export type Compatibility = (typeof COMPATIBILITY_OPTIONS)[number];

/**
 * Filter state interface for managing filter values
 */
export interface ExtensionFilterState {
  /** Search query string */
  search: string;
  /** Selected category filter */
  category: Category | "";
  /** Selected compatibility filter */
  compatibility: Compatibility | "";
}

/**
 * Filter object interface for useQuery API
 */
export interface ExtensionFilters {
  /** Optional search query */
  search?: string;
  /** Optional category filter */
  category?: Category;
  /** Optional compatibility filter */
  compatibility?: Compatibility;
  /** Optional featured flag */
  featured?: boolean;
  /** Optional verified flag */
  verified?: boolean;
  /** Optional limit for listings */
  limit?: number;
}

/**
 * Return type for useExtensionFilters hook
 */
export interface UseExtensionFiltersReturn {
  /** Current search value */
  search: string;
  /** Current category value */
  category: Category | "";
  /** Current compatibility value */
  compatibility: Compatibility | "";
  /** Setter for search value */
  setSearch: (value: string) => void;
  /** Setter for category value */
  setCategory: (value: Category | "") => void;
  /** Setter for compatibility value */
  setCompatibility: (value: Compatibility | "") => void;
  /** Constructed filters object for useQuery */
  filters: ExtensionFilters;
}
