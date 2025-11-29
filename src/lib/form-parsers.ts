/**
 * Form data parsing utilities
 *
 * This file contains reusable utilities for parsing form data from plugin submission forms.
 * Following TypeScript 5.9+ best practices with strict typing and verbatimModuleSyntax.
 */

import type { PluginFormData, ParsedPluginData } from "../types/plugin-form.js";
import type {
  PluginCategory,
  PluginCompatibility,
} from "../types/plugin-form.js";

/**
 * Parse comma-separated tags into a clean array
 * @param tags - Comma-separated tags string or null
 * @returns Array of trimmed, non-empty tags
 */
export function parseTags(tags: string | null): string[] {
  if (!tags || tags.trim().length === 0) {
    return [];
  }

  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}

/**
 * Parse newline-separated features into a clean array
 * @param features - Newline-separated features string or null
 * @returns Array of trimmed, non-empty features
 */
export function parseFeatures(features: string | null): string[] {
  if (!features || features.trim().length === 0) {
    return [];
  }

  return features
    .split("\n")
    .map((feature) => feature.trim())
    .filter((feature) => feature.length > 0);
}

/**
 * Extract and parse all form data from FormData object
 * @param formData - FormData object from the plugin submission form
 * @returns ParsedPluginData object with all fields properly typed and arrays processed
 */
export function parseFormData(formData: FormData): ParsedPluginData {
  // Extract basic string fields
  const name = formData.get("name") as string | null;
  const slug = formData.get("slug") as string | null;
  const shortDescription = formData.get("shortDescription") as string | null;
  const description = formData.get("description") as string | null;
  const category = formData.get("category") as PluginCategory | null;
  const tags = formData.get("tags") as string | null;
  const features = formData.get("features") as string | null;
  const repoUrl = formData.get("repoUrl") as string | null;
  const docsUrl = formData.get("docsUrl") as string | null;
  const version = formData.get("version") as string | null;
  const authorName = formData.get("authorName") as string | null;
  const authorGithub = formData.get("authorGithub") as string | null;

  // Extract compatibility array
  const compatibility = formData.getAll(
    "compatibility",
  ) as PluginCompatibility[];

  // Parse array fields
  const tagsArray = parseTags(tags);
  const featuresArray = parseFeatures(features);

  const result: ParsedPluginData = {
    name: name || "",
    slug: slug || "",
    shortDescription: shortDescription || "",
    description: description || "",
    category: category || "LSP", // Default fallback
    tags: tagsArray,
    compatibility,
    features: featuresArray,
    repoUrl: repoUrl || "",
    version: version || "",
    authorName: authorName || "",
  };

  // Handle optional properties properly for exactOptionalPropertyTypes
  if (docsUrl !== null && docsUrl !== undefined && docsUrl.trim() !== "") {
    result.docsUrl = docsUrl;
  }
  if (
    authorGithub !== null &&
    authorGithub !== undefined &&
    authorGithub.trim() !== ""
  ) {
    result.authorGithub = authorGithub;
  }

  return result;
}

/**
 * Create a PluginFormData object from FormData (before array parsing)
 * @param formData - FormData object from the plugin submission form
 * @returns PluginFormData object with raw string values
 */
export function parseFormDataRaw(formData: FormData): PluginFormData {
  const name = formData.get("name") as string | null;
  const slug = formData.get("slug") as string | null;
  const shortDescription = formData.get("shortDescription") as string | null;
  const description = formData.get("description") as string | null;
  const category = formData.get("category") as PluginCategory | null;
  const tags = formData.get("tags") as string | null;
  const features = formData.get("features") as string | null;
  const repoUrl = formData.get("repoUrl") as string | null;
  const docsUrl = formData.get("docsUrl") as string | null;
  const version = formData.get("version") as string | null;
  const authorName = formData.get("authorName") as string | null;
  const authorGithub = formData.get("authorGithub") as string | null;

  const compatibility = formData.getAll(
    "compatibility",
  ) as PluginCompatibility[];

  const result: PluginFormData = {
    name: name || "",
    slug: slug || "",
    shortDescription: shortDescription || "",
    description: description || "",
    category: category || "LSP",
    tags: tags || "",
    compatibility,
    features: features || "",
    repoUrl: repoUrl || "",
    version: version || "",
    authorName: authorName || "",
  };

  // Handle optional properties properly for exactOptionalPropertyTypes
  if (docsUrl !== null && docsUrl !== undefined && docsUrl.trim() !== "") {
    result.docsUrl = docsUrl;
  }
  if (
    authorGithub !== null &&
    authorGithub !== undefined &&
    authorGithub.trim() !== ""
  ) {
    result.authorGithub = authorGithub;
  }

  return result;
}
