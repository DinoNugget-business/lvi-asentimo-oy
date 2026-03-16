import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asentimo.fi";

  const routes = [
    "",
    "/palvelumme",
    "/hinnasto",
    "/referenssit",
    "/yhteistyokumppanit",
    "/yhteystiedot",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/fi${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
