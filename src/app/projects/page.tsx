import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

// Sample project data (replace with your actual project data)
const projects = [
    {
        id: 1,
        name: 'Predictive Maintence for Industry Devices',
        image: '/images/project1.jpg', // Replace with your image path
        description:
            'Predicts maintenance needs for industrial devices using machine learning algorithms utlizing IoT.',
        link: '/blog/predictive-maintenance',
    },
    {
        id: 2,
        name: 'E-commerce Platform',
        image: '/images/project1.jpg', // Replace with your image path
        description:
            'A fully functional e-commerce platform built with Next.js, featuring user authentication, product catalog, shopping cart, and checkout process.',
        link: '/blog/e-commerce',
    },
    {
        id: 3,
        name: 'Portfolio Website',
        image: '/images/project2.jpg', // Replace with your image path
        description:
            'A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS.',
        link: '/blog/portfolio-website',
    },
    {
        id: 4,
        name: 'Task Management App',
        image: '/images/project3.jpg', // Replace with your image path
        description:
            'A simple and intuitive task management application allowing users to create, organize, and track their tasks.',
        link: '/blog/task-management-app',
    },
    {
        id: 5,
        name: 'Blog Application',
        image: '/images/project4.jpg', // Replace with your image path
        description:
            'A blog application with features like user authentication, creating and editing posts, and commenting functionality.',
        link: '/blog/blog-application',
    },
    // Add more projects here
];

export default function Projects() {
    return (
        <div className="animate-fade-in">
        <Navbar />
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            {project.image && (
                                <div className="relative w-full h-48 md:h-64">
                                    <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                                </div>
                            )}
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{project.name}</h2>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                                <Link href={project.link} className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <Footer />
        </div>
    );
}