import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        {/* <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Project 1
          </h3>
          <p className="text-gray-100 mb-4">
            A brief description of your project. What it does, the technologies used, and why it&apos;s awesome.
          </p>
          <Link
            href="/projects/project-1"
            className="text-white hover:underline"
          >
            View Project
          </Link>
        </div> */}

        {/* Project 2 */}
        {/* <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 dark:from-teal-700 dark:via-blue-700 dark:to-indigo-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Project 2
          </h3>
          <p className="text-gray-100 mb-4">
            Another project with a short description. Highlight the main features and technology stack.
          </p>
          <Link
            href="/projects/project-2"
            className="text-white hover:underline"
          >
            View Project
          </Link>
        </div> */}

        {/* Coming Soon - Project 3 */}
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
            Project 1 - Coming Soon
          </h3>
          <p className="text-gray-700 dark:text-gray-100 mb-4 text-center">
            Stay tuned for more details on this upcoming project!
          </p>
          <div className="text-gray-500 dark:text-gray-400 cursor-not-allowed">
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link
          href="/projects"
          className="text-gradient "
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
}
