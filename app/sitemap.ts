import type { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projects";

const BASE_URL = "https://jamshedportfolio.vercel.app";

const ARTICLE_IDS = [
  "wp-vs-nextjs-switch",
  "canonical-errors-fix",
  "pagespeed-90-plus-wordpress",
  "dynamic-jewelry-configurator",
  "nextjs-app-router-patterns",
  "mobile-slider-performance",
  "international-seo-structure",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/build`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = Object.values(PROJECTS_DATA).map(
    (project) => ({
      url: `${BASE_URL}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const insightPages: MetadataRoute.Sitemap = ARTICLE_IDS.map((id) => ({
    url: `${BASE_URL}/insights/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainPages, ...projectPages, ...insightPages];
}