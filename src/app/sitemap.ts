import type { MetadataRoute } from "next";
import { projects, routeCards } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://artejastacks.com";
  const staticRoutes = ["", ...routeCards.map((route) => route.href)].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
