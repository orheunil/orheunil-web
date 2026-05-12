import type { MetadataRoute } from "next";

const termRoutes = ["/terms/"];
const locales = ["ko", "en"];

export default function robots(): MetadataRoute.Robots {
  const localizedDisallow = locales.flatMap((locale) =>
    termRoutes.map((route) => `/${locale}${route}`),
  );

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: localizedDisallow,
    },
    sitemap: "https://company.allta.io/sitemap.xml",
  };
}
