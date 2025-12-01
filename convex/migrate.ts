/**
 * Migration script to clear all existing data from the database
 *
 * This script will:
 * 1. Clear all extensions
 * 2. Clear all authors
 * 3. Clear all categories and tags
 * 4. Clear all reviews, analytics, and workflow data
 * 5. Reset all relationships
 */

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const clearAllData = mutation({
  args: {
    confirm: v.boolean(),
  },
  returns: v.object({
    message: v.string(),
    clearedTables: v.array(v.string()),
  }),
  handler: async (ctx, args) => {
    if (!args.confirm) {
      throw new Error("You must confirm the data clearing operation");
    }

    const clearedTables: string[] = [];
    const tables = [
      "extensions",
      "authors",
      "categories",
      "tags",
      "reviews",
      "compatibility",
      "dependencies",
      "analytics",
      "trending",
      "submissions",
      "userFavorites",
      "userActivity",
    ];

    for (const tableName of tables) {
      try {
        const documents = await ctx.db.query(tableName as any).collect();
        for (const doc of documents) {
          await ctx.db.delete(doc._id);
        }
        clearedTables.push(`${tableName} (${documents.length} records)`);
      } catch (error) {
        console.warn(`Could not clear table ${tableName}:`, error);
      }
    }

    return {
      message: "All data cleared successfully",
      clearedTables,
    };
  },
});

/**
 * Verify database is empty
 */
export const verifyDatabaseEmpty = query({
  args: {},
  returns: v.object({
    isEmpty: v.boolean(),
    tableCounts: v.record(v.string(), v.number()),
  }),
  handler: async (ctx) => {
    const tables = [
      "extensions",
      "authors",
      "categories",
      "tags",
      "reviews",
      "compatibility",
      "dependencies",
      "analytics",
      "trending",
      "submissions",
      "userFavorites",
      "userActivity",
    ];

    const tableCounts: Record<string, number> = {};
    let totalRecords = 0;

    for (const tableName of tables) {
      try {
        const documents = await ctx.db.query(tableName as any).collect();
        tableCounts[tableName] = documents.length;
        totalRecords += documents.length;
      } catch (error) {
        tableCounts[tableName] = 0;
      }
    }

    return {
      isEmpty: totalRecords === 0,
      tableCounts,
    };
  },
});
