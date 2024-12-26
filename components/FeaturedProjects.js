import Link from "next/link";
import { FaReact, FaAndroid, FaNodeJs, FaJs, FaAws } from "react-icons/fa"; // React, Android, Node.js
import {
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"; // Redux, Next.js, Firebase, Tailwind CSS
import IPhoneContainer from "./IPhoneContainer";
import DesktopContainer from "./DesktopContainer";

export default function FeaturedProjects() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Featured Projects
      </h2>

      {/* Use flex and justify-center to align items horizontally */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* iPhone Container */}


        <IPhoneContainer className="pb-12">
  {/* Project Name */}
  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center mt-3">
    Beyobo Mobile App (React-Native)
  </h3>

  {/* Technology Icons inside White Circles with Proper Multiline Alignment */}
  <div className="flex flex-wrap justify-center gap-4 mb-4 mt-4">
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <FaReact className="text-[#61DAFB] text-3xl sm:text-4xl" title="React Native" />
    </div>
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <SiRedux className="text-[#764ABC] text-3xl sm:text-4xl" title="Redux" />
    </div>
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <FaAndroid className="text-[#3DDC84] text-3xl sm:text-4xl" title="Android Studio" />
    </div>
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <SiTypescript className="text-[#3178C6] text-3xl sm:text-4xl" title="TypeScript" />
    </div>
  </div>

  {/* View on Play Store Button */}
  <div className="flex justify-center mt-auto">
    <a
      href="https://play.google.com/store/apps/details?id=in.zaadu.twa&hl=en"
      className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:bg-blue-200 transition duration-200 ease-in-out transform hover:scale-105"
    >
      View on Play Store
    </a>
  </div>
</IPhoneContainer>






        {/* Desktop Container */}
 

        <DesktopContainer>
  {/* Project Name */}
  <h3 className=" text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
    Beyobo - B2B E-Commerce Marketplace (NextJs)
  </h3>

  {/* Technology Icons inside White Circles with Responsive Sizes */}
  <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-8">
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <SiNextdotjs className="text-black text-3xl sm:text-4xl" title="Next.js" />
    </div>
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <SiRedux className="text-[#764ABC] text-3xl sm:text-4xl" title="Redux" />
    </div>
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <FaJs className="text-[#F7DF1E] text-3xl sm:text-4xl" title="JavaScript" />
    </div>
    <div className="bg-white p-2 sm:p-3 rounded-full">
      <FaAws className="text-[#FF9900] text-3xl sm:text-4xl" title="AWS" />
    </div>
  </div>

  {/* View Web App Button */}
  <div className="flex justify-center">
    <Link href="https://retailer.beyobo.com/"
      className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:bg-blue-200 transition duration-200 ease-in-out transform hover:scale-105">
        View Web App
    </Link>
  </div>
</DesktopContainer>




      </div>

      {/* See All Projects Link */}
      <div className="text-center mt-8">
        <Link href="/projects" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:bg-blue-200 transition duration-200 ease-in-out transform hover:scale-105">
          See All Projects
        </Link>
      </div>
    </section>
  );
}
