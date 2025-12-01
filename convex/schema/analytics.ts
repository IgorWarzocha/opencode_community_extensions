/**
 * Analytics and trending schema
 *
 * Defines analytics data, usage statistics, and trending calculations
 * for OpenCode extensions with time-based metrics and performance tracking.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const analyticsTable = defineTable({
  extensionId: v.id("extensions"),

  // Time-based analytics
  date: v.number(), // Unix timestamp for the day
  period: v.union(
    v.literal("daily"),
    v.literal("weekly"),
    v.literal("monthly"),
  ),

  // Download and installation metrics
  downloads: v.number(),
  installations: v.number(),
  uniqueInstallers: v.number(),

  // Usage metrics
  activeUsers: v.number(),
  sessions: v.number(),
  avgSessionDuration: v.number(),

  // Geographic distribution
  countryBreakdown: v.optional(v.record(v.string(), v.number())),

  // Platform distribution
  platformBreakdown: v.optional(v.record(v.string(), v.number())),

  // Version distribution
  versionBreakdown: v.optional(v.record(v.string(), v.number())),

  // Referral sources
  referralSources: v.optional(v.record(v.string(), v.number())),
})
  .index("by_extension", ["extensionId"])
  .index("by_date", ["date"])
  .index("by_period", ["period"])
  .index("by_extension_date", ["extensionId", "date"])
  .index("by_extension_period", ["extensionId", "period"]);

export const trendingTable = defineTable({
  extensionId: v.id("extensions"),

  // Trending metrics
  score: v.number(),
  rank: v.number(),
  previousRank: v.optional(v.number()),

  // Time period
  period: v.union(
    v.literal("daily"),
    v.literal("weekly"),
    v.literal("monthly"),
  ),
  date: v.number(),

  // Trending factors
  downloadGrowth: v.number(),
  starGrowth: v.number(),
  reviewGrowth: v.number(),

  // Categories
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
})
  .index("by_period", ["period"])
  .index("by_date", ["date"])
  .index("by_rank", ["rank"])
  .index("by_category", ["category"])
  .index("by_extension", ["extensionId"])
  .index("by_period_rank", ["period", "rank"]);
