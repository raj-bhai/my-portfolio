
import ProjectCard from "@/components/ProjectCard";
import ProjectsData from "@/data/projectsData";


export default function Projects() {
  return (
    <section className="min-h-screen text-center pb-20">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

  );
}
