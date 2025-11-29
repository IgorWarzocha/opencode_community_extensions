/**
 * Plugin form constants
 *
 * This file contains all constant values used throughout the plugin submission form system.
 * Following TypeScript 5.9+ best practices with proper typing and verbatimModuleSyntax.
 */

/**
 * Available plugin categories for classification
 */
export const PLUGIN_CATEGORIES = [
  "LSP",
  "RAG/Search",
  "DevOps",
  "UI",
  "Workflow",
] as const;

/**
 * Available compatibility options for plugins
 */
export const COMPATIBILITY_OPTIONS = [
  "tui",
  "cli",
  "ide",
  "server",
  "zen",
] as const;

/**
 * Default form field placeholders
 */
export const FORM_PLACEHOLDERS = {
  name: "rust-analyzer",
  slug: "rust-analyzer",
  shortDescription: "Official Rust language server with IDE features",
  description: "Detailed description of your plugin...",
  tags: "rust, lsp, ide, compiler",
  features:
    "Fast incremental compilation\nSmart code completion\nInline type hints",
  repoUrl: "https://github.com/username/plugin",
  docsUrl: "https://docs.example.com",
  version: "1.0.0",
  authorName: "John Doe",
  authorGithub: "johndoe",
} as const;
