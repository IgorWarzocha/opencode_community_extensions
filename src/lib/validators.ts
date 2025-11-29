/**
 * Form validation utilities
 *
 * This file contains reusable utilities for validating plugin submission form data.
 * Following TypeScript 5.9+ best practices with strict typing and verbatimModuleSyntax.
 */

import type { ParsedPluginData } from "../types/plugin-form.js";

/**
 * Validation error type
 */
export type ValidationError = {
  field: string;
  message: string;
};

/**
 * Validation result type
 */
export type ValidationResult = {
  isValid: boolean;
  errors: ValidationError[];
};

/**
 * Validate a required field
 * @param value - Field value to validate
 * @param fieldName - Name of the field for error messages
 * @returns Error message if invalid, null if valid
 */
export function validateRequired(
  value: string,
  fieldName: string,
): string | null {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validate URL format
 * @param url - URL string to validate (can be null/undefined)
 * @returns Error message if invalid, null if valid
 */
export function validateUrl(url: string | null): string | null {
  if (!url || url.trim().length === 0) {
    return null; // Optional field, allow empty
  }

  try {
    const urlObj = new URL(url);
    // Ensure it's http or https
    if (!["http:", "https:"].includes(urlObj.protocol)) {
      return "URL must use HTTP or HTTPS protocol";
    }
    return null;
  } catch {
    return "Invalid URL format";
  }
}

/**
 * Validate URL-friendly slug
 * @param slug - Slug string to validate (can be null/undefined)
 * @returns Error message if invalid, null if valid
 */
export function validateSlug(slug: string | null): string | null {
  if (!slug || slug.trim().length === 0) {
    return "Slug is required";
  }

  const trimmedSlug = slug.trim();

  // Check length
  if (trimmedSlug.length < 2) {
    return "Slug must be at least 2 characters long";
  }

  if (trimmedSlug.length > 50) {
    return "Slug must be less than 50 characters long";
  }

  // Check for valid characters (lowercase letters, numbers, hyphens, underscores)
  const slugRegex = /^[a-z0-9_-]+$/;
  if (!slugRegex.test(trimmedSlug)) {
    return "Slug can only contain lowercase letters, numbers, hyphens, and underscores";
  }

  // Check that it doesn't start or end with hyphen or underscore
  if (
    trimmedSlug.startsWith("-") ||
    trimmedSlug.startsWith("_") ||
    trimmedSlug.endsWith("-") ||
    trimmedSlug.endsWith("_")
  ) {
    return "Slug cannot start or end with hyphens or underscores";
  }

  return null;
}

/**
 * Validate GitHub username format
 * @param username - GitHub username to validate (can be null/undefined)
 * @returns Error message if invalid, null if valid
 */
export function validateGithubUsername(username: string | null): string | null {
  if (!username || username.trim().length === 0) {
    return null; // Optional field, allow empty
  }

  const trimmedUsername = username.trim();

  // GitHub username rules: 1-39 characters, alphanumeric and hyphens, no consecutive hyphens, can't start or end with hyphen
  const githubRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;

  if (!githubRegex.test(trimmedUsername)) {
    return "Invalid GitHub username format";
  }

  return null;
}

/**
 * Validate semantic version format
 * @param version - Version string to validate
 * @returns Error message if invalid, null if valid
 */
export function validateVersion(version: string | null): string | null {
  if (!version || version.trim().length === 0) {
    return "Version is required";
  }

  const trimmedVersion = version.trim();

  // Basic semantic version regex (major.minor.patch)
  const semverRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9-]+)?(\+[a-zA-Z0-9-]+)?$/;

  if (!semverRegex.test(trimmedVersion)) {
    return "Version must follow semantic versioning (e.g., 1.0.0)";
  }

  return null;
}

/**
 * Validate complete plugin submission form data
 * @param data - Parsed plugin form data to validate
 * @returns ValidationResult with validation status and errors
 */
export function validatePluginSubmission(
  data: ParsedPluginData,
): ValidationResult {
  const errors: ValidationError[] = [];

  // Required fields validation
  const nameError = validateRequired(data.name, "Plugin name");
  if (nameError) errors.push({ field: "name", message: nameError });

  const slugError = validateSlug(data.slug);
  if (slugError) errors.push({ field: "slug", message: slugError });

  const shortDescError = validateRequired(
    data.shortDescription,
    "Short description",
  );
  if (shortDescError)
    errors.push({ field: "shortDescription", message: shortDescError });

  const descError = validateRequired(data.description, "Description");
  if (descError) errors.push({ field: "description", message: descError });

  const repoUrlError = validateUrl(data.repoUrl);
  if (repoUrlError) errors.push({ field: "repoUrl", message: repoUrlError });

  const versionError = validateVersion(data.version);
  if (versionError) errors.push({ field: "version", message: versionError });

  const authorNameError = validateRequired(data.authorName, "Author name");
  if (authorNameError)
    errors.push({ field: "authorName", message: authorNameError });

  // Optional fields validation
  const docsUrlError = validateUrl(data.docsUrl || null);
  if (docsUrlError) errors.push({ field: "docsUrl", message: docsUrlError });

  const githubError = validateGithubUsername(data.authorGithub || null);
  if (githubError) errors.push({ field: "authorGithub", message: githubError });

  // Array validation
  if (data.tags.length === 0) {
    errors.push({ field: "tags", message: "At least one tag is required" });
  }

  if (data.features.length === 0) {
    errors.push({
      field: "features",
      message: "At least one feature is required",
    });
  }

  if (data.compatibility.length === 0) {
    errors.push({
      field: "compatibility",
      message: "At least one compatibility option is required",
    });
  }

  // Length validations
  if (data.name.length > 100) {
    errors.push({
      field: "name",
      message: "Plugin name must be less than 100 characters",
    });
  }

  if (data.shortDescription.length > 200) {
    errors.push({
      field: "shortDescription",
      message: "Short description must be less than 200 characters",
    });
  }

  if (data.description.length > 5000) {
    errors.push({
      field: "description",
      message: "Description must be less than 5000 characters",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
