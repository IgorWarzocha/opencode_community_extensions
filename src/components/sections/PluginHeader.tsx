import type { Doc } from "../../../convex/_generated/dataModel";
import { TagChip } from "../TagChip";

export interface PluginHeaderProps {
  plugin: Doc<"plugins">;
  onNavigateHome: () => void;
}

export function PluginHeader({ plugin, onNavigateHome }: PluginHeaderProps) {
  return (
    <>
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={onNavigateHome}
          className="text-sm text-accent hover:underline dark:text-accent-dark"
        >
          ← Back to directory
        </button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 heading-shadow">
          {plugin.name}
        </h1>
        <p className="text-xl text-secondary mb-6 leading-relaxed dark:text-secondary-dark">
          {plugin.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          <TagChip label={plugin.category} variant="category" />
          {plugin.compatibility.map((comp) => (
            <TagChip key={comp} label={comp} variant="compatibility" />
          ))}
          {plugin.tags.map((tag) => (
            <TagChip key={tag} label={tag} variant="tag" />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-12 dark:border-border-dark"></div>
    </>
  );
}
