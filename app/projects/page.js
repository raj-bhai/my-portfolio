import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    introduction: "Introduction to Project 1",
    description: "This is a detailed description of Project 1. It focuses on building a great user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    screenshots: ["/images/project1-1.png", "/images/project1-2.png"],
    role: "Frontend Developer",
  },
  {
    id: 2,
    title: "Project 2",
    introduction: "Introduction to Project 2",
    description: "Project 2 is about optimizing performance and improving scalability in web applications.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
    screenshots: ["/images/project2-1.png", "/images/project2-2.png"],
    role: "Full Stack Developer",
  },
  {
    id: 3,
    title: "Project 3",
    introduction: "Introduction to Project 3",
    description: "Project 3 focuses on mobile app development using React Native.",
    technologies: ["React Native", "Firebase"],
    screenshots: ["/images/project3-1.png", "/images/project3-2.png"],
    role: "Mobile Developer",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen text-center pb-20">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

  );
}
