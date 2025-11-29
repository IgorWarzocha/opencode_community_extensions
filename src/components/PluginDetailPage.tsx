import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { PluginHeader } from "./sections/PluginHeader";
import { PluginDescription } from "./sections/PluginDescription";
import { PluginFeatures } from "./sections/PluginFeatures";
import { PluginInstallation } from "./sections/PluginInstallation";
import { PluginMetadata } from "./sections/PluginMetadata";
import { RelatedPlugins } from "./sections/RelatedPlugins";

export interface PluginDetailPageProps {
  slug: string;
  onNavigateToDetail: (slug: string) => void;
  onNavigateHome: () => void;
}

export function PluginDetailPage({
  slug,
  onNavigateToDetail,
  onNavigateHome,
}: PluginDetailPageProps) {
  const plugin = useQuery(api.plugins.getBySlug, { slug });
  const relatedPlugins = useQuery(
    api.plugins.getRelated,
    plugin ? { category: plugin.category, currentSlug: slug } : "skip",
  );

  if (plugin === undefined) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-secondary dark:text-secondary-dark">
          Loading plugin...
        </div>
      </div>
    );
  }

  if (plugin === null) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <button
            onClick={onNavigateHome}
            className="text-sm text-accent hover:underline dark:text-accent-dark"
          >
            ← Back to directory
          </button>
        </div>
        <div className="text-secondary dark:text-secondary-dark">
          Extension not found.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PluginHeader plugin={plugin} onNavigateHome={onNavigateHome} />
      <PluginDescription plugin={plugin} />
      <PluginFeatures plugin={plugin} />
      <PluginInstallation plugin={plugin} />
      <PluginMetadata plugin={plugin} />
      {relatedPlugins && (
        <RelatedPlugins
          relatedPlugins={relatedPlugins}
          category={plugin.category}
          onNavigateToDetail={onNavigateToDetail}
        />
      )}
    </div>
  );
}
