export interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateSubmit: () => void;
  onNavigateAdmin?: () => void;
}

export function Header({
  onNavigateHome,
  onNavigateSubmit,
  onNavigateAdmin,
}: HeaderProps) {
  return (
    <header className="border-b border-border bg-surface dark:bg-surface-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={onNavigateHome}
          className="text-xl font-semibold hover:text-accent transition-colors"
        >
          opencode/extensions
        </button>
        <div className="flex gap-3">
          <button
            onClick={onNavigateSubmit}
            className="px-4 py-2 bg-primary text-background hover:bg-primary-hover transition-colors text-sm dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-hover-dark"
          >
            Submit Extension
          </button>
          {onNavigateAdmin && (
            <button
              onClick={onNavigateAdmin}
              className="px-4 py-2 bg-secondary text-primary hover:bg-secondary-hover transition-colors text-sm dark:bg-secondary-dark dark:text-primary-dark dark:hover:bg-secondary-hover-dark"
            >
              Admin Panel
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
