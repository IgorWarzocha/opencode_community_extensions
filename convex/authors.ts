/**
 * Authors API functions
 *
 * Provides query functions for the authors table
 * following React 19.2 and Convex best practices.
 */

import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get author by ID
 */
export const getById = query({
  args: {
    authorId: v.id("authors"),
  },
  handler: async (ctx, args) => {
    const author = await ctx.db.get(args.authorId);
    return author;
  },
});

/**
 * Get author by username
 */
export const getByUsername = query({
  args: {
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const author = await ctx.db
      .query("authors")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .first();
    return author;
  },
});

/**
 * Get author by GitHub username
 */
export const getByGithubUsername = query({
  args: {
    githubUsername: v.string(),
  },
  handler: async (ctx, args) => {
    const author = await ctx.db
      .query("authors")
      .withIndex("by_github_username", (q) =>
        q.eq("githubUsername", args.githubUsername),
      )
      .first();
    return author;
  },
});

/**
 * List all authors with optional filtering
 */
export const list = query({
  args: {
    verified: v.optional(v.boolean()),
    active: v.optional(v.boolean()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let authors = await ctx.db.query("authors").collect();

    // Apply filters
    if (args.verified !== undefined) {
      authors = authors.filter((author) => author.verified === args.verified);
    }
    if (args.active !== undefined) {
      authors = authors.filter((author) => author.active === args.active);
    }

    // Sort by name and apply limit
    authors = authors
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, args.limit || 50);

    return authors;
  },
});
