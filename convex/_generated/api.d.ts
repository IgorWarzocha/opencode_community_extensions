/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as authors from "../authors.js";
import type * as data_authors from "../data/authors.js";
import type * as extensions from "../extensions.js";
import type * as http from "../http.js";
import type * as migrate from "../migrate.js";
import type * as router from "../router.js";
import type * as schema_analytics from "../schema/analytics.js";
import type * as schema_authors from "../schema/authors.js";
import type * as schema_compatibility from "../schema/compatibility.js";
import type * as schema_extensions from "../schema/extensions.js";
import type * as schema_reviews from "../schema/reviews.js";
import type * as schema_taxonomy from "../schema/taxonomy.js";
import type * as schema_workflow from "../schema/workflow.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  authors: typeof authors;
  "data/authors": typeof data_authors;
  extensions: typeof extensions;
  http: typeof http;
  migrate: typeof migrate;
  router: typeof router;
  "schema/analytics": typeof schema_analytics;
  "schema/authors": typeof schema_authors;
  "schema/compatibility": typeof schema_compatibility;
  "schema/extensions": typeof schema_extensions;
  "schema/reviews": typeof schema_reviews;
  "schema/taxonomy": typeof schema_taxonomy;
  "schema/workflow": typeof schema_workflow;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
