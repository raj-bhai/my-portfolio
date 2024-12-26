import { FaReact, FaAws, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaAngular, FaJava, FaVuejs, FaPython, FaDocker, FaGitAlt, FaSass } from "react-icons/fa"; 
import { SiNextdotjs, SiGraphql, SiPostgresql, SiFirebase, SiMongodb, SiSocketdotio, SiAgora, SiRazorpay, SiMysql,SiTailwindcss } from "react-icons/si"; 
import { SiRedux } from "react-icons/si";

// Create a mapping for technology icons with colors
const TechnologyIcons = {
  React: { icon: FaReact, color: "#61DAFB" }, // React color
  "Node.js": { icon: FaNodeJs, color: "#68A063" }, // Node.js color
  MongoDB: { icon: SiMongodb, color: "#4DB33D" }, // MongoDB color
  "Next.js": { icon: SiNextdotjs, color: "#000000" }, // Next.js color
  GraphQL: { icon: SiGraphql, color: "#E10098" }, // GraphQL color
  PostgreSQL: { icon: SiPostgresql, color: "#336791" }, // PostgreSQL color
  "React Native": { icon: FaReact, color: "#61DAFB" }, // React Native using React icon color
  Firebase: { icon: SiFirebase, color: "#FFCA28" }, // Firebase color
  Angular: { icon: FaAngular, color: "#DD0031" }, // Angular color
  Java: { icon: FaJava, color: "#F8981D" }, // Java color
  Vue: { icon: FaVuejs, color: "#42b883" }, // Vue color
  Python: { icon: FaPython, color: "#306998" }, // Python color
  Docker: { icon: FaDocker, color: "#2496ED" }, // Docker color
  GitHub: { icon: FaGithub, color: "#181717" }, // GitHub color
  Git: { icon: FaGitAlt, color: "#F1502F" }, // Git color
  CSS: { icon: FaCss3Alt, color: "#1572B6" }, // CSS color
  HTML: { icon: FaHtml5, color: "#E44D26" }, // HTML color
  Sass: { icon: FaSass, color: "#CD6799" }, // Sass color
  Redux: { icon: SiRedux, color: "#764ABC" }, // Redux color
  AWS: { icon: FaAws, color: "#FF9900" }, // AWS color
  DynamoDB: { icon: FaAws, color: "#4053B1" }, // DynamoDB color (AWS purple-blue)
  Agora: { icon: SiAgora, color: "#0078D7" }, // Agora color (blue shade)
  Socket: { icon: SiSocketdotio, color: "#010101" }, // Socket.io color (black)
  Razorpay: { icon: SiRazorpay, color: "#3C8EFC" }, // Razorpay color (blue)
  MySQL: { icon: SiMysql, color: "#00758F" }, // MySQL color
  TailwindCSS: { icon: SiTailwindcss, color: "#38BDF8" }, // TailwindCSS color (blue)
};

export default TechnologyIcons;
