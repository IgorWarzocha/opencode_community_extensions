"use client";

import { FormInput } from "../FormInput.js";
import { FORM_PLACEHOLDERS } from "../../../constants/plugin-form.js";

/**
 * Metadata section for plugin submission form
 * Contains repository URLs, version, and author information
 */
export function MetadataSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Links & Metadata</h2>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Repository URL *
        </label>
        <FormInput
          name="repoUrl"
          type="url"
          required
          placeholder={FORM_PLACEHOLDERS.repoUrl}
          mono
        />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Documentation URL
        </label>
        <FormInput
          name="docsUrl"
          type="url"
          placeholder={FORM_PLACEHOLDERS.docsUrl}
          mono
        />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Version *
        </label>
        <FormInput
          name="version"
          required
          placeholder={FORM_PLACEHOLDERS.version}
          mono
        />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Author Name *
        </label>
        <FormInput
          name="authorName"
          required
          placeholder={FORM_PLACEHOLDERS.authorName}
        />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Author GitHub Username
        </label>
        <FormInput
          name="authorGithub"
          placeholder={FORM_PLACEHOLDERS.authorGithub}
          mono
        />
      </div>
    </div>
  );
}
