interface FilterBarProps {
  category: string;
  compatibility: string;
  onCategoryChange: (value: string) => void;
  onCompatibilityChange: (value: string) => void;
}

const categories = ["LSP", "RAG/Search", "DevOps", "UI", "Workflow"];
const compatibilityOptions = ["tui", "cli", "ide", "server", "zen"];

export function FilterBar({
  category,
  compatibility,
  onCategoryChange,
  onCompatibilityChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs text-secondary mb-2 uppercase tracking-wide">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
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
        <label className="block text-xs text-secondary mb-2 uppercase tracking-wide">
          Compatibility
        </label>
        <select
          value={compatibility}
          onChange={(e) => onCompatibilityChange(e.target.value)}
          className="w-full px-4 py-2 border border-border focus:border-primary focus:outline-none text-sm bg-white"
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
