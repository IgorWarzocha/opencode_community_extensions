/**
 * Plugin form type definitions
 *
 * This file contains all type definitions for the plugin submission form system.
 * Following TypeScript 5.9+ best practices with strict typing and verbatimModuleSyntax.
 */

import type {
  PLUGIN_CATEGORIES,
  COMPATIBILITY_OPTIONS,
} from "../constants/plugin-form.js";

/**
 * Plugin category type derived from constants
 */
export type PluginCategory = (typeof PLUGIN_CATEGORIES)[number];

/**
 * Plugin compatibility type derived from constants
 */
export type PluginCompatibility = (typeof COMPATIBILITY_OPTIONS)[number];

/**
 * Form data structure for plugin submission
 */
export interface PluginFormData {
  /** Plugin display name */
  name: string;
  /** URL-friendly identifier */
  slug: string;
  /** One-line description */
  shortDescription: string;
  /** Detailed description */
  description: string;
  /** Plugin category */
  category: PluginCategory;
  /** Comma-separated tags (as string for form input) */
  tags: string;
  /** Selected compatibility options */
  compatibility: PluginCompatibility[];
  /** Line-separated features (as string for form input) */
  features: string;
  /** Repository URL */
  repoUrl: string;
  /** Documentation URL (optional) */
  docsUrl?: string;
  /** Plugin version */
  version: string;
  /** Author display name */
  authorName: string;
  /** Author GitHub username (optional) */
  authorGithub?: string;
}

/**
 * Parsed form data with arrays processed
 */
export interface ParsedPluginData
  extends Omit<PluginFormData, "tags" | "features"> {
  /** Parsed tags array */
  tags: string[];
  /** Parsed features array */
  features: string[];
}

/**
 * Form submission result type
 */
export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
  slug?: string;
}

/**
 * SubmitPluginPage component props
 */
export interface SubmitPluginPageProps {
  /** Navigation handler for successful submission */
  onNavigateToDetail: (slug: string) => void;
  /** Navigation handler for cancel/back action */
  onNavigateHome: () => void;
}
