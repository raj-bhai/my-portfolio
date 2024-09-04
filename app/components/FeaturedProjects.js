import Link from 'next/link';
import { FaReact, FaAndroid, FaNodeJs } from 'react-icons/fa'; // React, Android, Node.js
import { SiRedux, SiNextdotjs, SiFirebase, SiTailwindcss } from 'react-icons/si'; // Redux, Next.js, Firebase, Tailwind CSS

export default function FeaturedProjects() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 - Beyobo Mobile App (React Native) */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Beyobo Mobile App - B2B E-commerce Marketplace
          </h3>
          <p className="text-gray-100 mb-4">
            Beyobo is a B2B e-commerce marketplace connecting retailers with global suppliers to buy trending products. I worked as a frontend developer for the mobile app using React Native, collaborating with Ensologic Commerce and the IT team to create a seamless mobile experience.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <FaReact className="text-white text-2xl" title="React Native" />
            <SiRedux className="text-white text-2xl" title="Redux" />
            <FaAndroid className="text-white text-2xl" title="Android Studio" />
          </div>
          <Link
            href="https://play.google.com/store/search?q=beyobo&c=apps&hl=en"
            className="text-white hover:underline"
          >
            View on Play Store
          </Link>
        </div>

        {/* Project 2 - Beyobo Web App (Next.js) */}
        <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 dark:from-teal-700 dark:via-blue-700 dark:to-indigo-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Beyobo Web App - B2B E-commerce Marketplace
          </h3>
          <p className="text-gray-100 mb-4">
            The Beyobo Web App allows retailers to purchase products from global suppliers. I developed the frontend of this web platform using Next.js, ensuring a fast and responsive user experience for global buyers.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <SiNextdotjs className="text-white text-2xl" title="Next.js" />
            <FaNodeJs className="text-white text-2xl" title="Node.js" />
            <SiRedux className="text-white text-2xl" title="Redux" />
          </div>
          <Link
            href="https://retailer.beyobo.com/"
            className="text-white hover:underline"
          >
            View Web App
          </Link>
        </div>

        {/* Project 3 - FitLife Tracker */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-purple-700 dark:via-pink-700 dark:to-red-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            FitLife Tracker
          </h3>
          <p className="text-gray-100 mb-4">
            A fitness and nutrition tracking application. Users can log workouts, track nutrition, and monitor their progress over time. Built using Next.js, Tailwind CSS, and Firebase for real-time data updates.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <SiNextdotjs className="text-white text-2xl" title="Next.js" />
            <SiTailwindcss className="text-white text-2xl" title="Tailwind CSS" />
            <SiFirebase className="text-white text-2xl" title="Firebase" />
          </div>
          <Link
            href="/projects/fitlife-tracker"
            className="text-white hover:underline"
          >
            View Project
          </Link>
        </div>

        {/* Coming Soon - Project 4 */}
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
            Project 4 - Coming Soon
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
