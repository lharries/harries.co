import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { formatDate } from "../lib/utils";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import clsx from "clsx";

export function Button({
  asLink = false,
  children,
  href,
  onClick,
  disabled = false,
}: {
  asLink?: boolean;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  if (asLink) {
    return (
      <a
        className={`border border-black px-3 py-2 font-sans uppercase text-xs bg-white rounded-md`}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className="border border-black px-3 py-2 font-sans uppercase text-xs bg-white rounded-md"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-8 ${className}`}>{children}</div>
  );
};

export const Card = ({
  children,
  className,
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "bg-white flex flex-col gap-4 rounded-md",
        !noPadding && "py-8 px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const WhackTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="uppercase font-sans text-gray-500 text-sm">{children}</div>
  );
};

export const ParagraphLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string | undefined;
}) => {
  return (
    <a href={href} className="underline text-neutral-600">
      {children}
    </a>
  );
};

export const CustomParagraph = ({
  children,
  textSize = "base",
}: {
  children: React.ReactNode;
  textSize?: string;
}) => <p className={`mb-4 last:mb-0 text-${textSize}`}>{children}</p>;

export const BlogArticle = ({
  title,
  date,
  category,
  href,
  body,
}: {
  title: string;
  date: string;
  category: string;
  href: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold font-serif">{title}</h2>
      <div className="flex gap-2 text-xs text-neutral-600 font-sans">
        <div className="uppercase">{category}</div>
        <p>&#183;</p>
        <div>{formatDate(date)}</div>
      </div>
      <p className="text-sm">{body}</p>
      <a
        href={href}
        className="font-sans text-blue-700 uppercase text-xs font-medium"
      >
        Read more &rarr;
      </a>
    </div>
  );
};

export const Markdown = ({
  body,
  textSize = "base",
}: {
  body: string;
  textSize?: string;
}) => (
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
    components={{
      a: ({ children, href }) => (
        <ParagraphLink href={href}>{children}</ParagraphLink>
      ),
      p: ({ children, ...props }) => (
        <CustomParagraph {...props} textSize={textSize}>
          {children}
        </CustomParagraph>
      ),
      h1: ({ children }) => {
        const id =
          typeof children === "string"
            ? children.toLowerCase().replace(/[^\w]+/g, "-")
            : "";
        return (
          <h1 id={id} className="text-2xl font-bold font-serif mb-4 mt-8">
            {children}
          </h1>
        );
      },
      h2: ({ children }) => {
        const id =
          typeof children === "string"
            ? children.toLowerCase().replace(/[^\w]+/g, "-")
            : "";
        return (
          <h2 id={id} className="text-xl font-bold font-serif mb-3 mt-6">
            {children}
          </h2>
        );
      },
      h3: ({ children }) => {
        const id =
          typeof children === "string"
            ? children.toLowerCase().replace(/[^\w]+/g, "-")
            : "";
        return (
          <h3 id={id} className="text-lg font-bold font-serif mb-2 mt-4">
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        const id =
          typeof children === "string"
            ? children.toLowerCase().replace(/[^\w]+/g, "-")
            : "";
        return (
          <h4 id={id} className="text-base font-bold font-serif mb-2 mt-4">
            {children}
          </h4>
        );
      },
      ul: ({ children }: React.ComponentPropsWithoutRef<"ul">) => (
        <ul className="list-disc pl-5 mb-4 not-prose text-base [&_ul]:mb-0 [&_ol]:mb-0">
          {children}
        </ul>
      ),
      ol: ({ children }: React.ComponentPropsWithoutRef<"ol">) => (
        <ol className="list-decimal pl-5 mb-4 not-prose text-base [&_ul]:mb-0 [&_ol]:mb-0">
          {children}
        </ol>
      ),
      li: ({ children }) => <li className="mb-1">{children}</li>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
          {children}
        </blockquote>
      ),
      code: ({ className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");
        return match ? (
          <SyntaxHighlighter
            language={match[1]}
            // @ts-expect-error - Type assertion to fix the style prop type error
            style={tomorrow}
            customStyle={{
              margin: "0",
              borderRadius: "0.375rem",
            }}
            {...props}
            wrapLongLines={true}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code
            className="bg-[#2D2D2D] text-neutral-200 rounded px-1.5 py-0.5 text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      },
      pre: ({ children }) => {
        return (
          <pre
            className={`rounded-md p-4 overflow-x-auto mb-4 font-mono text-sm bg-[#2D2D2D]`}
          >
            {children}
          </pre>
        );
      },
    }}
  >
    {body}
  </ReactMarkdown>
);

export const Project = ({
  title,
  date,
  category,
  body,
  img,
}: {
  title: string;
  date: string;
  category: string;
  body: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-6 md:gap-4">
      <div className="col-span-2 w-full h-48 relative overflow-hidden group rounded-md">
        <div
          className="absolute inset-0 bg-cover bg-center blur-md scale-110 transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={img}
            alt={title}
            width={200}
            height={200}
            className="object-contain transition-transform duration-300 group-hover:scale-110 rounded-md"
          />
        </div>
      </div>
      <div className="col-span-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold font-serif">{title}</h2>
        <div className="flex gap-2 text-xs text-neutral-600 font-sans">
          <div className="uppercase">{category}</div>
          <p>&#183;</p>
          <div>{formatDate(date)}</div>
        </div>
        <div className="text-sm">
          <Markdown body={body} textSize="sm" />
        </div>
      </div>
    </div>
  );
};

export const NavBar = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 mt-8 justify-between items-center">
        <Link href="/" className="font-semibold text-3xl font-serif">
          Luke Harries
        </Link>
        <div className="flex gap-2">
          <Button asLink href="https://x.com/lukeharries_">
            X
          </Button>
          <Button asLink href="https://www.linkedin.com/in/luke-harries/">
            LinkedIn
          </Button>
          <Button asLink href="https://github.com/lharries">
            GitHub
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { TableOfContents } from "./components/TableOfContents";
