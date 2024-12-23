"use client";

import { useParams } from "next/navigation";
import ProjectsData from "@/data/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectPage() {
  const { id } = useParams(); 

  const project = ProjectsData.find((project) => project.id == id);


  if (!project) {
    return (
      <div className="min-h-screen text-center pt-20">
        <h2 className="text-xl font-semibold">Project Not Found</h2>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
