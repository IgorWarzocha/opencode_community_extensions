/**
 * Custom hook for managing plugin filters
 *
 * This hook encapsulates all filter state management logic for the plugin listing,
 * following React 19.2 patterns and Single Responsibility principle.
 */

import { useState, useMemo } from "react";
import type {
  Category,
  Compatibility,
  PluginFilters,
  UsePluginFiltersReturn,
} from "../types/plugin-filters.js";

/**
 * Custom hook for managing plugin filter state and constructing filter objects
 * @returns Filter state, setters, and constructed filters object
 */
export function usePluginFilters(): UsePluginFiltersReturn {
  // Filter state management
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<Category | "">("");
  const [compatibility, setCompatibility] = useState<Compatibility | "">("");

  // Construct filters object for useQuery
  const filters = useMemo((): PluginFilters => {
    // Only include non-empty filters in the query object
    if (!search && !category && !compatibility) {
      return {};
    }

    return {
      ...(search && { search }),
      ...(category && { category }),
      ...(compatibility && { compatibility }),
    };
  }, [search, category, compatibility]);

  return {
    search,
    category,
    compatibility,
    setSearch,
    setCategory,
    setCompatibility,
    filters,
  };
}
