"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { PluginCard } from "./PluginCard";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";

interface HomePageProps {
  onNavigateToDetail: (slug: string) => void;
}

type Category = "LSP" | "RAG/Search" | "DevOps" | "UI" | "Workflow";
type Compatibility = "tui" | "cli" | "ide" | "server" | "zen";

export function HomePage({ onNavigateToDetail }: HomePageProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [compatibility, setCompatibility] = useState<Compatibility | "">("");

  const plugins = useQuery(
    api.plugins.list,
    search || category || compatibility
      ? {
          ...(search && { search }),
          ...(category && { category: category as Category }),
          ...(compatibility && {
            compatibility: compatibility as Compatibility,
          }),
        }
      : {},
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-16 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Extension Directory</h1>
        <p className="text-xl text-secondary mb-8 leading-relaxed">
          Extend OpenCode with community plugins. Language servers, search
          tools, DevOps integrations, UI enhancements, and workflow automation.
        </p>
        <div className="flex gap-4">
          <a
            href="https://docs.opencode.dev/plugins"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white hover:bg-primary-hover transition-colors text-sm"
          >
            Documentation
          </a>
          <a
            href="https://github.com/opencode/plugins"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border hover:border-primary transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-12"></div>

      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          category={category}
          compatibility={compatibility}
          onCategoryChange={(value) => setCategory(value as Category | "")}
          onCompatibilityChange={(value) =>
            setCompatibility(value as Compatibility | "")
          }
        />
      </div>

      {/* Results */}
      {plugins === undefined ? (
        <div className="flex justify-center py-12">
          <div className="text-secondary">Loading plugins...</div>
        </div>
      ) : plugins.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-secondary">
            No plugins found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.map((plugin) => (
            <PluginCard
              key={plugin._id}
              plugin={plugin}
              onNavigateToDetail={onNavigateToDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
