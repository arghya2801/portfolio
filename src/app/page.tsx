"use client"
import AchievementsTimeline from "@/components/AchievementsTimeline";
import CertificationsGrid from "@/components/CertificationsGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkillsGrid from "@/components/SkillGrid";
// import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { useInView } from "@/hooks/useInView";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const { ref, isInView } = useInView(0.1);
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
        >
            {children}
        </div>
    );
}

export default function Home() {
    return (
        <div className="animate-fade-in">
            <Navbar />
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
                <div className="">
                    <div className="md:w-3/4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            Hi, I&apos;m {' '}
                            <ReactTyped
                                strings={["Arghya Chakrabarty"]}
                                typeSpeed={60}
                                backSpeed={30}
                                backDelay={2000}
                                loop={true}
                                className="text-indigo-600 dark:text-indigo-400" />
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                            A passionate Full Stack Developer with a knack for building scalable and user-friendly web applications, and a strong interest in cloud computing. I thrive on turning complex problems into elegant solutions.
                        </p>
                        <Link href="/projects" className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                            View My Projects
                        </Link>
                    </div>
                </div>
            </div>

            <AnimatedSection className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
                <h2 className="text-4xl font-bold text-indigo-500 dark:text-indigo-400 mb-6">Skills</h2>
                <div className="border-b border-gray-400 dark:border-gray-600 w-22"></div> {/* Adjust width as needed */}
                <SkillsGrid />
            </AnimatedSection>

            <AnimatedSection className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
                <h2 className="text-4xl font-bold text-indigo-500 dark:text-indigo-400 mb-6">Certifications</h2>
                <div className="border-b border-gray-400 dark:border-gray-600 w-57"></div> {/* Adjust width as needed */}
                <div className="mt-6">
                    <CertificationsGrid />
                </div>
            </AnimatedSection>

            <AnimatedSection className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
                <h2 className="text-4xl font-bold text-indigo-500 dark:text-indigo-400 mb-6">Acheivements</h2>
                <div className="border-b border-gray-400 dark:border-gray-600 w-60"></div> {/* Adjust width as needed */}
                <div className="mt-6">
                    <AchievementsTimeline />
                </div>
            </AnimatedSection>

            <Footer />
        </div>
    );
}

