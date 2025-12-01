/**
 * Workflow and user activity schema
 *
 * Defines submission workflow, user favorites, and activity tracking
 * for OpenCode extensions with moderation and engagement metrics.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const submissionsTable = defineTable({
  // Basic information
  name: v.string(),
  slug: v.string(),
  shortDescription: v.string(),
  description: v.string(),

  // Categorization
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

  // Repository and author
  repoUrl: v.string(),
  authorId: v.id("users"),
  authorName: v.string(),
  authorEmail: v.string(),

  // Submission metadata
  submittedAt: v.number(),
  status: v.union(
    v.literal("pending"),
    v.literal("under_review"),
    v.literal("approved"),
    v.literal("rejected"),
    v.literal("needs_changes"),
  ),

  // Review process
  reviewedBy: v.optional(v.id("users")),
  reviewedAt: v.optional(v.number()),
  reviewNotes: v.optional(v.string()),
  rejectionReason: v.optional(v.string()),

  // Additional data
  tags: v.optional(v.array(v.string())),
  features: v.optional(v.array(v.string())),
  compatibility: v.optional(v.array(v.string())),
  installationMethod: v.optional(v.string()),

  // If approved, link to the actual extension
  extensionId: v.optional(v.id("extensions")),
})
  .index("by_status", ["status"])
  .index("by_author", ["authorId"])
  .index("by_submitted_at", ["submittedAt"])
  .index("by_reviewed_by", ["reviewedBy"]);

export const userFavoritesTable = defineTable({
  userId: v.id("users"),
  extensionId: v.id("extensions"),

  // Metadata
  createdAt: v.number(),
  notes: v.optional(v.string()),

  // Categorization
  folder: v.optional(v.string()),
  tags: v.optional(v.array(v.string())),
})
  .index("by_user", ["userId"])
  .index("by_extension", ["extensionId"])
  .index("by_user_extension", ["userId", "extensionId"])
  .index("by_created_at", ["createdAt"]);

export const userActivityTable = defineTable({
  userId: v.id("users"),
  extensionId: v.id("extensions"),

  // Activity type
  activityType: v.union(
    v.literal("view"),
    v.literal("download"),
    v.literal("install"),
    v.literal("review"),
    v.literal("favorite"),
    v.literal("share"),
  ),

  // Metadata
  timestamp: v.number(),
  metadata: v.optional(v.record(v.string(), v.any())),

  // Context
  source: v.optional(v.string()), // where the activity originated
  platform: v.optional(v.string()), // platform used
})
  .index("by_user", ["userId"])
  .index("by_extension", ["extensionId"])
  .index("by_activity_type", ["activityType"])
  .index("by_timestamp", ["timestamp"])
  .index("by_user_extension", ["userId", "extensionId"])
  .index("by_extension_activity", ["extensionId", "activityType"]);
