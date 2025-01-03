"use client";

import { useParams } from "next/navigation";
import ProjectsData from "@/data/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
import Head from "next/head";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const { id } = useParams();

  const project = ProjectsData.find((project) => project.id == id);

  if (!project) {
    return (
      <motion.div
        className="min-h-screen text-center pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold">Project Not Found</h2>
      </motion.div>
    );
  }

  const keywords = `${project.title}, ${project.technologies.join(", ")}, ${project.role}, ${project.introduction}`;

  return (
    <>
      <Head>
        <title>{project.title} - Project by Rajkiran Kalwar</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Rajkiran Kalwar" />
        <link rel="canonical" href={`https://www.iamrajklwr.com/projects/${id}`} />
      </Head>
      <ProjectDetail project={project} />
    </>
  );
}
