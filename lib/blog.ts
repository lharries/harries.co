import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts() {
  // Get all directory names in _blog
  const directories = fs
    .readdirSync(path.join("_blog"), { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const posts = directories.map((slug) => {
    const fileContent = fs.readFileSync(
      path.join("_blog", slug, "index.md"),
      "utf-8"
    );
    const { data: frontmatter } = matter(fileContent);

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      category: frontmatter.category,
      description: frontmatter.description,
      highlight: frontmatter.highlight,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
