'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Generate TOC from headings in the document
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || "";
      let id = heading.id;

      // Generate ID if heading doesn't have one
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        
        // Ensure unique ID
        const existingIds = tocItems.map(item => item.id);
        let uniqueId = id;
        let counter = 1;
        while (existingIds.includes(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }
        
        heading.id = uniqueId;
        id = uniqueId;
      }

      tocItems.push({ id, text, level });
    });

    setToc(tocItems);
  }, []);

  useEffect(() => {
    // Track active heading based on scroll position
    const handleScroll = () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      let currentActive = "";
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        
        if (offsetTop <= scrollPosition) {
          currentActive = heading.id;
        }
      });

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-20 max-h-screen overflow-y-auto bg-white dark:bg-[#020618]">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Table of Contents
      </h3>
      <nav className="space-y-1">
        {toc.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`
              block w-full text-left text-sm py-1 px-2 rounded transition-colors duration-200
              hover:bg-gray-200 dark:hover:bg-gray-700
              ${activeId === item.id 
                ? "bg-indigo-100 dark:bg-[#5e59ff] text-indigo-600 dark:text-indigo-100 font-medium" 
                : "text-gray-700 dark:text-gray-300"
              }
            `}
            style={{ 
              paddingLeft: `${(item.level - 1) * 12 + 8}px`,
              fontSize: item.level === 1 ? '14px' : '13px'
            }}
          >
            {item.text}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-row min-h-screen">
        <div className="hidden lg:block w-64 p-5 border-r border-gray-200 dark:border-gray-700">
          <TableOfContents />
        </div>
        
        <div className="flex-1 px-5 py-8">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:scroll-mt-20">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}