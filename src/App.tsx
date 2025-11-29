import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Toaster } from "sonner";
import { HomePage } from "./components/HomePage";
import { PluginDetailPage } from "./components/PluginDetailPage";
import { SubmitPluginPage } from "./components/SubmitPluginPage";
import { Header } from "./components/Header";

type Page = "home" | "detail" | "submit";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const seedPlugins = useMutation(api.seed.seedPlugins);
  const [hasSeeded, setHasSeeded] = useState(false);

  useEffect(() => {
    if (!hasSeeded) {
      seedPlugins().then(() => setHasSeeded(true)).catch(() => setHasSeeded(true));
    }
  }, [hasSeeded, seedPlugins]);

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
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        onNavigateHome={navigateToHome}
        onNavigateSubmit={navigateToSubmit}
      />
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
      <Toaster />
    </div>
  );
}
