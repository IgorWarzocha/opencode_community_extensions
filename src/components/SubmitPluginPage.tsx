"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitPlugin } from "../actions/plugin-actions";
import { toast } from "sonner";

interface SubmitPluginPageProps {
  onNavigateToDetail: (slug: string) => void;
  onNavigateHome: () => void;
}

const categories = ["LSP", "RAG/Search", "DevOps", "UI", "Workflow"] as const;
const compatibilityOptions = ["tui", "cli", "ide", "server", "zen"] as const;

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
        {/* Basic Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Basic Information</h2>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Plugin Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="rust-analyzer"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Slug * (URL-friendly identifier)
            </label>
            <input
              type="text"
              name="slug"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface font-mono transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="rust-analyzer"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Short Description * (one line)
            </label>
            <input
              type="text"
              name="shortDescription"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="Official Rust language server with IDE features"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Full Description *
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="Detailed description of your plugin..."
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border dark:border-border-dark"></div>

        {/* Classification */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Classification</h2>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Category *
            </label>
            <select
              name="category"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="rust, lsp, ide, compiler"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-3 dark:text-secondary-dark">
              Compatibility * (select all that apply)
            </label>
            <div className="flex flex-wrap gap-3">
              {compatibilityOptions.map((comp) => (
                <label
                  key={comp}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="compatibility"
                    value={comp}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{comp}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Features (one per line)
            </label>
            <textarea
              name="features"
              rows={5}
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="Fast incremental compilation&#10;Smart code completion&#10;Inline type hints"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border dark:border-border-dark"></div>

        {/* Links & Metadata */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Links & Metadata</h2>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Repository URL *
            </label>
            <input
              type="url"
              name="repoUrl"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface font-mono transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="https://github.com/username/plugin"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Documentation URL
            </label>
            <input
              type="url"
              name="docsUrl"
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface font-mono transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="https://docs.example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Version *
            </label>
            <input
              type="text"
              name="version"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface font-mono transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="1.0.0"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Author Name *
            </label>
            <input
              type="text"
              name="authorName"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
              Author GitHub Username
            </label>
            <input
              type="text"
              name="authorGithub"
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface font-mono transition-colors dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
              placeholder="johndoe"
            />
          </div>
        </div>

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

function SubmitButton() {
  return (
    <button
      type="submit"
      className="px-8 py-3 bg-primary text-background hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-hover-dark"
    >
      <SubmitButtonContent />
    </button>
  );
}

function SubmitButtonContent() {
  const { pending } = useFormStatus();

  if (pending) {
    return "Submitting...";
  }

  return "Submit Extension";
}
