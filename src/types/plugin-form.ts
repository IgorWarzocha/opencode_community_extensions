/**
 * Plugin form type definitions
 *
 * This file contains all type definitions for the plugin submission form system.
 * Following TypeScript 5.9+ best practices with strict typing and verbatimModuleSyntax.
 */

import type {
  EXTENSION_CATEGORIES,
  EXTENSION_TYPES,
  COMPATIBILITY_OPTIONS,
  INSTALLATION_METHODS,
  PACKAGE_MANAGERS,
  STATUS_OPTIONS,
} from "../constants/plugin-form.js";

/**
 * Extension category type derived from constants
 */
export type ExtensionCategory = (typeof EXTENSION_CATEGORIES)[number];

/**
 * Extension type derived from constants
 */
export type ExtensionType = (typeof EXTENSION_TYPES)[number];

/**
 * Extension compatibility type derived from constants
 */
export type ExtensionCompatibility = (typeof COMPATIBILITY_OPTIONS)[number];

/**
 * Installation method type derived from constants
 */
export type InstallationMethod = (typeof INSTALLATION_METHODS)[number];

/**
 * Package manager type derived from constants
 */
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

/**
 * Extension status type derived from constants
 */
export type ExtensionStatus = (typeof STATUS_OPTIONS)[number];

/**
 * Form data structure for extension submission
 */
export interface ExtensionFormData {
  /** Extension display name */
  name: string;
  /** URL-friendly identifier */
  slug: string;
  /** One-line description */
  shortDescription: string;
  /** Detailed description */
  description: string;
  /** Extension category */
  category: ExtensionCategory;
  /** Extension type */
  extensionType: ExtensionType;
  /** Comma-separated tags (as string for form input) */
  tags: string;
  /** Selected compatibility options */
  compatibility: ExtensionCompatibility[];
  /** Line-separated features (as string for form input) */
  features: string;
  /** Line-separated capabilities (as string for form input) */
  capabilities?: string;
  /** Repository URL */
  repoUrl: string;
  /** Documentation URL (optional) */
  docsUrl?: string;
  /** Homepage URL (optional) */
  homepageUrl?: string;
  /** Changelog URL (optional) */
  changelogUrl?: string;
  /** Extension version */
  version: string;
  /** Latest version */
  latestVersion: string;
  /** Installation methods */
  installationMethods: InstallationMethod[];
  /** Installation command (optional) */
  installationCommand?: string;
  /** Configuration guide URL (optional) */
  configurationGuide?: string;
  /** GitHub repository (optional) */
  githubRepo?: string;
  /** Package name (optional) */
  packageName?: string;
  /** Package manager (optional) */
  packageManager?: PackageManager;
  /** Logo URL (optional) */
  logoUrl?: string;
  /** Screenshots (comma-separated URLs) */
  screenshots?: string;
  /** Demo URL (optional) */
  demoUrl?: string;
  /** License (optional) */
  license?: string;
  /** License URL (optional) */
  licenseUrl?: string;
  /** Meta title (optional) */
  metaTitle?: string;
  /** Meta description (optional) */
  metaDescription?: string;
  /** Keywords (comma-separated) */
  keywords?: string;
}

/**
 * Parsed form data with arrays processed
 */
export interface ParsedExtensionData
  extends Omit<
    ExtensionFormData,
    "tags" | "features" | "capabilities" | "screenshots" | "keywords"
  > {
  /** Parsed tags array */
  tags: string[];
  /** Parsed features array */
  features: string[];
  /** Parsed capabilities array */
  capabilities?: string[];
  /** Parsed screenshots array */
  screenshots?: string[];
  /** Parsed keywords array */
  keywords?: string[];
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
 * SubmitExtensionPage component props
 */
export interface SubmitExtensionPageProps {
  /** Navigation handler for successful submission */
  onNavigateToDetail: (slug: string) => void;
  /** Navigation handler for cancel/back action */
  onNavigateHome: () => void;
}
