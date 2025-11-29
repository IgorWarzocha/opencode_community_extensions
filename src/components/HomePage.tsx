"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { usePluginFilters } from "../hooks/usePluginFilters.js";
import type { Category, Compatibility } from "../types/index.js";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { HeroSection } from "./sections/HeroSection";
import { ResultsSection } from "./sections/ResultsSection";

export interface HomePageProps {
  onNavigateToDetail: (slug: string) => void;
}

export function HomePage({ onNavigateToDetail }: HomePageProps) {
  const {
    search,
    category,
    compatibility,
    setSearch,
    setCategory,
    setCompatibility,
    filters,
  } = usePluginFilters();

  const plugins = useQuery(api.plugins.list, filters);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Divider */}
      <div className="border-t border-border mb-12 dark:border-border-dark"></div>

      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          category={category}
          compatibility={compatibility}
          onCategoryChange={(value: string) =>
            setCategory(value as Category | "")
          }
          onCompatibilityChange={(value: string) =>
            setCompatibility(value as Compatibility | "")
          }
        />
      </div>

      {/* Results */}
      <ResultsSection
        plugins={plugins}
        onNavigateToDetail={onNavigateToDetail}
      />
    </div>
  );
}
