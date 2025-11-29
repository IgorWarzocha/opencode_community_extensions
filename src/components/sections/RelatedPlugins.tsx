import type { Doc } from "../../../convex/_generated/dataModel";

interface RelatedPluginsProps {
  relatedPlugins: Doc<"plugins">[];
  category: string;
  onNavigateToDetail: (slug: string) => void;
}

export function RelatedPlugins({
  relatedPlugins,
  category,
  onNavigateToDetail,
}: RelatedPluginsProps) {
  if (relatedPlugins.length === 0) {
    return null;
  }

  return (
    <>
      <div className="border-t border-border mb-12 dark:border-border-dark"></div>
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Related {category} Extensions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedPlugins.map((related) => (
            <div
              key={related._id}
              className="border border-border p-4 hover:border-primary transition-colors dark:border-border-dark dark:hover:border-primary-dark"
            >
              <h3 className="font-semibold mb-2">{related.name}</h3>
              <p className="text-sm text-secondary mb-3 dark:text-secondary-dark">
                {related.shortDescription}
              </p>
              <button
                onClick={() => onNavigateToDetail(related.slug)}
                className="text-sm text-accent hover:underline dark:text-accent-dark"
              >
                View details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
