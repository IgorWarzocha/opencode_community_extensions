import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { HomePage } from "./components/HomePage";
import { PluginDetailPage } from "./components/PluginDetailPage";
import { SubmitPluginPage } from "./components/SubmitPluginPage";
import { AdminLoginPage } from "./components/AdminLoginPage.js";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function HomeRoute() {
  const navigate = useNavigate();
  return (
    <HomePage onNavigateToDetail={(slug) => navigate(`/extensions/${slug}`)} />
  );
}

function DetailRoute() {
  const navigate = useNavigate();
  const { slug = "" } = useParams();
  return (
    <PluginDetailPage
      slug={slug}
      onNavigateToDetail={(nextSlug) => navigate(`/extensions/${nextSlug}`)}
      onNavigateHome={() => navigate("/")}
    />
  );
}

function SubmitRoute() {
  const navigate = useNavigate();
  return (
    <SubmitPluginPage
      onNavigateToDetail={(slug) => navigate(`/extensions/${slug}`)}
      onNavigateHome={() => navigate("/")}
    />
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeRoute /> },
      { path: "extensions/:slug", element: <DetailRoute /> },
      { path: "submit", element: <SubmitRoute /> },
    ],
  },
  { path: "/admin", element: <AdminLoginPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <ConvexAuthProvider client={convex}>
    <RouterProvider router={router} />
  </ConvexAuthProvider>,
);
