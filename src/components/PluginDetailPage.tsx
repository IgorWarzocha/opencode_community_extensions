import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { TagChip } from "./TagChip";
import { CodeBlock } from "./CodeBlock";

interface PluginDetailPageProps {
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

  const installCommand = `opencode plugin install ${plugin.slug}`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
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

      {/* Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-secondary leading-relaxed dark:text-secondary-dark">
          {plugin.description}
        </p>
      </div>

      {/* Features */}
      {plugin.features.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2">
            {plugin.features.map((feature, index) => (
              <li
                key={index}
                className="text-secondary flex items-start dark:text-secondary-dark"
              >
                <span className="mr-3 text-accent dark:text-accent-dark">
                  •
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Installation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code={installCommand} />
      </div>

      {/* Metadata */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Metadata</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-secondary mb-1 dark:text-secondary-dark">
              Version
            </div>
            <div className="font-mono">{plugin.version}</div>
          </div>
          <div>
            <div className="text-secondary mb-1 dark:text-secondary-dark">
              Author
            </div>
            <div>
              {plugin.authorGithub ? (
                <a
                  href={`https://github.com/${plugin.authorGithub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline dark:text-accent-dark"
                >
                  {plugin.authorName}
                </a>
              ) : (
                plugin.authorName
              )}
            </div>
          </div>
          <div>
            <div className="text-secondary mb-1 dark:text-secondary-dark">
              Repository
            </div>
            <div>
              <a
                href={plugin.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline break-all dark:text-accent-dark"
              >
                GitHub
              </a>
            </div>
          </div>
          {plugin.docsUrl && (
            <div>
              <div className="text-secondary mb-1 dark:text-secondary-dark">
                Documentation
              </div>
              <div>
                <a
                  href={plugin.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-all dark:text-accent-dark"
                >
                  Docs
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Plugins */}
      {relatedPlugins && relatedPlugins.length > 0 && (
        <>
          <div className="border-t border-border mb-12 dark:border-border-dark"></div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Related {plugin.category} Extensions
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
      )}
    </div>
  );
}
