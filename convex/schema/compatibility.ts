/**
 * Compatibility and dependencies schema
 *
 * Defines compatibility matrix and dependency relationships between extensions
 * including version constraints and platform-specific requirements.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const compatibilityTable = defineTable({
  extensionId: v.id("extensions"),
  platform: v.union(
    v.literal("tui"),
    v.literal("cli"),
    v.literal("ide"),
    v.literal("server"),
    v.literal("zen"),
    v.literal("web"),
    v.literal("mobile"),
    v.literal("desktop"),
  ),

  // Version-specific compatibility
  minVersion: v.optional(v.string()),
  maxVersion: v.optional(v.string()),
  testedVersions: v.optional(v.array(v.string())),

  // Compatibility status
  status: v.union(
    v.literal("compatible"),
    v.literal("partially_compatible"),
    v.literal("incompatible"),
    v.literal("unknown"),
  ),

  // Additional notes
  notes: v.optional(v.string()),
  requirements: v.optional(v.array(v.string())),
  limitations: v.optional(v.array(v.string())),

  // Testing information
  lastTested: v.optional(v.number()),
  testedBy: v.optional(v.id("users")),
  testResults: v.optional(v.string()),
})
  .index("by_extension", ["extensionId"])
  .index("by_platform", ["platform"])
  .index("by_status", ["status"])
  .index("by_extension_platform", ["extensionId", "platform"]);

export const dependenciesTable = defineTable({
  extensionId: v.id("extensions"),
  dependencyId: v.id("extensions"),

  // Dependency type
  dependencyType: v.union(
    v.literal("required"),
    v.literal("optional"),
    v.literal("recommended"),
    v.literal("peer"),
    v.literal("development"),
  ),

  // Version constraints
  minVersion: v.optional(v.string()),
  maxVersion: v.optional(v.string()),
  versionConstraint: v.optional(v.string()), // semver format

  // Dependency metadata
  description: v.optional(v.string()),
  reason: v.optional(v.string()),

  // Status
  active: v.boolean(),
})
  .index("by_extension", ["extensionId"])
  .index("by_dependency", ["dependencyId"])
  .index("by_type", ["dependencyType"])
  .index("by_active", ["active"]);
