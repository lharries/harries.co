import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { Container, Card, NavBar, Markdown } from "../components";
import { formatDate } from "@/lib/utils";
import ElevenLabsAudioNative from "@/app/audio-native";

export async function generateStaticParams() {
  const directories = fs
    .readdirSync(path.join("_blog"), { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return directories.map((slug) => ({
    post: slug,
  }));
}

type Post = {
  frontmatter: {
    title: string;
    date: string;
    description?: string;
  };
  content: string;
};

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}) {
  const { post } = await params;
  const { frontmatter } = await getPost(post);

  return {
    title: `${frontmatter.title} | Luke Harries`,
    description:
      frontmatter.description || `Read ${frontmatter.title} by Luke Harries`,
    alternates: {
      canonical: `https://harries.co/${post}`,
    },
    openGraph: {
      title: frontmatter.title,
      description:
        frontmatter.description || `Read ${frontmatter.title} by Luke Harries`,
      type: "article",
      authors: ["Luke Harries"],
      publishedTime: frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description:
        frontmatter.description || `Read ${frontmatter.title} by Luke Harries`,
    },
  };
}

async function getPost(slug: string) {
  const fileContent = fs.readFileSync(
    path.join("_blog", slug, "index.md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter,
    content,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const { frontmatter, content } = await getPost(post);

  return (
    <div>
      <NavBar />
      <div className="mt-10 pb-40">
        <Container className="max-w-screen-md">
          <Card>
            <h1 className="text-2xl font-bold font-serif">
              {frontmatter.title}
            </h1>

            {/* Author byline */}
            <div className="flex items-center gap-3">
              <Image
                src="/luke.jpg"
                alt="Luke Harries"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-serif text-sm font-medium">
                  Luke Harries
                </div>
                <div className="text-sm text-neutral-600 font-serif">
                  {formatDate(frontmatter.date)}
                </div>
              </div>
            </div>

            <div className="mt-2">
              <ElevenLabsAudioNative publicUserId="9b517a2f52841ea43ac5edc14153786159279aae9fc7c36244cc11e86a0176e4" />
            </div>

            <div className="mt-2">
              <Markdown body={content} />
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}
