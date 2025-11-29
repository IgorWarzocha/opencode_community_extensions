import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  plugins: defineTable({
    name: v.string(),
    slug: v.string(),
    shortDescription: v.string(),
    description: v.string(),
    category: v.union(
      v.literal("LSP"),
      v.literal("RAG/Search"),
      v.literal("DevOps"),
      v.literal("UI"),
      v.literal("Workflow")
    ),
    tags: v.array(v.string()),
    compatibility: v.array(
      v.union(
        v.literal("tui"),
        v.literal("cli"),
        v.literal("ide"),
        v.literal("server"),
        v.literal("zen")
      )
    ),
    features: v.array(v.string()),
    repoUrl: v.string(),
    docsUrl: v.optional(v.string()),
    version: v.string(),
    authorName: v.string(),
    authorGithub: v.optional(v.string()),
    status: v.union(v.literal("draft"), v.literal("published")),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_status", ["status"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
