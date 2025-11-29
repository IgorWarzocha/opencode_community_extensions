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
          className="text-sm text-accent hover:underline"
        >
          ← Back to directory
        </button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Submit Extension</h1>
        <p className="text-secondary leading-relaxed">
          Share your plugin with the OpenCode community. Fill out the form below
          to add your plugin to the directory.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-12"></div>

      {/* Form */}
      <form action={action} className="space-y-8">
        {/* Basic Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Basic Information</h2>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Plugin Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="rust-analyzer"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Slug * (URL-friendly identifier)
            </label>
            <input
              type="text"
              name="slug"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white font-mono"
              placeholder="rust-analyzer"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Short Description * (one line)
            </label>
            <input
              type="text"
              name="shortDescription"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="Official Rust language server with IDE features"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Full Description *
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="Detailed description of your plugin..."
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Classification */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Classification</h2>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Category *
            </label>
            <select
              name="category"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="rust, lsp, ide, compiler"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-3">
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
            <label className="block text-sm text-secondary mb-2">
              Features (one per line)
            </label>
            <textarea
              name="features"
              rows={5}
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="Fast incremental compilation&#10;Smart code completion&#10;Inline type hints"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Links & Metadata */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Links & Metadata</h2>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Repository URL *
            </label>
            <input
              type="url"
              name="repoUrl"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white font-mono"
              placeholder="https://github.com/username/plugin"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Documentation URL
            </label>
            <input
              type="url"
              name="docsUrl"
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white font-mono"
              placeholder="https://docs.example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Version *
            </label>
            <input
              type="text"
              name="version"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white font-mono"
              placeholder="1.0.0"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Author Name *
            </label>
            <input
              type="text"
              name="authorName"
              required
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Author GitHub Username
            </label>
            <input
              type="text"
              name="authorGithub"
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white font-mono"
              placeholder="johndoe"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <SubmitButton />
          <button
            type="button"
            onClick={onNavigateHome}
            className="px-8 py-3 border border-border hover:border-primary transition-colors"
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
      className="px-8 py-3 bg-primary text-white hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
