"use client";

import type { InputHTMLAttributes } from "react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input name attribute for form submission */
  name: string;
  /** Whether the field is required */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Input type (defaults to "text") */
  type?: "text" | "url" | "email" | "password";
  /** Additional CSS classes */
  className?: string;
  /** Whether to use monospace font (for URLs, slugs, etc.) */
  mono?: boolean;
}

/**
 * Reusable text input component with consistent styling and theme support.
 * Follows React 19.2 patterns with proper TypeScript 5.9+ typing.
 */
export function FormInput({
  name,
  required = false,
  placeholder,
  type = "text",
  className = "",
  mono = false,
  ...props
}: FormInputProps) {
  const baseClasses =
    "w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface text-primary placeholder:text-secondary transition-colors dark:bg-surface-dark dark:text-primary-dark dark:border-border-dark dark:focus:border-primary-dark dark:placeholder:text-secondary-dark";

  const monoClass = mono ? " font-mono" : "";

  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={`${baseClasses}${monoClass} ${className}`.trim()}
      {...props}
    />
  );
}
