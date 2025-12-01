/**
 * Authors and maintainers schema
 *
 * Defines author profiles with verification, social links, and status management
 * for OpenCode extension authors and maintainers.
 */

import { defineTable } from "convex/server";
import { v } from "convex/values";

export const authorsTable = defineTable({
  name: v.string(),
  username: v.string(),
  email: v.optional(v.string()),
  bio: v.optional(v.string()),
  avatarUrl: v.optional(v.string()),
  websiteUrl: v.optional(v.string()),
  githubUsername: v.optional(v.string()),
  githubUrl: v.optional(v.string()),
  twitterUsername: v.optional(v.string()),
  linkedinUrl: v.optional(v.string()),

  // Verification and status
  verified: v.boolean(),
  verificationMethod: v.optional(
    v.union(v.literal("github"), v.literal("email"), v.literal("manual")),
  ),

  // Location and timezone
  location: v.optional(v.string()),
  timezone: v.optional(v.string()),

  // Company and role
  company: v.optional(v.string()),
  role: v.optional(v.string()),

  // Social links
  socialLinks: v.optional(v.record(v.string(), v.string())),

  // Status
  active: v.boolean(),
  status: v.union(
    v.literal("active"),
    v.literal("inactive"),
    v.literal("suspended"),
  ),
})
  .index("by_username", ["username"])
  .index("by_github_username", ["githubUsername"])
  .index("by_verified", ["verified"])
  .index("by_active", ["active"]);
