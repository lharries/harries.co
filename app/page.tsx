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
import { ConversationalAI } from "@/components/conversational-ai";

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
