import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hardlyworking.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/memos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/memos/were-hiring`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/the-case-for-doing-nothing`,
      lastModified: new Date("2026-04-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/a-note-on-bullshit-jobs`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/q1-performance-report`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/the-reclamation-index`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/on-the-subject-of-bathroom-breaks`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/memos/approved-activity-codes`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/the-2-9-hour-finding`,
      lastModified: new Date("2026-02-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/memos/what-counts-as-work`,
      lastModified: new Date("2026-02-14"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/memos/notice-of-incorporation`,
      lastModified: new Date("2026-02-02"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
