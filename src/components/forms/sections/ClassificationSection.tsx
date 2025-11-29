"use client";

import { FormSelect } from "../FormSelect.js";
import { FormInput } from "../FormInput.js";
import { FormTextarea } from "../FormTextarea.js";
import { CheckboxGroup } from "../CheckboxGroup.js";
import {
  PLUGIN_CATEGORIES,
  COMPATIBILITY_OPTIONS,
  FORM_PLACEHOLDERS,
} from "../../../constants/plugin-form.js";

/**
 * Classification section for plugin submission form
 * Contains category, tags, compatibility, and features fields
 */
export function ClassificationSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Classification</h2>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Category *
        </label>
        <FormSelect name="category" required options={[...PLUGIN_CATEGORIES]} />
      </div>

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Tags (comma-separated)
        </label>
        <FormInput name="tags" placeholder={FORM_PLACEHOLDERS.tags} />
      </div>

      <CheckboxGroup
        name="compatibility"
        label="Compatibility * (select all that apply)"
        required
        options={[...COMPATIBILITY_OPTIONS]}
      />

      <div>
        <label className="block text-sm text-secondary mb-2 dark:text-secondary-dark">
          Features (one per line)
        </label>
        <FormTextarea
          name="features"
          rows={5}
          placeholder={FORM_PLACEHOLDERS.features}
        />
      </div>
    </div>
  );
}
