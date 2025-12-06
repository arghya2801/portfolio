"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <Link 
      href={href}
      className="relative group text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 text-lg font-medium px-2 py-1"
    >
      {label}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out" />
    </Link>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" /> // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-gray-100" />
      ) : (
        <Moon className="h-5 w-5 text-gray-900" />
      )}
    </button>
  )
}

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-end gap-x-6 py-4 pr-8 md:pr-32">
      <NavItem href="/" label="Home" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/about" label="About" />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;