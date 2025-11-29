interface TagChipProps {
  label: string;
  variant?: "category" | "compatibility" | "tag";
}

export function TagChip({ label, variant = "tag" }: TagChipProps) {
  const baseClasses = "px-2 py-1 text-xs border";

  const variantClasses = {
    category: "border-primary text-primary",
    compatibility: "border-accent text-accent",
    tag: "border-border text-secondary",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {label}
    </span>
  );
}
