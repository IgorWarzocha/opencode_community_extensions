/**
 * Form components exports
 *
 * This file exports all reusable form components for convenient importing.
 * Follows TypeScript 5.9+ verbatimModuleSyntax best practices.
 */

export type { FormInputProps } from "./FormInput.js";
export { FormInput } from "./FormInput.js";

export type { FormSelectProps, FormSelectOption } from "./FormSelect.js";
export { FormSelect } from "./FormSelect.js";

export type { FormTextareaProps } from "./FormTextarea.js";
export { FormTextarea } from "./FormTextarea.js";

export type {
  CheckboxGroupProps,
  CheckboxGroupOption,
} from "./CheckboxGroup.js";
export { CheckboxGroup } from "./CheckboxGroup.js";

export { SubmitButton } from "./SubmitButton.js";

// Section components
export { BasicInfoSection } from "./sections/BasicInfoSection.js";
export { ClassificationSection } from "./sections/ClassificationSection.js";
export { MetadataSection } from "./sections/MetadataSection.js";
