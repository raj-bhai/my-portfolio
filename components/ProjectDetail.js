import { motion } from "framer-motion";
import TechnologyIcons from "./TechnologyIcons";

const ProjectDetail = ({ project }) => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 sm:p-12">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ lineHeight: '1.2', paddingBottom: '20px' }}
      >
        {project.title}
      </motion.h1>

      {/* Project Overview */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Overview</h2>
        <p className="text-base sm:text-lg">{project.introduction}</p>
      </motion.div>

      {/* Full Project Description */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Project Description</h2>
        <p className="text-base sm:text-lg">{project.description}</p>
      </motion.div>

      {/* Client Requirements */}
      {project.clientRequirements && (
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Client Requirements</h2>
          <p className="text-base sm:text-lg">{project.clientRequirements}</p>
        </motion.div>
      )}

      {/* Features */}
      {project.features?.length ? (
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Features</h2>
          <ul className="list-disc pl-5 text-base sm:text-lg">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      ) : null}

      {/* Screenshots */}
      {project.screenshots?.length ? (
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Screenshots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : null}

      {/* Technologies Used */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Technologies Used</h2>
        <ul className="list-none flex flex-wrap gap-4">
          {project.technologies?.map((tech, index) => {
            const { icon: Icon, color } = TechnologyIcons[tech] || {};
            return (
              <motion.li
                key={index}
                className="flex items-center text-base sm:text-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {Icon && (
                  <Icon className="mr-2 sm:mr-3 text-xl sm:text-2xl" style={{ color: color }} />
                )}
                {tech}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      {/* Role and Challenges */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">My Role</h2>
        <p className="text-base sm:text-lg">{project.myRole}</p>
      </motion.div>

      {/* Challenges & Solutions */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Key Challenges & Solutions</h2>
        <ul className="list-disc pl-5 text-base sm:text-lg">
          {project.keyChallenges?.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
        <ul className="list-disc pl-5 mt-4 text-base sm:text-lg">
          {project.solutionsAndApproach?.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
      </motion.div>

      {/* Results */}
      {project.results?.length ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-3">Results</h2>
          <ul className="list-disc pl-5 text-base sm:text-lg">
            {project.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </motion.div>
      ) : null}

      {/* Link to learn more */}
      {project.projectLink && (
        <motion.div
          className="mt-8 sm:mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-xl hover:bg-teal-600 hover:shadow-2xl transition-all duration-300"
          >
            Learn more about this project
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectDetail;
