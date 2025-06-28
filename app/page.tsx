import Image from "next/image";
import { getProjects } from "../lib/projects";
import React from "react";
import {
  Container,
  Card,
  WhackTitle,
  ParagraphLink,
  BlogArticle,
  Project,
  NavBar,
} from "./components";
import { getBlogPosts } from "../lib/blog";
import { getPodcasts } from "../lib/podcasts";
import { ConversationalAI } from "@/components/conversational-ai";
import clsx from "clsx";

export async function generateMetadata() {
  return {
    title: `Luke Harries — Personal Website and Blog`,
    description:
      "I lead growth at ElevenLabs, one of the fastest growing startups in the world. I do a mix of engineering, marketing and data.",
    alternates: {
      canonical: `https://harries.co/`,
    },
    openGraph: {
      title: "Luke Harries — Personal Website and Blog",
      description:
        "I lead growth at ElevenLabs, one of the fastest growing startups in the world. I do a mix of engineering, marketing and data.",
      type: "website",
      authors: ["Luke Harries"],
      publishedTime: "2024-11-24",
    },
    twitter: {
      card: "summary_large_image",
      title: "Luke Harries — Personal Website and Blog",
      description:
        "I lead growth at ElevenLabs, one of the fastest growing startups in the world. I do a mix of engineering, marketing and data.",
    },
  };
}

export default function Home() {
  const projects = getProjects();
  const posts = getBlogPosts();
  const podcasts = getPodcasts();

  const growthArticles = [
    {
      title: "Your first growth hire",
      href: "/first-growth-hire",
      category: "Hiring",
      bgColorClass: "bg-orange-50",
      textColorClass: "text-orange-500",
      imagePath: "/blog/first-growth-hire/cover.png",
      description:
        "Who should they be? How should you evaluate them? Do you go for a generalist or a specialist?",
    },
    {
      title: "SEO for startups",
      href: "/seo-for-startups",
      category: "SEO",
      bgColorClass: "bg-blue-50",
      textColorClass: "text-blue-500",
      imagePath: "/blog/seo-for-startups/cover.png",
      description:
        "The guide I wish I had when learning about SEO. Understand the user's intent, solving the user's intent, and getting your pages ranking.",
    },
    {
      title: "Launch your product",
      href: "/launch-your-product",
      category: "Launching",
      bgColorClass: "bg-orange-50",
      textColorClass: "text-green-500",
      imagePath: "/blog/launch-your-product/cover.png",
      description:
        "A launch is a high-leverage moment to tell the world about your new product or feature. Here's how to make it count.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="mt-6 md:mt-40 flex flex-col gap-8 md:gap-40 pb-40">
        <Container className="md:grid md:grid-cols-6 flex gap-6 flex-col-reverse items-center">
          <Card className="col-span-4">
            <h1 className="text-2xl font-bold font-serif">
              I&apos;m Luke Harries
            </h1>
            <p>
              I lead growth at{" "}
              <ParagraphLink href="https://elevenlabs.io">
                ElevenLabs
              </ParagraphLink>
              , one of the fastest growing startups in the world. I do a mix of
              marketing, product, engineering and developer experience.
            </p>
            <p>
              Alongside, I angel invest $5-$15k in startups. I&apos;m proud to
              have backed some exceptional companies including Lovable and
              Runna.
            </p>
            <p>
              Previously, I was interim head of product at{" "}
              <ParagraphLink href="https://posthog.com">PostHog</ParagraphLink>{" "}
              and co-founded{" "}
              <ParagraphLink href="https://fellahealth.com">
                Fella Health
              </ParagraphLink>
              , a YC backed HealthTech company that treats thousands of patients
              per month. I started my career at Microsoft Research working on
              reinforcement learning.
            </p>
            <p>
              I studied pre-med at Cambridge University. My parents are still
              hopeful that I might become a doctor.
            </p>
          </Card>
          <div className="md:col-span-2 flex items-center px-8 md:px-0 flex-col gap-4">
            <Image
              src="/luke.jpg"
              alt="Luke Harries"
              className="rounded-md"
              width={200}
              height={200}
            />
            <ConversationalAI />
          </div>
        </Container>

        <Container className="mx-auto flex flex-col md:flex-row w-full gap-6">
          {growthArticles.map((article, index) => (
            <Card key={index} className="w-full group" noPadding>
              <a href={article.href} className="w-full">
                <div
                  className={clsx(
                    article.bgColorClass,
                    "relative w-full pt-[56.25%] overflow-hidden rounded-t-md"
                  )}
                >
                  <Image
                    src={article.imagePath}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="bg-white p-6 h-50">
                  <div
                    className={clsx(
                      "uppercase font-sans",
                      article.textColorClass,
                      "text-sm mb-1"
                    )}
                  >
                    {article.category}
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-2">
                    {article.title}
                  </h3>
                  <div className="text-sm text-gray-500 mt-auto">
                    {article.description}
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </Container>

        <Container className="mx-auto flex flex-col md:flex-row w-full gap-6">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="w-full group" noPadding>
              <a
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-md group">
                  {podcast.useBlurredBackground ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center blur-md scale-110 transition-transform duration-300 group-hover:scale-125"
                        style={{ backgroundImage: `url(${podcast.cover})` }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={podcast.cover}
                          alt={podcast.title}
                          width={300}
                          height={300}
                          className="object-contain transition-transform duration-300 group-hover:scale-110 rounded-md max-h-full max-w-full"
                        />
                      </div>
                    </>
                  ) : (
                    <Image
                      src={podcast.cover}
                      alt={podcast.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="bg-white p-6 h-50">
                  <div className="uppercase font-sans text-purple-500 text-sm mb-1">
                    PODCAST
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-2">
                    {podcast.title}
                  </h3>
                  <div className="text-sm text-gray-500 mt-auto">
                    {podcast.description}
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </Container>

        <Container>
          <Card>
            <WhackTitle>Writing</WhackTitle>
            <div className="flex flex-col gap-8">
              {posts.map((post) => (
                <BlogArticle
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  href={`/${post.slug}`}
                  body={post.description}
                />
              ))}
            </div>
          </Card>
        </Container>

        <Container>
          <Card>
            <WhackTitle>Projects</WhackTitle>
            <div className="flex flex-col gap-16">
              {projects.map((project) => (
                <Project
                  key={project.slug}
                  title={project.title}
                  date={project.date}
                  category={project.category}
                  img={project.img}
                  body={project.body}
                />
              ))}
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}
