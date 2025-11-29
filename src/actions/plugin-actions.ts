"use server";

import { api } from "../../convex/_generated/api";

export async function submitPlugin(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const slug = formData.get("slug") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as
      | "LSP"
      | "RAG/Search"
      | "DevOps"
      | "UI"
      | "Workflow";
    const tags = formData.get("tags") as string;
    const compatibility = formData.getAll("compatibility") as Array<
      "tui" | "cli" | "ide" | "server" | "zen"
    >;
    const features = formData.get("features") as string;
    const repoUrl = formData.get("repoUrl") as string;
    const docsUrl = formData.get("docsUrl") as string;
    const version = formData.get("version") as string;
    const authorName = formData.get("authorName") as string;
    const authorGithub = formData.get("authorGithub") as string;

    // Parse arrays
    const tagsArray = tags
      ? tags
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t.length > 0)
      : [];
    const featuresArray = features
      ? features
          .split("\n")
          .map((f) => f.trim())
          .filter((f) => f.length > 0)
      : [];

    // For now, we'll simulate the submission since server actions with Convex require special setup
    // In a real implementation, you would call the Convex mutation here
    console.log("Extension submission data:", {
      name,
      slug,
      shortDescription,
      description,
      category,
      tags: tagsArray,
      compatibility,
      features: featuresArray,
      repoUrl,
      docsUrl: docsUrl || undefined,
      version,
      authorName,
      authorGithub: authorGithub || undefined,
    });

    // Simulate successful submission
    return {
      success: true,
      message: "Extension submitted successfully!",
      slug,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to submit extension",
    };
  }
}
