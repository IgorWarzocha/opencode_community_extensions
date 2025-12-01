/**
 * Plugin form constants
 *
 * This file contains all constant values used throughout the plugin submission form system.
 * Following TypeScript 5.9+ best practices with proper typing and verbatimModuleSyntax.
 */

/**
 * Available extension categories for classification
 */
export const EXTENSION_CATEGORIES = [
  "LSP",
  "RAG/Search",
  "DevOps",
  "UI",
  "Workflow",
  "Plugin",
  "Theme",
  "Integration",
  "Tool",
  "Interface",
] as const;

/**
 * Available extension types
 */
export const EXTENSION_TYPES = [
  "plugin",
  "integration",
  "theme",
  "tool",
  "interface",
  "sdk",
  "framework",
] as const;

/**
 * Available compatibility options for extensions
 */
export const COMPATIBILITY_OPTIONS = [
  "tui",
  "cli",
  "ide",
  "server",
  "zen",
  "web",
  "mobile",
  "desktop",
] as const;

/**
 * Available installation methods
 */
export const INSTALLATION_METHODS = [
  "npm",
  "git",
  "marketplace",
  "manual",
  "flake",
  "cargo",
  "pip",
  "go",
] as const;

/**
 * Available package managers
 */
export const PACKAGE_MANAGERS = [
  "npm",
  "yarn",
  "pnpm",
  "cargo",
  "pip",
  "go",
  "flake",
] as const;

/**
 * Available status options
 */
export const STATUS_OPTIONS = [
  "draft",
  "published",
  "deprecated",
  "archived",
  "pending_review",
] as const;

/**
 * Default form field placeholders
 */
export const FORM_PLACEHOLDERS = {
  name: "OpenCode Neovim Plugin",
  slug: "opencode-neovim",
  shortDescription: "Integrate OpenCode AI directly into Neovim",
  description:
    "A comprehensive Neovim plugin that brings OpenCode's AI coding capabilities directly into your favorite editor...",
  tags: "neovim, ai, opencode, editor",
  features:
    "Chat interface within Neovim\nEditor context capture\nReal-time AI assistance\nServer-Sent Events forwarding",
  capabilities: "AI assistance, code generation, refactoring",
  repoUrl: "https://github.com/username/opencode-neovim",
  docsUrl: "https://docs.example.com",
  homepageUrl: "https://example.com",
  changelogUrl:
    "https://github.com/username/opencode-neovim/blob/main/CHANGELOG.md",
  version: "1.0.0",
  latestVersion: "1.0.0",
  installationCommand: "npm install opencode-neovim",
  configurationGuide: "https://docs.example.com/configuration",
  githubRepo: "username/opencode-neovim",
  packageName: "opencode-neovim",
  packageManager: "npm",
  logoUrl: "https://example.com/logo.png",
  screenshots: ["https://example.com/screenshot1.png"],
  demoUrl: "https://demo.example.com",
  license: "MIT",
  licenseUrl: "https://github.com/username/opencode-neovim/blob/main/LICENSE",
  metaTitle: "OpenCode Neovim Plugin - AI Coding in Your Editor",
  metaDescription:
    "Integrate OpenCode's AI coding capabilities directly into Neovim with this comprehensive plugin.",
  keywords: ["opencode", "neovim", "ai", "coding", "assistant"],
} as const;
