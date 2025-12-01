/**
 * Comprehensive OpenCode Extensions Directory Schema
 *
 * Modular schema design supporting 23+ extensions with proper categorization,
 * search, version management, user content, analytics, and workflow management.
 *
 * Schema modules:
 * - extensions: Core extension data with GitHub integration
 * - authors: Author profiles and verification
 * - reviews: User-generated content and ratings
 * - compatibility: Platform compatibility matrix
 * - analytics: Usage statistics and trending
 * - workflow: Submission workflow and user activity
 * - taxonomy: Categories and tags management
 */

import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

// Import modular schema definitions
import { extensionsTable } from "./schema/extensions.js";
import { authorsTable } from "./schema/authors.js";
import { reviewsTable } from "./schema/reviews.js";
import {
  compatibilityTable,
  dependenciesTable,
} from "./schema/compatibility.js";
import { analyticsTable, trendingTable } from "./schema/analytics.js";
import {
  submissionsTable,
  userFavoritesTable,
  userActivityTable,
} from "./schema/workflow.js";
import { categoriesTable, tagsTable } from "./schema/taxonomy.js";

// Consolidated application tables
const applicationTables = {
  // Core entities
  extensions: extensionsTable,
  authors: authorsTable,

  // User-generated content
  reviews: reviewsTable,

  // Compatibility and dependencies
  compatibility: compatibilityTable,
  dependencies: dependenciesTable,

  // Analytics and trending
  analytics: analyticsTable,
  trending: trendingTable,

  // Workflow and user management
  submissions: submissionsTable,
  userFavorites: userFavoritesTable,
  userActivity: userActivityTable,

  // Taxonomy
  categories: categoriesTable,
  tags: tagsTable,
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
