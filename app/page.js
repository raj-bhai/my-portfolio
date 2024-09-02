import Link from "next/link";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";
import Skills from "./components/Skills.js";

export default function Home() {
  return (
    <main className="container mx-auto p-4 relative">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Hi, I&apos;m Rajkiran Kalwar
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I&apos;m a software developer passionate about creating impactful
          software solutions.
        </p>

        <Link
          href="/about"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition"
        >
          Learn More About Me
        </Link>
      </section>

      <Skills />

      {/* Other Sections */}
      {/* Featured Projects Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Project 1
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of your project. What it does, the
              technologies used, and why it’s awesome.
            </p>
            <Link
              href="/projects"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View Project
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Project 2
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Another project with a short description. Highlight the main
              features and technology stack.
            </p>
            <Link
              href="/projects"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            See All Projects
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Interested in Collaborating?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}
