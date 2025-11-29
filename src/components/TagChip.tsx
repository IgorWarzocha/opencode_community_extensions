interface TagChipProps {
  label: string;
  variant?: "category" | "compatibility" | "tag";
}

export function TagChip({ label, variant = "tag" }: TagChipProps) {
  const baseClasses = "px-2 py-1 text-xs border transition-colors";

  const variantClasses = {
    category:
      "border-primary text-primary dark:border-primary-dark dark:text-primary-dark",
    compatibility:
      "border-accent text-accent dark:border-accent-dark dark:text-accent-dark",
    tag: "border-border text-secondary dark:border-border-dark dark:text-secondary-dark",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>{label}</span>
  );
}
