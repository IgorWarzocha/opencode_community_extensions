"use server";

import { parseFormData } from "../lib/form-parsers.js";
import { validatePluginSubmission } from "../lib/validators.js";
import type { FormSubmissionResult } from "../types/plugin-form.js";

export async function submitPlugin(
  prevState: unknown,
  formData: FormData,
): Promise<FormSubmissionResult> {
  try {
    // Parse form data using utility
    const parsedData = parseFormData(formData);

    // Validate parsed data using utility
    const validation = validatePluginSubmission(parsedData);

    if (!validation.isValid) {
      return {
        success: false,
        error: `Validation failed: ${validation.errors.map((e) => e.message).join(", ")}`,
      };
    }

    // For now, we'll simulate the submission since server actions with Convex require special setup
    // In a real implementation, you would call the Convex mutation here
    console.log("Extension submission data:", parsedData);

    // Simulate successful submission
    return {
      success: true,
      message: "Extension submitted successfully!",
      slug: parsedData.slug,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to submit extension",
    };
  }
}
