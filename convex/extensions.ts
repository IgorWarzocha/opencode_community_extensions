/**
 * Extension API functions
 *
 * Provides query and mutation functions for the extensions table
 * following React 19.2 and Convex best practices.
 */

import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * List all extensions with optional filtering
 */
export const list = query({
  args: {
    search: v.optional(v.string()),
    category: v.optional(v.string()),
    compatibility: v.optional(
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
    featured: v.optional(v.boolean()),
    verified: v.optional(v.boolean()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Start with all extensions
    let extensions = await ctx.db.query("extensions").collect();

    // Filter by status (only show published extensions)
    extensions = extensions.filter((ext) => ext.status === "published");

    // Apply additional filters
    if (args.featured !== undefined) {
      extensions = extensions.filter((ext) => ext.featured === args.featured);
    }
    if (args.verified !== undefined) {
      extensions = extensions.filter((ext) => ext.verified === args.verified);
    }
    if (args.category) {
      extensions = extensions.filter((ext) => ext.category === args.category);
    }
    if (args.compatibility) {
      extensions = extensions.filter((ext) =>
        ext.compatibility.includes(args.compatibility!),
      );
    }

    // Apply search filter
    if (args.search) {
      const searchTerm = args.search.toLowerCase();
      extensions = extensions.filter(
        (ext) =>
          ext.name.toLowerCase().includes(searchTerm) ||
          ext.shortDescription.toLowerCase().includes(searchTerm) ||
          ext.description.toLowerCase().includes(searchTerm) ||
          ext.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchTerm),
          ),
      );
    }

    // Sort by featured status and last updated
    extensions.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.lastUpdated || 0) - (a.lastUpdated || 0);
    });

    // Apply limit
    if (args.limit) {
      extensions = extensions.slice(0, args.limit);
    }

    return extensions;
  },
});

/**
 * Get extension by slug
 */
export const getBySlug = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    const extension = await ctx.db
      .query("extensions")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!extension || extension.status !== "published") {
      return null;
    }

    return extension;
  },
});

/**
 * Get related extensions by category
 */
export const getRelated = query({
  args: {
    category: v.string(),
    currentSlug: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const extensions = await ctx.db
      .query("extensions")
      .withIndex("by_category_status", (q) =>
        q.eq("category", args.category as any).eq("status", "published"),
      )
      .collect();

    // Filter out current extension and limit results
    const related = extensions
      .filter((ext) => ext.slug !== args.currentSlug)
      .sort((a, b) => (b.githubStars || 0) - (a.githubStars || 0))
      .slice(0, args.limit || 6);

    return related;
  },
});

/**
 * Get featured extensions
 */
export const getFeatured = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const extensions = await ctx.db
      .query("extensions")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();

    const publishedExtensions = extensions.filter(
      (ext) => ext.status === "published",
    );

    return publishedExtensions
      .sort((a, b) => (b.githubStars || 0) - (a.githubStars || 0))
      .slice(0, args.limit || 6);
  },
});

/**
 * Get extensions by author
 */
export const getByAuthor = query({
  args: {
    authorId: v.id("authors"),
  },
  handler: async (ctx, args) => {
    const extensions = await ctx.db
      .query("extensions")
      .withIndex("by_author", (q) => q.eq("authorId", args.authorId))
      .collect();

    return extensions.filter((ext) => ext.status === "published");
  },
});

/**
 * Get all categories with counts
 */
export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const extensions = await ctx.db.query("extensions").collect();
    const publishedExtensions = extensions.filter(
      (ext) => ext.status === "published",
    );

    const categoryCounts = publishedExtensions.reduce(
      (acc, ext) => {
        acc[ext.category] = (acc[ext.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(categoryCounts).map(([category, count]) => ({
      category,
      count,
    }));
  },
});

/**
 * Get all compatibility options with counts
 */
export const getCompatibilityOptions = query({
  args: {},
  handler: async (ctx) => {
    const extensions = await ctx.db.query("extensions").collect();
    const publishedExtensions = extensions.filter(
      (ext) => ext.status === "published",
    );

    const compatibilityCounts: Record<string, number> = {};

    publishedExtensions.forEach((ext) => {
      ext.compatibility.forEach((comp: string) => {
        compatibilityCounts[comp] = (compatibilityCounts[comp] || 0) + 1;
      });
    });

    return Object.entries(compatibilityCounts).map(
      ([compatibility, count]) => ({
        compatibility,
        count,
      }),
    );
  },
});
