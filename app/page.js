import Link from "next/link";
import Skills from "@/components/Skills";
import Head from "next/head";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";

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

        <FeaturedProjects />

        {/* Call to Action Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-200 sm:text-gray-900 dark:text-gray-400 sm:dark:text-gray-700 mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-gray-300 sm:text-gray-700 dark:text-gray-300 sm:dark:text-gray-600 mb-8">
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
