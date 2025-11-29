import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedPlugins = mutation({
  args: {},
  returns: v.object({
    message: v.string(),
  }),
  handler: async (ctx) => {
    const existingPlugins = await ctx.db.query("plugins").collect();
    if (existingPlugins.length > 0) {
      return { message: "Database already seeded" };
    }

    const plugins = [
      {
        name: "rust-analyzer",
        slug: "rust-analyzer",
        shortDescription: "Official Rust language server with IDE features",
        description:
          "rust-analyzer is a modular compiler frontend for the Rust language. It provides IDE functionality through the Language Server Protocol, including code completion, go-to-definition, find references, and more.",
        category: "LSP" as const,
        tags: ["rust", "lsp", "ide", "compiler"],
        compatibility: ["tui" as const, "cli" as const, "ide" as const],
        features: [
          "Fast incremental compilation",
          "Smart code completion",
          "Inline type hints",
          "Refactoring support",
          "Macro expansion",
        ],
        repoUrl: "https://github.com/rust-lang/rust-analyzer",
        docsUrl: "https://rust-analyzer.github.io",
        version: "0.3.1820",
        authorName: "Rust Language Team",
        authorGithub: "rust-lang",
        status: "published" as const,
      },
      {
        name: "ripgrep-search",
        slug: "ripgrep-search",
        shortDescription: "Lightning-fast recursive search with regex support",
        description:
          "A line-oriented search tool that recursively searches the current directory for a regex pattern. Combines the usability of The Silver Searcher with the raw speed of grep.",
        category: "RAG/Search" as const,
        tags: ["search", "grep", "regex", "performance"],
        compatibility: ["tui" as const, "cli" as const, "zen" as const],
        features: [
          "Blazing fast search",
          "Respects .gitignore",
          "Unicode support",
          "Automatic encoding detection",
          "Parallel directory traversal",
        ],
        repoUrl: "https://github.com/BurntSushi/ripgrep",
        docsUrl: "https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md",
        version: "14.1.0",
        authorName: "Andrew Gallant",
        authorGithub: "BurntSushi",
        status: "published" as const,
      },
      {
        name: "docker-compose-manager",
        slug: "docker-compose-manager",
        shortDescription: "Manage Docker Compose services from your editor",
        description:
          "Seamlessly manage Docker Compose services directly from OpenCode. Start, stop, restart services, view logs, and monitor container status without leaving your editor.",
        category: "DevOps" as const,
        tags: ["docker", "containers", "devops", "orchestration"],
        compatibility: [
          "tui" as const,
          "cli" as const,
          "ide" as const,
          "server" as const,
        ],
        features: [
          "Service lifecycle management",
          "Real-time log streaming",
          "Container health monitoring",
          "Environment variable editor",
          "Multi-compose file support",
        ],
        repoUrl: "https://github.com/opencode/docker-compose-manager",
        docsUrl: "https://docs.opencode.dev/plugins/docker-compose",
        version: "2.4.0",
        authorName: "OpenCode Team",
        authorGithub: "opencode",
        status: "published" as const,
      },
      {
        name: "theme-studio",
        slug: "theme-studio",
        shortDescription: "Visual theme editor with live preview",
        description:
          "Create and customize OpenCode themes with a visual editor. Preview changes in real-time, export to JSON, and share with the community.",
        category: "UI" as const,
        tags: ["themes", "customization", "ui", "design"],
        compatibility: ["tui" as const, "ide" as const, "zen" as const],
        features: [
          "Live theme preview",
          "Color picker with contrast checker",
          "Import/export themes",
          "Syntax highlighting preview",
          "Community theme gallery",
        ],
        repoUrl: "https://github.com/opencode/theme-studio",
        docsUrl: "https://docs.opencode.dev/plugins/theme-studio",
        version: "1.2.3",
        authorName: "Design Team",
        authorGithub: "opencode-design",
        status: "published" as const,
      },
      {
        name: "git-flow-assistant",
        slug: "git-flow-assistant",
        shortDescription: "Streamlined Git workflow automation",
        description:
          "Automate common Git workflows with smart branch management, commit templates, and PR creation. Supports Git Flow, GitHub Flow, and custom workflows.",
        category: "Workflow" as const,
        tags: ["git", "workflow", "automation", "vcs"],
        compatibility: ["tui" as const, "cli" as const, "ide" as const],
        features: [
          "Branch workflow automation",
          "Commit message templates",
          "PR creation from editor",
          "Conflict resolution helper",
          "Interactive rebase UI",
        ],
        repoUrl: "https://github.com/opencode/git-flow-assistant",
        docsUrl: "https://docs.opencode.dev/plugins/git-flow",
        version: "3.1.0",
        authorName: "VCS Team",
        authorGithub: "opencode-vcs",
        status: "published" as const,
      },
      {
        name: "typescript-lsp-enhanced",
        slug: "typescript-lsp-enhanced",
        shortDescription: "Enhanced TypeScript language server with AI hints",
        description:
          "Extended TypeScript language server with AI-powered code suggestions, advanced refactoring, and intelligent import management.",
        category: "LSP" as const,
        tags: ["typescript", "javascript", "lsp", "ai"],
        compatibility: ["tui" as const, "cli" as const, "ide" as const],
        features: [
          "AI-powered completions",
          "Smart import sorting",
          "Unused code detection",
          "Type-aware refactoring",
          "JSDoc generation",
        ],
        repoUrl: "https://github.com/opencode/ts-lsp-enhanced",
        docsUrl: "https://docs.opencode.dev/plugins/typescript-lsp",
        version: "5.3.2",
        authorName: "Language Team",
        authorGithub: "opencode-lang",
        status: "published" as const,
      },
      {
        name: "semantic-search",
        slug: "semantic-search",
        shortDescription: "AI-powered semantic code search",
        description:
          "Search your codebase using natural language queries. Find code by describing what it does, not just by matching text patterns.",
        category: "RAG/Search" as const,
        tags: ["ai", "search", "semantic", "nlp"],
        compatibility: [
          "tui" as const,
          "cli" as const,
          "ide" as const,
          "server" as const,
        ],
        features: [
          "Natural language queries",
          "Code similarity search",
          "Cross-repository search",
          "Semantic code navigation",
          "Context-aware results",
        ],
        repoUrl: "https://github.com/opencode/semantic-search",
        docsUrl: "https://docs.opencode.dev/plugins/semantic-search",
        version: "1.0.5",
        authorName: "AI Research Team",
        authorGithub: "opencode-ai",
        status: "published" as const,
      },
      {
        name: "kubernetes-dashboard",
        slug: "kubernetes-dashboard",
        shortDescription: "Monitor and manage K8s clusters from your editor",
        description:
          "Full-featured Kubernetes dashboard integrated into OpenCode. View pods, deployments, services, and logs. Execute kubectl commands with autocomplete.",
        category: "DevOps" as const,
        tags: ["kubernetes", "k8s", "devops", "cloud"],
        compatibility: ["tui" as const, "ide" as const, "server" as const],
        features: [
          "Cluster resource viewer",
          "Pod log streaming",
          "kubectl command palette",
          "YAML manifest editor",
          "Multi-cluster support",
        ],
        repoUrl: "https://github.com/opencode/k8s-dashboard",
        docsUrl: "https://docs.opencode.dev/plugins/kubernetes",
        version: "2.1.0",
        authorName: "Cloud Team",
        authorGithub: "opencode-cloud",
        status: "published" as const,
      },
      {
        name: "minimal-ui-pack",
        slug: "minimal-ui-pack",
        shortDescription: "Distraction-free UI components and layouts",
        description:
          "A collection of minimal UI components designed for focus. Includes zen mode enhancements, custom status bars, and clean panel layouts.",
        category: "UI" as const,
        tags: ["ui", "minimal", "zen", "focus"],
        compatibility: ["tui" as const, "ide" as const, "zen" as const],
        features: [
          "Enhanced zen mode",
          "Custom status bar widgets",
          "Minimal panel layouts",
          "Focus indicators",
          "Distraction-free writing mode",
        ],
        repoUrl: "https://github.com/opencode/minimal-ui",
        docsUrl: "https://docs.opencode.dev/plugins/minimal-ui",
        version: "1.5.0",
        authorName: "UX Team",
        authorGithub: "opencode-ux",
        status: "published" as const,
      },
      {
        name: "task-runner-pro",
        slug: "task-runner-pro",
        shortDescription: "Advanced task automation and script management",
        description:
          "Define, organize, and run tasks with a powerful task runner. Supports npm scripts, Makefiles, custom commands, and task dependencies.",
        category: "Workflow" as const,
        tags: ["tasks", "automation", "scripts", "build"],
        compatibility: ["tui" as const, "cli" as const, "ide" as const],
        features: [
          "Task dependency graphs",
          "Parallel task execution",
          "Environment variable management",
          "Task output history",
          "Custom task templates",
        ],
        repoUrl: "https://github.com/opencode/task-runner-pro",
        docsUrl: "https://docs.opencode.dev/plugins/task-runner",
        version: "4.0.1",
        authorName: "Workflow Team",
        authorGithub: "opencode-workflow",
        status: "published" as const,
      },
    ];

    for (const plugin of plugins) {
      await ctx.db.insert("plugins", plugin);
    }

    return { message: `Seeded ${plugins.length} plugins` };
  },
});
