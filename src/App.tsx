/**
 * Public layout for the extensions directory.
 * Uses React Router for navigation between pages.
 */

import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./lib/theme-context";

export default function App() {
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark transition-colors">
        <div className="relative">
          <Header
            onNavigateHome={() => navigate("/")}
            onNavigateSubmit={() => navigate("/submit")}
          />

          <ThemeToggle />
        </div>
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
