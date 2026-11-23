import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";

const staticRoutes = ["/", "/projects", "/experience", "/education", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...caseStudies.map(({ slug }) => `/projects/${slug}`),
  ].map((path) => ({ url: new URL(path, site.url).toString() }));
}
