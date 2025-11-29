export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search plugins..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none text-sm bg-surface text-primary placeholder:text-secondary transition-colors dark:bg-surface-dark dark:text-primary-dark dark:border-border-dark dark:focus:border-primary-dark dark:placeholder:text-secondary-dark"
      />
    </div>
  );
}
