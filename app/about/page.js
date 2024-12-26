"use client"
import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>About Rajkiran Kalwar - Full-Stack Developer</title>
        <meta name="description" content="Learn more about Rajkiran Kalwar, a Full-Stack Developer with expertise in various technologies and a passion for building innovative solutions." />
        <meta name="keywords" content="About Rajkiran Kalwar, Full-Stack Developer, Skills, Experience" />
        <meta name="author" content="Rajkiran Kalwar" />
        <link rel="canonical" href="https://www.iamrajklwr.com/about" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* First Section with Gradient Background */}
        <motion.section
          className="flex-grow text-center py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-base sm:text-lg mb-6">
              Hello! I&apos;m Rajkiran Kalwar, a passionate Full-Stack Developer with over 3 years of experience in creating impactful web and mobile applications. I have a strong background in working with multinational corporations, dynamic startups, and small businesses, helping them grow by taking their operations online.
            </p>
            <p className="text-base sm:text-lg mb-6">
              My expertise lies in full-stack development, where I combine creative design with efficient coding to deliver user-centric digital experiences. Whether it&apos;s building intuitive front-ends, designing scalable back-end systems, or developing mobile apps for iOS and Android, I thrive on turning ideas into impactful solutions.
            </p>
            <p className="text-base sm:text-lg mb-8">
              Outside of coding, I am passionate about continuous learning, staying ahead of the latest tech trends, and applying best practices in SEO to ensure that the products I create are not only functional but also discoverable by the right audience.
            </p>
          </div>
        </motion.section>

        {/* Second Section with Light/Dark Theme Support */}
        <motion.section
          className="flex-grow text-center py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Expertise</h2>
            <p className="text-base sm:text-lg mb-6">
              Over the years, I&apos;ve developed a deep understanding of both the technical and business aspects of software development. My expertise includes:
            </p>
            <ul className="list-disc list-inside text-left mx-auto mb-6 text-base sm:text-lg">
              <li>
                <strong>Web Development:</strong> Creating responsive, scalable web applications using technologies like Next.js, React.js, and Node.js.
              </li>
              <li>
                <strong>Mobile App Development:</strong> Developing cross-platform mobile applications with React Native for both iOS and Android.
              </li>
              <li>
                <strong>SEO Optimization:</strong> Implementing SEO best practices to ensure that digital products rank highly on search engines and attract organic traffic.
              </li>
              <li>
                <strong>Business Growth:</strong> Helping small businesses go digital by developing custom solutions that drive growth and improve operational efficiency.
              </li>
            </ul>
            <p className="text-base sm:text-lg mb-8">
              My goal is to deliver clean, maintainable code that solves current challenges while being adaptable to future needs. I believe in the power of collaboration and am committed to turning your vision into a reality through innovative, scalable software solutions.
            </p>
          </div>
        </motion.section>

        {/* Third Section with Visual Elements */}
        <motion.section
          className="flex-grow text-center py-20 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Journey</h2>
            <p className="text-base sm:text-lg mb-6">
              My journey in the tech world began with a curiosity for how things work and a desire to create. Over the years, I have honed my skills through various projects and collaborations, constantly pushing the boundaries of what&apos;s possible.
            </p>
            <p className="text-base sm:text-lg mb-6">
              From building my first website to developing complex applications for clients worldwide, my journey has been one of growth, learning, and innovation. I am driven by a passion for technology and a commitment to excellence in everything I do.
            </p>
            <p className="text-base sm:text-lg mb-8">
              Today, I continue to explore new technologies, take on challenging projects, and collaborate with talented individuals to create solutions that make a difference. Let&apos;s connect and create something amazing together!
            </p>
          </div>
        </motion.section>
      </div>
    </>
  );
}
