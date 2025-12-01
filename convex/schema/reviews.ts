/**
 * Reviews and ratings schema
 *
 * Defines user-generated content including reviews, ratings, and moderation
 * for OpenCode extensions with voting and author response capabilities.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const reviewsTable = defineTable({
  extensionId: v.id("extensions"),
  userId: v.id("users"),
  rating: v.number(), // 1-5 stars
  title: v.optional(v.string()),
  content: v.string(),

  // Review metadata
  helpful: v.number(), // helpful votes
  notHelpful: v.number(), // not helpful votes
  verified: v.boolean(), // user actually used the extension

  // Moderation
  status: v.union(
    v.literal("published"),
    v.literal("pending"),
    v.literal("hidden"),
    v.literal("flagged"),
  ),
  moderatedBy: v.optional(v.id("users")),
  moderationReason: v.optional(v.string()),

  // Version context
  extensionVersion: v.optional(v.string()),

  // Response from author
  authorResponse: v.optional(v.string()),
  authorResponseDate: v.optional(v.number()),
})
  .index("by_extension", ["extensionId"])
  .index("by_user", ["userId"])
  .index("by_status", ["status"])
  .index("by_extension_rating", ["extensionId", "rating"])
  .index("by_extension_status", ["extensionId", "status"]);
