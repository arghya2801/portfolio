'use client'
import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TabNavigation from "./TabNavigation";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function TableOfContents({ activeTab }: { activeTab: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Generate TOC from headings in the document
    // We need to wait for the content to be rendered and visibility to be applied
    const timer = setTimeout(() => {
        const headings = document.querySelectorAll(".prose-content h1, .prose-content h2, .prose-content h3");
        const tocItems: TocItem[] = [];

        headings.forEach((heading) => {
        // Skip hidden headings
        if ((heading as HTMLElement).style.display === 'none') return;

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
    }, 100); // Small delay to allow DOM updates

    return () => clearTimeout(timer);
  }, [activeTab]); // Re-run when activeTab changes

  useEffect(() => {
    // Track active heading based on scroll position
    const handleScroll = () => {
      const headings = document.querySelectorAll(".prose-content h1, .prose-content h2, .prose-content h3");
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      let currentActive = "";
      headings.forEach((heading) => {
        if ((heading as HTMLElement).style.display === 'none') return;
        
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
      setIsOpen(false); // Close mobile menu on click
    }
  };

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="lg:sticky lg:top-20 lg:max-h-screen lg:overflow-y-auto bg-white dark:bg-[#020618] mb-8 lg:mb-0">
      <div className="lg:hidden mb-4">
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-left"
        >
            <span className="font-semibold text-gray-900 dark:text-gray-100">Table of Contents</span>
            <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <h3 className="hidden lg:block text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
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
                    ? "bg-cyan-100 dark:bg-[#1fb4d5] text-cyan-600 dark:text-cyan-100 font-medium" 
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
    </div>
  );
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState('deep-dive');
  const [title, setTitle] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const container = contentRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    
    // Find and extract H1
    const h1 = container.querySelector('h1');
    if (h1) {
        // Only set title if it's not set yet to avoid unnecessary re-renders
        if (!title) setTitle(h1.textContent || '');
        h1.style.display = 'none';
    }
    
    // Reset all to visible first (except H1)
    children.forEach(child => {
        if (child.tagName !== 'H1') {
            child.style.display = 'block';
        }
    });

    if (activeTab === 'deep-dive') {
        return; // Show all
    }

    let firstH2Index = -1;
    let secondH2Index = -1;

    children.forEach((child, index) => {
        if (child.tagName === 'H2') {
            if (firstH2Index === -1) firstH2Index = index;
            else if (secondH2Index === -1) secondH2Index = index;
        }
    });

    if (activeTab === 'overview') {
        // Show content before first H2
        children.forEach((child, index) => {
            if (firstH2Index !== -1 && index >= firstH2Index) {
                child.style.display = 'none';
            }
        });
    } else if (activeTab === 'tech-stack') {
        // Try to find a "Tech Stack" section
        let techStackIndex = -1;
        let nextSectionIndex = -1;

        children.forEach((child, index) => {
            if (child.tagName === 'H2') {
                const text = child.textContent?.toLowerCase() || '';
                if (text.includes('tech') || text.includes('stack') || text.includes('technologies')) {
                    techStackIndex = index;
                } else if (techStackIndex !== -1 && nextSectionIndex === -1) {
                    nextSectionIndex = index;
                }
            }
        });

        if (techStackIndex !== -1) {
            children.forEach((child, index) => {
                if (index < techStackIndex || (nextSectionIndex !== -1 && index >= nextSectionIndex)) {
                    child.style.display = 'none';
                }
            });
        } else {
             if (firstH2Index !== -1) {
                 children.forEach((child, index) => {
                    if (index < firstH2Index || (secondH2Index !== -1 && index >= secondH2Index)) {
                        child.style.display = 'none';
                    }
                });
             }
        }
    }

  }, [activeTab]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-64 p-5 lg:border-r border-gray-200 dark:border-gray-700">
          <TableOfContents activeTab={activeTab} />
        </div>
        
        <div className="flex-1 px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-4xl mx-auto">
            {title && (
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                    {title}
                </h1>
            )}
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            <div 
                ref={contentRef}
                className="prose-content prose prose-lg dark:prose-invert prose-headings:scroll-mt-20 max-w-none"
            >
                {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}