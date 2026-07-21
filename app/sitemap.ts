import type { MetadataRoute } from "next";

const BASE = "https://www.garagedoorgroup.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/garage-doors", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/garage-doors/sectional-garage-door", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-doors/aluminium-garage-door", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-doors/wooden-cedar-garage-door", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-doors/roller-doors", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-doors/commercial-roller-doors", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/garage-doors/sectional-garage-door-insulation", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/garage-services/garage-door-repairs", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/garage-services/garage-door-servicing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-services/garage-door-seals", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/garage-services/garage-door-springs", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-services/garage-openers", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/garage-services/garage-door-remotes", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/locations/warkworth", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/mangawhai", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/silverdale", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about-us", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/articles", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/articles/the-importance-of-selecting-the-correct-garage-door-size", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/articles/are-your-garage-door-springs-a-problem-5-signs-you-need-a-repair", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/articles/why-insulate-your-garage-door", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/articles/choose-the-right-garage-door-for-your-home", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
