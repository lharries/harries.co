import Image from "next/image";
import ReactMarkdown from "react-markdown";
import React from "react";
// Add these imports at the top
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function Button({
  asLink,
  children,
  href,
}: {
  asLink: boolean;
  children: React.ReactNode;
  href?: string;
}) {
  if (asLink) {
    return (
      <a
        className={`border border-black px-3 py-2 font-mono uppercase text-xs bg-white rounded-md`}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return <button className="border border-black bg-white">{children}</button>;
  }
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-screen-lg m-auto ${className} md:px-8`}>
      {children}
    </div>
  );
}

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white py-8 px-8 flex flex-col gap-4 ${className} rounded-md`}
    >
      {children}
    </div>
  );
};

export const WhackTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="uppercase font-mono text-gray-500">/{children}</div>;
};

export const ParagraphLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string | undefined;
}) => {
  return (
    <a href={href} className="underline text-neutral-600 font-mono">
      {children}
    </a>
  );
};

export const CustomParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className="mb-4 last:mb-0">{children}</p>;

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
      <h2 className="text-lg font-semibold font-mono">{title}</h2>
      <div className="flex gap-2 text-xs text-neutral-600 font-mono">
        <div className="uppercase">{category}</div>
        <div>{date}</div>
      </div>
      <p className="text-sm">{body}</p>
      <a
        href={href}
        className="font-mono text-blue-700 uppercase text-xs font-medium"
      >
        Read more &rarr;
      </a>
    </div>
  );
};

export const Markdown = ({ body }: { body: string }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="font-mono text-2xl font-bold mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-mono text-xl font-bold mt-8 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-mono text-lg font-bold mt-6 mb-3">{children}</h3>
        ),
        p: ({ children }) => <CustomParagraph>{children}</CustomParagraph>,
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4">{children}</ol>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-neutral-300 pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "") || [];
          return (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              style={tomorrow}
              customStyle={{ marginBottom: "1rem" }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          );
        },
        a: ({ href, children }) => (
          <ParagraphLink href={href}>{children}</ParagraphLink>
        ),
      }}
    >
      {body}
    </ReactMarkdown>
  );
};

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
    <div className="grid grid-cols-6 gap-4">
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
        <h2 className="text-lg font-semibold font-mono">{title}</h2>
        <div className="flex gap-2 text-xs text-neutral-600 font-mono">
          <div className="uppercase">{category}</div>
          <div>{date}</div>
        </div>
        <div className="text-sm">
          <Markdown body={body} />
        </div>
      </div>
    </div>
  );
};
