"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Image from "next/image";


export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-48 py-12">
                <h1 className="text-6xl font-semibold text-gray-800 dark:text-gray-100 mb-8">About</h1>
                <hr className="border-gray-300 dark:border-gray-700 py-7" />

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column: Image and Introduction */}
                    <div className="md:w-1/3 flex flex-col items-center">
                        {/* Image Placeholder */}
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-300 dark:border-gray-700">
                            <img
                                src="Arghya_Photo_2022.png"
                                alt="Arghya Chakrabarty"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Arghya Chakrabarty</h2>
                            <p className="text-gray-600 dark:text-gray-400">B. Tech student at VIT Bhopal</p>
                            <p className="text-gray-600 dark:text-gray-400">Computer Science - Specialization in Cloud Computing and Automation</p>
                        </div>
                    </div>

                    {/* Right Column: Biography and Details */}
                    <div className="md:w-2/3 space-y-6">
                        <p className="text-gray-700 dark:text-gray-300">
                            I am a final-year Computer Science undergraduate with a strong foundation in software development, data science, and cloud technologies. I am passionate about building scalable and efficient full-stack applications and continuously expanding my expertise in modern web frameworks and machine learning.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-bold">Current Focus:</span> Developing full-stack applications using React + NextJS, Node.js, and PostgreSQL, with deployment on AWS and Vercel.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-bold">Collaboration Interests:</span> Open-source projects related to web development, machine learning, and cloud-native applications.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-bold">Learning Goals:</span> Deepening knowledge in TypeScript, advanced React patterns, and continuous integration/continuous deployment (CI/CD) pipelines.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-bold">Expertise Includes:</span> C++, Java, JavaScript (React, Node.js, Express), Python (NumPy, Pandas, scikit-learn), SQL & NoSQL databases (Postgres, MySQL, MongoDB), AWS, Docker, and more.
                        </p>

                        <p><a href="https://drive.google.com/file/d/1cYzFNWAzqDF2ldAKlTyBSH0yFrYSQx5j/view?usp=sharing">My Resume</a></p>

                        <h2>Contact</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <a href="https://github.com/arghya2801" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 underline">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/arghya333/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 underline">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

