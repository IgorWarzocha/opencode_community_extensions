export interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateSubmit: () => void;
}

export function Header({ onNavigateHome, onNavigateSubmit }: HeaderProps) {
  return (
    <header className="border-b border-border bg-surface dark:bg-surface-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={onNavigateHome}
          className="text-xl font-semibold hover:text-accent transition-colors"
        >
          opencode/extensions
        </button>
        <button
          onClick={onNavigateSubmit}
          className="px-4 py-2 bg-primary text-background hover:bg-primary-hover transition-colors text-sm dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-hover-dark"
        >
          Submit Extension
        </button>
      </div>
    </header>
  );
}
