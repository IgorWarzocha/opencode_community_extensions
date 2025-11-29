import type { Doc } from "../../../convex/_generated/dataModel";

interface PluginMetadataProps {
  plugin: Doc<"plugins">;
}

export function PluginMetadata({ plugin }: PluginMetadataProps) {
  return (
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
  );
}
