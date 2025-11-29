"use client";

import type { TextareaHTMLAttributes } from "react";

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea name attribute for form submission */
  name: string;
  /** Whether the field is required */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Number of visible text lines */
  rows?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable textarea component with consistent styling and theme support.
 * Follows React 19.2 patterns with proper TypeScript 5.9+ typing.
 */
export function FormTextarea({
  name,
  required = false,
  placeholder,
  rows = 4,
  className = "",
  ...props
}: FormTextareaProps) {
  const baseClasses =
    "w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface text-primary placeholder:text-secondary transition-colors dark:bg-surface-dark dark:text-primary-dark dark:border-border-dark dark:focus:border-primary-dark dark:placeholder:text-secondary-dark";

  return (
    <textarea
      name={name}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className={`${baseClasses} ${className}`.trim()}
      {...props}
    />
  );
}
