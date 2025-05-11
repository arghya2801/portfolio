"use client"
import Image from 'next/image';
// import { useEffect, useState } from 'react';

interface Skill {
    name: string;
    slug: string; // Used for the API call
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

// Map skill names to their correct slug for the SVGL API
const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", slug: "python" },
            { name: "Java", slug: "java" },
            { name: "C++", slug: "cpp" },
            { name: "JavaScript", slug: "javascript" },
            { name: "TypeScript", slug: "typescript" },
            //   { name: "Bash", slug: "bash" },
            //   { name: "HTML", slug: "html" },
            //   { name: "CSS3", slug: "css" },
            //   { name: "Markdown", slug: "markdown" },
            //   { name: "LaTeX", slug: "latex" },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextjs" },
            { name: "TailwindCSS", slug: "tailwindcss" },
            //   { name: "Chart.js", slug: "chartjs" },
            { name: "Vite", slug: "vite" },
            //   { name: "React Router", slug: "reactrouter" }
        ]
    },
    {
        title: "Backend & Databases",
        skills: [
            { name: "Node.js", slug: "nodejs" },
            { name: "Express.js", slug: "express" },
            { name: "JWT", slug: "jwt" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "MySQL", slug: "mysql" }
        ]
    },
    {
        title: "Data Science",
        skills: [
            { name: "NumPy", slug: "numpy" },
            { name: "Pandas", slug: "pandas" },
            { name: "Matplotlib", slug: "matplotlib" },
            { name: "scikit-learn", slug: "scikit" }
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { name: "Linux", slug: "linux" },
            { name: "Git", slug: "git" },
            { name: "GitHub", slug: "github" },
            { name: "Docker", slug: "docker" },
            { name: "AWS", slug: "aws" },
            //   { name: "Vercel", slug: "vercel" },
            //   { name: "NPM", slug: "npm" }
        ]
    }
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const svgPath = `/svgs/${skill.slug}.svg`;
  const placeholder = "/file.svg"; // Ensure this path is correct

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2">
      <div className="h-8 w-8 flex items-center justify-center">
        <Image
          src={svgPath}
          alt={`${skill.name} logo`}
          height={32}
          width={32}
          style={{ height: "auto", maxHeight: "36px" }}
          onError={(e) => { (e.target as HTMLImageElement).src = placeholder; }}
        />
      </div>
      <span>{skill.name}</span>
    </div>
  );
};

const CategorySection: React.FC<{ category: SkillCategory }> = ({ category }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  return (
    <div className="py-8 grid grid-cols-5 gap-8">
      {skillCategories.map((category, index) => (
        <CategorySection key={index} category={category} />
      ))}
    </div>
  );
};

export default SkillsGrid;
