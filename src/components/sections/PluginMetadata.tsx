import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Doc } from "../../../convex/_generated/dataModel";

export interface PluginMetadataProps {
  plugin: Doc<"extensions">;
}

export function PluginMetadata({ plugin }: PluginMetadataProps) {
  const author = useQuery(api.authors.getById, { authorId: plugin.authorId });

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Metadata</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-sm">
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
            {author === undefined ? (
              <span className="text-muted">Loading author...</span>
            ) : author === null ? (
              <span className="text-muted">Author not found</span>
            ) : (
              <div>
                <div className="font-medium">{author.name}</div>
                {(() => {
                  if (author.githubUsername) {
                    return (
                      <a
                        href={`https://github.com/${author.githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-xs dark:text-accent-dark"
                      >
                        @{author.githubUsername}
                      </a>
                    );
                  }
                  if (author.websiteUrl) {
                    return (
                      <a
                        href={author.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-xs dark:text-accent-dark"
                      >
                        Website
                      </a>
                    );
                  }
                  if (author.twitterUsername) {
                    return (
                      <a
                        href={`https://twitter.com/${author.twitterUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-xs dark:text-accent-dark"
                      >
                        @{author.twitterUsername}
                      </a>
                    );
                  }
                  if (author.linkedinUrl) {
                    return (
                      <a
                        href={author.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-xs dark:text-accent-dark"
                      >
                        LinkedIn
                      </a>
                    );
                  }
                  return null;
                })()}
              </div>
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
        {!plugin.docsUrl && <div></div>}
      </div>
    </div>
  );
}
