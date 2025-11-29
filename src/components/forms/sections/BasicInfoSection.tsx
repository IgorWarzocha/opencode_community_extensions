"use client";

import { FormInput } from "../FormInput.js";
import { FormTextarea } from "../FormTextarea.js";
import { FORM_PLACEHOLDERS } from "../../../constants/plugin-form.js";

/**
 * Basic information section for plugin submission form
 * Contains name, slug, and description fields
 */
export function BasicInfoSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Basic Information</h2>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Plugin Name *
        </label>
        <FormInput name="name" required placeholder={FORM_PLACEHOLDERS.name} />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Slug * (URL-friendly identifier)
        </label>
        <FormInput
          name="slug"
          required
          placeholder={FORM_PLACEHOLDERS.slug}
          mono
        />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Short Description * (one line)
        </label>
        <FormInput
          name="shortDescription"
          required
          placeholder={FORM_PLACEHOLDERS.shortDescription}
        />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Full Description *
        </label>
        <FormTextarea
          name="description"
          required
          rows={4}
          placeholder={FORM_PLACEHOLDERS.description}
        />
      </div>
    </div>
  );
}
