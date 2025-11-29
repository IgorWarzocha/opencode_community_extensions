import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: {
    search: v.optional(v.string()),
    category: v.optional(
      v.union(
        v.literal("LSP"),
        v.literal("RAG/Search"),
        v.literal("DevOps"),
        v.literal("UI"),
        v.literal("Workflow")
      )
    ),
    compatibility: v.optional(
      v.union(
        v.literal("tui"),
        v.literal("cli"),
        v.literal("ide"),
        v.literal("server"),
        v.literal("zen")
      )
    ),
  },
  handler: async (ctx, args) => {
    let plugins = await ctx.db
      .query("plugins")
      .withIndex("by_status", (q) => q.eq("status", "published"))
      .order("desc")
      .collect();

    if (args.search) {
      const searchLower = args.search.toLowerCase();
      plugins = plugins.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.shortDescription.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    if (args.category) {
      plugins = plugins.filter((p) => p.category === args.category);
    }

    if (args.compatibility) {
      plugins = plugins.filter((p) =>
        p.compatibility.includes(args.compatibility!)
      );
    }

    return plugins;
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const plugin = await ctx.db
      .query("plugins")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    return plugin;
  },
});

export const getRelated = query({
  args: {
    category: v.union(
      v.literal("LSP"),
      v.literal("RAG/Search"),
      v.literal("DevOps"),
      v.literal("UI"),
      v.literal("Workflow")
    ),
    currentSlug: v.string(),
  },
  handler: async (ctx, args) => {
    const plugins = await ctx.db
      .query("plugins")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .filter((q) => q.neq(q.field("slug"), args.currentSlug))
      .filter((q) => q.eq(q.field("status"), "published"))
      .take(3);
    return plugins;
  },
});

export const submit = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("plugins")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existing) {
      throw new Error("A plugin with this slug already exists");
    }

    const pluginId = await ctx.db.insert("plugins", {
      ...args,
      status: "published",
    });

    return pluginId;
  },
});
