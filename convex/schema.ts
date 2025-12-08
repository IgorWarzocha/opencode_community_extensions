/**
 * Minimal schema for the OpenCode Extensions Directory
 * Core tables only: extensions and authors.
 */

import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

import { extensionsTable } from "./schema/extensions.js";
import { authorsTable } from "./schema/authors.js";

export default defineSchema({
  ...authTables,
  extensions: extensionsTable,
  authors: authorsTable,
});
