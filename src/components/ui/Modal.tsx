/**
 * Modal dialog component with consistent styling
 */

"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Called when the modal is closed */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Modal content */
  children: ReactNode;
  /** Maximum width of the modal */
  size?: "sm" | "md" | "lg" | "xl";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable modal component with consistent styling and theme support.
 * Follows React 19.2 patterns with proper TypeScript 5.9+ typing.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  className = "",
}: ModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full mx-4 bg-surface dark:bg-surface-dark 
          border border-border dark:border-border-dark 
          rounded-lg shadow-xl
          ${sizeClasses[size]} ${className}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border dark:border-border-dark">
          <h2 className="text-xl font-semibold text-primary dark:text-primary-dark">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-primary dark:text-primary-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
