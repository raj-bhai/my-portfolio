import React from 'react';
import Skill from './skill'; // Import the individual Skill component
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <Skill icon={FaJsSquare} name="JavaScript" color="text-yellow-500" />
        <Skill icon={FaReact} name="React.js" color="text-blue-500" />
        <Skill icon={SiNextdotjs} name="Next.js" color="text-black dark:text-white" />
        <Skill icon={FaNodeJs} name="Node.js" color="text-green-500" />
        <Skill icon={FaCss3Alt} name="CSS" color="text-blue-600" />
        <Skill icon={SiTailwindcss} name="Tailwind CSS" color="text-teal-500" />
        <Skill icon={FaGithub} name="Git & GitHub" color="text-gray-800 dark:text-white" />
        <Skill icon={SiMongodb} name="MongoDB" color="text-green-500" />
        <Skill icon={FaAws} name="DynamoDB" color="text-orange-500" />
        <Skill icon={SiMysql} name="MySQL" color="text-blue-500" />
      </div>
    </section>
  );
}
