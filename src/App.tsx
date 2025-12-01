import { useState } from "react";
import { api } from "../convex/_generated/api";
import { Toaster } from "sonner";
import { ThemeProvider } from "./lib/theme-context";
import { HomePage } from "./components/HomePage";
import { PluginDetailPage } from "./components/PluginDetailPage";
import { SubmitPluginPage } from "./components/SubmitPluginPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";

export type Page = "home" | "detail" | "submit";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedSlug, setSelectedSlug] = useState<string>("");

  const navigateToHome = () => {
    setCurrentPage("home");
    setSelectedSlug("");
  };

  const navigateToDetail = (slug: string) => {
    setSelectedSlug(slug);
    setCurrentPage("detail");
  };

  const navigateToSubmit = () => {
    setCurrentPage("submit");
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark transition-colors">
        <div className="relative">
          <Header
            onNavigateHome={navigateToHome}
            onNavigateSubmit={navigateToSubmit}
          />
          <ThemeToggle />
        </div>
        <main className="flex-1">
          {currentPage === "home" && (
            <HomePage onNavigateToDetail={navigateToDetail} />
          )}
          {currentPage === "detail" && (
            <PluginDetailPage
              slug={selectedSlug}
              onNavigateToDetail={navigateToDetail}
              onNavigateHome={navigateToHome}
            />
          )}
          {currentPage === "submit" && (
            <SubmitPluginPage
              onNavigateToDetail={navigateToDetail}
              onNavigateHome={navigateToHome}
            />
          )}
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
