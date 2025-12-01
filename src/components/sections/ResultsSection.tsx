import type { Doc } from "../../../convex/_generated/dataModel.js";
import { PluginCard } from "../PluginCard";

export interface ResultsSectionProps {
  plugins: Doc<"extensions">[] | undefined | null;
  onNavigateToDetail: (slug: string) => void;
}

export function ResultsSection({
  plugins,
  onNavigateToDetail,
}: ResultsSectionProps) {
  if (plugins === undefined || plugins === null) {
    return (
      <div className="flex justify-center py-12">
        <div className="text-secondary dark:text-secondary-dark">
          Loading plugins...
        </div>
      </div>
    );
  }

  if (plugins.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary dark:text-secondary-dark">
          No plugins found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plugins.map((plugin) => (
        <PluginCard
          key={plugin._id}
          plugin={plugin}
          onNavigateToDetail={onNavigateToDetail}
        />
      ))}
    </div>
  );
}
