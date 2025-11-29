/**
 * Plugin filter type definitions
 *
 * This file contains all type definitions for the plugin filtering system.
 * Following TypeScript 5.9+ best practices with strict typing and verbatimModuleSyntax.
 */

import type {
  PLUGIN_CATEGORIES,
  COMPATIBILITY_OPTIONS,
} from "../constants/plugin-form.js";

/**
 * Plugin category type for filters (derived from constants)
 */
export type Category = (typeof PLUGIN_CATEGORIES)[number];

/**
 * Plugin compatibility type for filters (derived from constants)
 */
export type Compatibility = (typeof COMPATIBILITY_OPTIONS)[number];

/**
 * Filter state interface for managing filter values
 */
export interface PluginFilterState {
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
export interface PluginFilters {
  /** Optional search query */
  search?: string;
  /** Optional category filter */
  category?: Category;
  /** Optional compatibility filter */
  compatibility?: Compatibility;
}

/**
 * Return type for usePluginFilters hook
 */
export interface UsePluginFiltersReturn {
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
  filters: PluginFilters;
}
