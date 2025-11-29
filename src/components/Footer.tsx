export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-border bg-surface dark:bg-surface-dark transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-primary-dark">
              opencode/extensions
            </h3>
            <p className="text-sm text-secondary dark:text-secondary-dark mb-4">
              Discover and explore community-built extensions for the Opencode
              ecosystem. Browse curated tools that enhance your development
              workflow.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-primary dark:text-primary-dark">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Browse Extensions
                </a>
              </li>
              <li>
                <a
                  href="/submit"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Submit Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-primary dark:text-primary-dark">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/opencode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.opencode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://opencode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Opencode
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-primary dark:text-primary-dark">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/opencode/extensions/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opencode/extensions/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opencode/extensions/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border dark:border-border-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary dark:text-secondary-dark">
              © {currentYear} Opencode Community Extensions. Part of the
              Opencode ecosystem.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/opencode/extensions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                aria-label="GitHub Repository"
              >
                View Source
              </a>
              <a
                href="https://github.com/opencode/extensions/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-accent transition-colors dark:text-secondary-dark dark:hover:text-accent-dark"
                aria-label="License"
              >
                License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
