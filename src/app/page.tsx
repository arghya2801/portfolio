import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>Home Page of NextJS (test)</div>
            <div className="flex mx-32">
                <div className="">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Arghya Chakrabarty</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                            A passionate professional Full Stack Developer with a knack for building scalable and user-friendly web applications. I thrive on turning complex problems into elegant solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/projects" className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                                View My Projects
                            </Link>
                            <Link href="/contact" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-md transition duration-300">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    {/* <div className="md:w-1/3">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/profilePic.jpg"
                                alt="Arghya Chakrabarty Profile Picture"
                                layout="fill"
                                objectFit="cover"
                                priority // Helps in improving LCP for important images
                            />
                        </div>
                    </div> */}
                </div>
            </div>

            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">JavaScript</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">React</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">Next.js</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">Node.js</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">Express.js</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">MongoDB</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">PostgreSQL</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">HTML</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">CSS</div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-sm">Tailwind CSS</div>
                    {/* Add more skills as needed */}
                </div>
            </section>

            <div className="flex justify-center">
                <div className="m-4">
                    <img src="/vercel.svg" alt="Vercel Logo" className="w-24 h-24" />
                </div>
                <div className="m-4">
                    <img src="/nextjs.svg" alt="Next.js Logo" className="w-24 h-24" />
                </div>
                <div className="m-4">
                    <img src="/tailwind-css.svg" alt="Tailwind CSS Logo" className="w-24 h-24" />
                </div>
            </div>
            <Footer />
        </>
    );
}

