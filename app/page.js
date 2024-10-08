import Link from "next/link";
import Skills from "./components/Skills";
import Head from "next/head";
import FeaturedProjects from "./components/FeaturedProjects";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajkiran Kalwar - Full-Stack Developer | iamrajklwr</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Rajkiran Kalwar, a Full-Stack Developer specializing in React.js, Node.js, and mobile app development. Follow me on Instagram @iamrajklwr for insights and updates."
        />
        <meta
          name="keywords"
          content="Rajkiran Kalwar, iamrajklwr, Full-Stack Developer, React.js, Node.js, Mobile App Developer, iOS, Android"
        />
        <link rel="canonical" href="https://www.iamrajklwr.com/" />
      </Head>
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
            className="inline-block btn-primary "
          >
            Learn More About Me
          </Link>
        </section>

        <ServicesSection/>

        <Skills />

        {/* Other Sections */}
        {/* Featured Projects Section */}
        {/* <section className="py-16">
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
              technologies used, and why it&apos;s awesome.
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
      </section> */}

        <FeaturedProjects />

        {/* Call to Action Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <Link
            href="/contact"
            className="inline-block btn-primary"
          >
            Contact Me
          </Link>
        </section>
      </main>
    </>
  );
}
