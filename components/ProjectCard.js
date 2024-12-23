import Link from "next/link";
import TechnologyIcons from "./TechnologyIcons";


const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
      {/* Project Title */}
      <h2 className="text-2xl font-semibold mb-4 hover:text-yellow-500">{project.title}</h2>

      {/* Project Introduction */}
      <p className="text-gray-600 dark:text-gray-300 text-ellipsis overflow-hidden mb-4"
                style={{
                  WebkitLineClamp: 2,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
      >{project.introduction}</p>

      {/* Project Description (Truncated to two lines) */}
      <div className="mb-4">
        <strong className="text-lg">Description:</strong>
        <p
          className="text-gray-500 dark:text-gray-400 text-ellipsis overflow-hidden"
          style={{
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Technologies Used */}
      <div className="mb-4  ">
        <strong className="text-lg">Technologies Used:</strong>
        <ul className="list-none flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech, index) => {
            const { icon: Icon, color } = TechnologyIcons[tech] || {};
            return (
              <li key={index} className="flex items-center text-gray-500 dark:text-gray-400">
                {Icon && <Icon className="mr-2 text-xl" style={{ color: color }} />}
                {tech}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Project Role */}
      <div className="mb-4">
        <strong className="text-lg">My Role:</strong>
        <p className="text-gray-500 dark:text-gray-400">{project.role}</p>
      </div>

      {/* View Details Button */}
      <div className="mt-4 mb-4">
        <Link href={`/projects/${project.id}`} passHref>
          <button className="px-6 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors">
            View Details
          </button>
        </Link>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transition-all duration-300" />
      </div>
    </div>
  );
};

export default ProjectCard;
