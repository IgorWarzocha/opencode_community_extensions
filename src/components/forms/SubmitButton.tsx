"use client";

import { useFormStatus } from "react-dom";

/**
 * Submit button component with loading state
 * Uses useFormStatus hook to show pending state during form submission
 */
export function SubmitButton() {
  return (
    <button
      type="submit"
      className="px-8 py-3 bg-primary text-background hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-hover-dark"
    >
      <SubmitButtonContent />
    </button>
  );
}

/**
 * Submit button content that changes based on form submission status
 */
function SubmitButtonContent() {
  const { pending } = useFormStatus();

  if (pending) {
    return "Submitting...";
  }

  return "Submit Extension";
}
