"use client";

import { useActionState } from "react";
import { submitPlugin } from "../actions/plugin-actions.js";
import { toast } from "sonner";
import {
  SubmitButton,
  BasicInfoSection,
  ClassificationSection,
  MetadataSection,
} from "./forms/index.js";
import type { SubmitPluginPageProps } from "../types/index.js";

export function SubmitPluginPage({
  onNavigateToDetail,
  onNavigateHome,
}: SubmitPluginPageProps) {
  const [state, action] = useActionState(submitPlugin, null);

  // Handle successful submission
  if (state?.success && state.slug) {
    toast.success(state.message);
    onNavigateToDetail(state.slug);
    return null; // Component will re-render with navigation
  }

  // Handle errors
  if (state?.success === false && state.error) {
    toast.error(state.error);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={onNavigateHome}
          className="text-sm text-accent hover:underline dark:text-accent-dark"
        >
          ← Back to directory
        </button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 heading-shadow">
          Submit Extension
        </h1>
        <p className="text-secondary leading-relaxed dark:text-secondary-dark">
          Share your plugin with the OpenCode community. Fill out the form below
          to add your plugin to the directory.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-12 dark:border-border-dark"></div>

      {/* Form */}
      <form action={action} className="space-y-8">
        {/* Basic Info Section */}
        <BasicInfoSection />

        {/* Divider */}
        <div className="border-t border-border dark:border-border-dark"></div>

        {/* Classification Section */}
        <ClassificationSection />

        {/* Divider */}
        <div className="border-t border-border dark:border-border-dark"></div>

        {/* Metadata Section */}
        <MetadataSection />

        {/* Divider */}
        <div className="border-t border-border dark:border-border-dark"></div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <SubmitButton />
          <button
            type="button"
            onClick={onNavigateHome}
            className="px-8 py-3 border border-border hover:border-primary transition-colors dark:border-border-dark dark:hover:border-primary-dark"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
