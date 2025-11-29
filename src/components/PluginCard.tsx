import type { Doc } from "../../convex/_generated/dataModel.js";
import { TagChip } from "./TagChip";

interface PluginCardProps {
  plugin: Doc<"plugins">;
  onNavigateToDetail: (slug: string) => void;
}

export function PluginCard({ plugin, onNavigateToDetail }: PluginCardProps) {
  return (
    <div className="border border-border p-6 hover:border-primary transition-colors bg-surface dark:bg-surface-dark dark:border-border-dark dark:hover:border-primary-dark">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{plugin.name}</h3>
        <p className="text-sm text-secondary leading-relaxed dark:text-secondary-dark">
          {plugin.shortDescription}
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <TagChip label={plugin.category} variant="category" />
        {plugin.compatibility.slice(0, 3).map((comp) => (
          <TagChip key={comp} label={comp} variant="compatibility" />
        ))}
      </div>

      <button
        onClick={() => onNavigateToDetail(plugin.slug)}
        className="text-sm text-accent hover:underline dark:text-accent-dark"
      >
        View details →
      </button>
    </div>
  );
}
