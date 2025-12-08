/**
 * Custom hook for managing plugin filters
 *
 * This hook encapsulates all filter state management logic for the plugin listing,
 * following React 19.2 patterns and Single Responsibility principle.
 */

import { useMemo, useState } from "react";
import type {
  Category,
  Compatibility,
  ExtensionFilters,
  UseExtensionFiltersReturn,
} from "../types/plugin-filters.js";

/**
 * Custom hook for managing plugin filter state and constructing filter objects.
 */
export function usePluginFilters(): UseExtensionFiltersReturn {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<Category | "">("");
  const [compatibility, setCompatibility] = useState<Compatibility | "">("");

  const filters = useMemo<ExtensionFilters>(() => {
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
