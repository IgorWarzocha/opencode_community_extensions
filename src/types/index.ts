/**
 * Central type exports for the application
 *
 * This file provides a centralized export point for all types used throughout
 * the application, following TypeScript 5.9+ best practices with verbatimModuleSyntax.
 */

// Extension domain types
export type {
  ExtensionCategory,
  ExtensionType,
  ExtensionCompatibility,
  InstallationMethod,
  PackageManager,
  ExtensionStatus,
  ExtensionFormData,
  ParsedExtensionData,
  FormSubmissionResult,
  SubmitExtensionPageProps,
} from "./plugin-form.js";

export type {
  Category,
  Compatibility,
  ExtensionFilterState,
  ExtensionFilters,
  UseExtensionFiltersReturn,
} from "./plugin-filters.js";

// Form component types
export type {
  CheckboxGroupOption,
  CheckboxGroupProps,
} from "../components/forms/CheckboxGroup.js";

export type {
  FormSelectOption,
  FormSelectProps,
} from "../components/forms/FormSelect.js";

export type { FormInputProps } from "../components/forms/FormInput.js";

export type { FormTextareaProps } from "../components/forms/FormTextarea.js";

// Plugin component types
export type { PluginCardProps } from "../components/PluginCard.js";

export type { PluginDetailPageProps } from "../components/PluginDetailPage.js";

export type { RelatedPluginsProps } from "../components/sections/RelatedPlugins.js";

export type { PluginMetadataProps } from "../components/sections/PluginMetadata.js";

export type { PluginInstallationProps } from "../components/sections/PluginInstallation.js";

export type { PluginFeaturesProps } from "../components/sections/PluginFeatures.js";

export type { PluginDescriptionProps } from "../components/sections/PluginDescription.js";

export type { PluginHeaderProps } from "../components/sections/PluginHeader.js";

export type { ResultsSectionProps } from "../components/sections/ResultsSection.js";

// UI component types
export type { SearchBarProps } from "../components/SearchBar.js";

export type { FilterBarProps } from "../components/FilterBar.js";

export type { HeaderProps } from "../components/Header.js";

export type { CodeBlockProps } from "../components/CodeBlock.js";

export type { TagChipProps } from "../components/TagChip.js";

export type { HomePageProps } from "../components/HomePage.js";

// Theme types
export type { Theme, ThemeContextType } from "../lib/theme-context.js";

// App types
export type { Page } from "../App.js";

// Validation types
export type { ValidationError, ValidationResult } from "../lib/validators.js";

// Convex types (re-export for convenience)
export type { Doc, Id } from "../../convex/_generated/dataModel.js";
