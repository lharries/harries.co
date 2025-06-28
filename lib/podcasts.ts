import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPodcasts() {
  // Get all .mdx files in _podcasts
  const files = fs
    .readdirSync(path.join("_podcasts"))
    .filter((file) => file.endsWith(".mdx"));

  const podcasts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const fileContent = fs.readFileSync(
      path.join("_podcasts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(fileContent);

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      category: frontmatter.category,
      description: frontmatter.description,
      url: frontmatter.url,
      cover: frontmatter.cover,
      useBlurredBackground: frontmatter.useBlurredBackground || false,
    };
  });

  return podcasts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
