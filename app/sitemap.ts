import type { MetadataRoute } from "next";
import { getBlogPosts } from "../lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  return [
    {
      url: "https://harries.co/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `https://harries.co/${post.slug}/`,
      lastModified: post.date || new Date(),
      priority: 1,
    })),
  ];
}
