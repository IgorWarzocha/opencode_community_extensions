"use client";

import type { SelectHTMLAttributes } from "react";

export interface FormSelectOption {
  /** Option value */
  value: string;
  /** Option display text */
  label: string;
}

export interface FormSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "name"> {
  /** Select name attribute for form submission */
  name: string;
  /** Whether the field is required */
  required?: boolean;
  /** Options array - can be strings or option objects */
  options: string[] | FormSelectOption[];
  /** Optional placeholder option (shows as first option) */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable select component with consistent styling and theme support.
 * Follows React 19.2 patterns with proper TypeScript 5.9+ typing.
 */
export function FormSelect({
  name,
  required = false,
  options,
  placeholder,
  className = "",
  ...props
}: FormSelectProps) {
  const baseClasses =
    "w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-surface text-primary placeholder:text-secondary transition-colors dark:bg-surface-dark dark:text-primary-dark dark:border-border-dark dark:focus:border-primary-dark dark:placeholder:text-secondary-dark";

  return (
    <select
      name={name}
      required={required}
      className={`${baseClasses} ${className}`.trim()}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => {
        if (typeof option === "string") {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        }
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
