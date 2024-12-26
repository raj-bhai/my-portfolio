"use client";
import ProjectCard from "@/components/ProjectCard";
import ProjectsData from "@/data/projectsData";
import { motion } from "framer-motion";
import Head from 'next/head';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects by Rajkiran Kalwar - Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore the projects developed by Rajkiran Kalwar, a Full-Stack Developer. Discover my work and the technologies I use."
        />
        <meta
          name="keywords"
          content="Projects, Rajkiran Kalwar, Full-Stack Developer, Portfolio"
        />
        <meta name="author" content="Rajkiran Kalwar" />
        <link rel="canonical" href="https://www.iamrajklwr.com/projects" />
      </Head>
      <section className="min-h-screen text-center pb-20">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ProjectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
