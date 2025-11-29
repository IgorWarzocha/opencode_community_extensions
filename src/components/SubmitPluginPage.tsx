import { useState, FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
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
  const submitPlugin = useMutation(api.plugins.submit);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    shortDescription: "",
    description: "",
    category: "LSP" as (typeof categories)[number],
    tags: "",
    compatibility: [] as Array<(typeof compatibilityOptions)[number]>,
    features: "",
    repoUrl: "",
    docsUrl: "",
    version: "",
    authorName: "",
    authorGithub: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const tagsArray = formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);
      const featuresArray = formData.features
        .split("\n")
        .map((f) => f.trim())
        .filter((f) => f.length > 0);

      await submitPlugin({
        name: formData.name,
        slug: formData.slug,
        shortDescription: formData.shortDescription,
        description: formData.description,
        category: formData.category,
        tags: tagsArray,
        compatibility: formData.compatibility,
        features: featuresArray,
        repoUrl: formData.repoUrl,
        docsUrl: formData.docsUrl || undefined,
        version: formData.version,
        authorName: formData.authorName,
        authorGithub: formData.authorGithub || undefined,
      });

      toast.success("Plugin submitted successfully!");
      onNavigateToDetail(formData.slug);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to submit plugin"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCompatibilityToggle = (
    comp: (typeof compatibilityOptions)[number]
  ) => {
    setFormData((prev) => ({
      ...prev,
      compatibility: prev.compatibility.includes(comp)
        ? prev.compatibility.filter((c) => c !== comp)
        : [...prev.compatibility, comp],
    }));
  };

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
        <h1 className="text-4xl font-bold mb-4">Submit Plugin</h1>
        <p className="text-secondary leading-relaxed">
          Share your plugin with the OpenCode community. Fill out the form
          below to add your plugin to the directory.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border mb-12"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Basic Information</h2>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Plugin Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
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
              required
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
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
              required
              value={formData.shortDescription}
              onChange={(e) =>
                setFormData({ ...formData, shortDescription: e.target.value })
              }
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
              placeholder="Official Rust language server with IDE features"
            />
          </div>

          <div>
            <label className="block text-sm text-secondary mb-2">
              Full Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
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
              required
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value as (typeof categories)[number],
                })
              }
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
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
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
                    checked={formData.compatibility.includes(comp)}
                    onChange={() => handleCompatibilityToggle(comp)}
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
              value={formData.features}
              onChange={(e) =>
                setFormData({ ...formData, features: e.target.value })
              }
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
              required
              value={formData.repoUrl}
              onChange={(e) =>
                setFormData({ ...formData, repoUrl: e.target.value })
              }
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
              value={formData.docsUrl}
              onChange={(e) =>
                setFormData({ ...formData, docsUrl: e.target.value })
              }
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
              required
              value={formData.version}
              onChange={(e) =>
                setFormData({ ...formData, version: e.target.value })
              }
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
              required
              value={formData.authorName}
              onChange={(e) =>
                setFormData({ ...formData, authorName: e.target.value })
              }
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
              value={formData.authorGithub}
              onChange={(e) =>
                setFormData({ ...formData, authorGithub: e.target.value })
              }
              className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white font-mono"
              placeholder="johndoe"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={
              isSubmitting || formData.compatibility.length === 0
            }
            className="px-8 py-3 bg-primary text-white hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Plugin"}
          </button>
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
