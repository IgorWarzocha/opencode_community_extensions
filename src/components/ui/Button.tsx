/**
 * Simple button component with consistent styling
 */

"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Show loading state */
  loading?: boolean;
  /** Button content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable button component with consistent styling and theme support.
 * Follows React 19.2 patterns with proper TypeScript 5.9+ typing.
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-dark focus:ring-primary dark:bg-primary-dark dark:hover:bg-primary",
    secondary:
      "bg-surface text-primary border border-border hover:bg-muted focus:ring-primary dark:bg-surface-dark dark:text-primary-dark dark:border-border-dark dark:hover:bg-muted-dark",
    outline:
      "border border-border text-primary hover:bg-muted focus:ring-primary dark:border-border-dark dark:text-primary-dark dark:hover:bg-muted-dark",
    ghost:
      "text-primary hover:bg-muted focus:ring-primary dark:text-primary-dark dark:hover:bg-muted-dark",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 dark:bg-red-700 dark:hover:bg-red-800",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
