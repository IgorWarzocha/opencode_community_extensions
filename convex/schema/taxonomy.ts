/**
 * Categories and tags schema
 *
 * Defines hierarchical categories and tag management system
 * for organizing and discovering OpenCode extensions.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const categoriesTable = defineTable({
  name: v.string(),
  slug: v.string(),
  description: v.string(),
  icon: v.optional(v.string()),
  color: v.optional(v.string()),

  // Hierarchy
  parentId: v.optional(v.id("categories")),
  level: v.number(),

  // Status
  active: v.boolean(),
  order: v.number(),

  // SEO
  metaTitle: v.optional(v.string()),
  metaDescription: v.optional(v.string()),
})
  .index("by_slug", ["slug"])
  .index("by_parent", ["parentId"])
  .index("by_level", ["level"])
  .index("by_active", ["active"])
  .index("by_order", ["order"]);

export const tagsTable = defineTable({
  name: v.string(),
  slug: v.string(),
  description: v.optional(v.string()),
  category: v.optional(v.string()),

  // Usage statistics
  usageCount: v.number(),

  // Status
  active: v.boolean(),

  // Related tags
  relatedTags: v.optional(v.array(v.id("tags"))),
})
  .index("by_slug", ["slug"])
  .index("by_category", ["category"])
  .index("by_usage_count", ["usageCount"])
  .index("by_active", ["active"]);
