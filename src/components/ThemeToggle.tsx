"use client";

import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "../lib/theme-context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "system":
        return <Monitor className="w-4 h-4" />;
      case "light":
        return <Sun className="w-4 h-4" />;
      case "dark":
        return <Moon className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-1/2 -translate-y-1/2 right-6 p-2 text-secondary hover:text-primary transition-colors dark:text-secondary-dark dark:hover:text-primary-dark"
      title={`Current theme: ${theme}. Click to cycle through themes.`}
    >
      {getThemeIcon()}
    </button>
  );
}
