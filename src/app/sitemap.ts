import type { MetadataRoute } from "next";

const siteUrl = "https://company.allta.io";

const pages = [
  "",
  "/company",
  "/contact",
  "/news",
  "/service",
  "/solution",
  "/tech",
];

const locales = ["ko", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = locales.flatMap((locale) =>
    pages.map((page) => `/${locale}${page}`),
  );

  const routes = [...pages, ...localizedRoutes];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
