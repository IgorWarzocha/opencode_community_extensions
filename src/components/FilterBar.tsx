import {
  EXTENSION_CATEGORIES,
  COMPATIBILITY_OPTIONS,
} from "../constants/plugin-form.js";

export interface FilterBarProps {
  category: string;
  compatibility: string;
  onCategoryChange: (value: string) => void;
  onCompatibilityChange: (value: string) => void;
}

const categories = EXTENSION_CATEGORIES;
const compatibilityOptions = COMPATIBILITY_OPTIONS;

export function FilterBar({
  category,
  compatibility,
  onCategoryChange,
  onCompatibilityChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs text-secondary mb-2 uppercase tracking-wide dark:text-secondary-dark">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full pl-4 py-2 pr-10 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors appearance-none custom-select dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs text-secondary mb-2 uppercase tracking-wide dark:text-secondary-dark">
          Compatibility
        </label>
        <select
          value={compatibility}
          onChange={(e) => onCompatibilityChange(e.target.value)}
          className="w-full pl-4 py-2 pr-10 border border-border focus:border-primary focus:outline-none text-sm bg-surface transition-colors appearance-none custom-select dark:bg-surface-dark dark:border-border-dark dark:focus:border-primary-dark"
        >
          <option value="">All Modes</option>
          {compatibilityOptions.map((comp) => (
            <option key={comp} value={comp}>
              {comp}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
