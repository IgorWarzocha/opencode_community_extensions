export function HeroSection() {
  return (
    <div className="mb-16 max-w-3xl">
      <h1 className="text-5xl font-bold mb-6 heading-shadow">
        Extension Directory
      </h1>
      <p className="text-xl text-secondary mb-8 leading-relaxed dark:text-secondary-dark">
        Extend OpenCode with community plugins. Language servers, search tools,
        DevOps integrations, UI enhancements, and workflow automation.
      </p>
      <div className="flex gap-4">
        <a
          href="https://docs.opencode.dev/plugins"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-background hover:bg-primary-hover transition-colors text-sm dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-hover-dark"
        >
          Documentation
        </a>
        <a
          href="https://github.com/opencode/plugins"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border hover:border-primary transition-colors text-sm dark:border-border-dark dark:hover:border-primary-dark"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
