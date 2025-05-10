import React from 'react';
import Link from 'next/link';

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

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-end gap-x-6 py-4 pr-32">
      <NavItem href="/" label="Home" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/about" label="About" />
    </nav>
  );
};

export default Navbar;