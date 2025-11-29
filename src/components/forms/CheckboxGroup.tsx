"use client";

export interface CheckboxGroupOption {
  /** Checkbox value */
  value: string;
  /** Checkbox display label */
  label: string;
}

export interface CheckboxGroupProps {
  /** Group name attribute for form submission */
  name: string;
  /** Options array - can be strings or option objects */
  options: string[] | CheckboxGroupOption[];
  /** Group label text */
  label: string;
  /** Whether at least one selection is required */
  required?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for individual checkboxes */
  checkboxClassName?: string;
}

/**
 * Reusable checkbox group component with consistent styling and theme support.
 * Follows React 19.2 patterns with proper TypeScript 5.9+ typing.
 */
export function CheckboxGroup({
  name,
  options,
  label,
  required = false,
  className = "",
  checkboxClassName = "",
}: CheckboxGroupProps) {
  const containerClasses = `flex flex-wrap gap-3 ${className}`.trim();
  const labelClasses =
    "block text-sm text-secondary mb-3 dark:text-secondary-dark";
  const checkboxContainerClasses = "flex items-center gap-2 cursor-pointer";
  const checkboxClasses = `w-4 h-4 ${checkboxClassName}`.trim();

  return (
    <div>
      <label className={labelClasses}>
        {label}
        {required && " *"}
      </label>
      <div className={containerClasses}>
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const displayLabel =
            typeof option === "string" ? option : option.label;

          return (
            <label key={value} className={checkboxContainerClasses}>
              <input
                type="checkbox"
                name={name}
                value={value}
                className={checkboxClasses}
              />
              <span className="text-sm">{displayLabel}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
