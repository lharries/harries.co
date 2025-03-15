"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrolling.current) {
        return;
      }

      // Clear the active highlight
      setActiveId("");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);

    // Scroll to the heading
    const element = document.getElementById(id);
    if (element) {
      isAutoScrolling.current = true;
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset the autoScrolling flag after animation completes
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1000);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block sticky top-32 max-h-[calc(100vh-12rem)] overflow-y-auto pb-8">
      <h2 className="text-sm font-bold mb-4 text-neutral-900">
        Table of Contents
      </h2>
      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                "transition-colors duration-100 hover:text-neutral-900",
                activeId === heading.id
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-500"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
