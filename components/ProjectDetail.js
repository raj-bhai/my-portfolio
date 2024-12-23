import TechnologyIcons from "./TechnologyIcons";

const ProjectDetail = ({ project }) => {
  return (
    <section className="min-h-screen p-4 sm:p-8 dark:bg-gray-900 bg-gray-100 ">
      <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {project.introduction}
        </p>
      </div>

      {/* Full Project Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>

      {/* Client Requirements */}
      {project.clientRequirements && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Client Requirements</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {project.clientRequirements}
          </p>
        </div>
      )}

      {/* Features */}
      {project.features?.length ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {project.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Screenshots */}
      {project.screenshots?.length ? (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Screenshots:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:flex lg:gap-4">
            {project.screenshots?.map((screenshot, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full max-w-s rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Technologies Used */}
      <div className="mb-8">
        <strong className="text-2xl font-semibold mb-2">Technologies Used:</strong>
        <ul className="list-none flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => {
            const { icon: Icon, color } = TechnologyIcons[tech] || {};
            return (
              <li
                key={index}
                className="flex items-center text-gray-500 dark:text-gray-400"
              >
                {Icon && (
                  <Icon className="mr-2 text-xl" style={{ color: color }} />
                )}
                {tech}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Role and Challenges */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">My Role</h2>
        <p className="text-gray-700 dark:text-gray-300">{project.myRole}</p>
      </div>

      {/* Challenges & Solutions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Key Challenges & Solutions
        </h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          {project.keyChallenges?.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
        <ul className="list-disc pl-5 mt-4 text-gray-700 dark:text-gray-300">
          {project.solutionsAndApproach?.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
      </div>

      {/* Results */}
      {
        project.results?.length ?
        <div>
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          {project.results?.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div> : null
      }
    </section>
  );
};

export default ProjectDetail;
