/**
 * Core extension schema definitions
 *
 * Defines the main extensions table with comprehensive fields for OpenCode extensions
 * including categorization, compatibility, versioning, and GitHub integration.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const extensionsTable = defineTable({
  // Basic information
  name: v.string(),
  slug: v.string(),
  shortDescription: v.string(),
  description: v.string(),

  // Enhanced categorization
  category: v.union(
    v.literal("LSP"),
    v.literal("RAG/Search"),
    v.literal("DevOps"),
    v.literal("UI"),
    v.literal("Workflow"),
    v.literal("Plugin"),
    v.literal("Theme"),
    v.literal("Integration"),
    v.literal("Tool"),
    v.literal("Interface"),
  ),
  extensionType: v.union(
    v.literal("plugin"),
    v.literal("integration"),
    v.literal("theme"),
    v.literal("tool"),
    v.literal("interface"),
    v.literal("sdk"),
    v.literal("framework"),
  ),
  tags: v.array(v.string()),

  // Enhanced compatibility matrix
  compatibility: v.array(
    v.union(
      v.literal("tui"),
      v.literal("cli"),
      v.literal("ide"),
      v.literal("server"),
      v.literal("zen"),
      v.literal("web"),
      v.literal("mobile"),
      v.literal("desktop"),
    ),
  ),

  // Features and capabilities
  features: v.array(v.string()),
  capabilities: v.optional(v.array(v.string())),

  // Version and release management
  version: v.string(),
  latestVersion: v.string(),
  releaseDate: v.optional(v.number()),
  lastUpdated: v.optional(v.number()),

  // Repository and documentation
  repoUrl: v.string(),
  docsUrl: v.optional(v.string()),
  homepageUrl: v.optional(v.string()),
  changelogUrl: v.optional(v.string()),

  // Installation methods
  installationMethods: v.array(
    v.union(
      v.literal("npm"),
      v.literal("git"),
      v.literal("marketplace"),
      v.literal("manual"),
      v.literal("flake"),
      v.literal("cargo"),
      v.literal("pip"),
      v.literal("go"),
    ),
  ),
  installationCommand: v.optional(v.string()),
  configurationGuide: v.optional(v.string()),

  // Author information (references authors table)
  authorId: v.id("authors"),
  maintainerIds: v.optional(v.array(v.id("authors"))),

  // GitHub integration
  githubRepo: v.optional(v.string()),
  githubStars: v.optional(v.number()),
  githubForks: v.optional(v.number()),
  githubIssues: v.optional(v.number()),
  githubLastCommit: v.optional(v.number()),

  // Status and moderation
  status: v.union(
    v.literal("draft"),
    v.literal("published"),
    v.literal("deprecated"),
    v.literal("archived"),
    v.literal("pending_review"),
  ),
  featured: v.boolean(),
  verified: v.boolean(),

  // Dependencies and relationships
  dependencyIds: v.optional(v.array(v.id("extensions"))),
  conflictIds: v.optional(v.array(v.id("extensions"))),
  recommendedIds: v.optional(v.array(v.id("extensions"))),

  // Package management
  packageName: v.optional(v.string()),
  packageManager: v.optional(
    v.union(
      v.literal("npm"),
      v.literal("yarn"),
      v.literal("pnpm"),
      v.literal("cargo"),
      v.literal("pip"),
      v.literal("go"),
      v.literal("flake"),
    ),
  ),

  // Media and assets
  logoUrl: v.optional(v.string()),
  screenshots: v.optional(v.array(v.string())),
  demoUrl: v.optional(v.string()),

  // Licensing
  license: v.optional(v.string()),
  licenseUrl: v.optional(v.string()),

  // SEO and discovery
  metaTitle: v.optional(v.string()),
  metaDescription: v.optional(v.string()),
  keywords: v.optional(v.array(v.string())),
})
  .index("by_slug", ["slug"])
  .index("by_category", ["category"])
  .index("by_extension_type", ["extensionType"])
  .index("by_status", ["status"])
  .index("by_author", ["authorId"])
  .index("by_featured", ["featured"])
  .index("by_verified", ["verified"])
  .index("by_compatibility", ["compatibility"])
  .index("by_github_stars", ["githubStars"])
  .index("by_last_updated", ["lastUpdated"])
  .index("by_category_status", ["category", "status"])
  .index("by_extension_type_status", ["extensionType", "status"]);
