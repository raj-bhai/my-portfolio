export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* First Section with Gradient Background */}
      <section className="flex-grow text-center py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Who Am I?</h1>
          <p className="text-lg mb-6">
            Hello! I&apos;m Rajkiran Kalwar, a dedicated software developer with a knack for crafting innovative solutions to challenging problems. My journey in the tech world has been fueled by a deep curiosity and a passion for understanding how things work, leading me to where I am today.
          </p>
          <p className="text-lg mb-6">
            My expertise lies in full-stack development, where I seamlessly blend creativity with technical skills to create applications that not only work efficiently but also offer an engaging user experience. Whether it&apos;s designing intuitive front-ends, building robust back-ends, or developing cutting-edge mobile apps for iOS and Android, I thrive on bringing ideas to life.
          </p>
          <p className="text-lg mb-8">
            Outside of coding, I am constantly exploring new technologies, staying updated with the latest trends in the tech industry, and working on personal projects that challenge my skills. I believe in the power of continuous learning and am always eager to embrace new opportunities that contribute to my growth as a developer.
          </p>
        </div>
      </section>

      {/* Second Section with Light/Dark Theme Support */}
      <section className="flex-grow text-center py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">My Philosophy</h2>
          <p className="text-lg mb-6">
            I believe that exceptional software is built on a foundation of collaboration, creativity, and a deep understanding of the user&apos;s needs. My approach to development is comprehensive; I consider every stage of the software lifecycle, from initial brainstorming to final deployment, ensuring that each step is executed with precision.
          </p>
          <p className="text-lg mb-6">
            My experience extends beyond just coding. I bring to the table a strong understanding of mobile app development for both iOS and Android platforms. I ensure that the apps I create are not only visually stunning but also optimized for performance, providing users with a smooth and satisfying experience.
          </p>
          <p className="text-lg mb-8">
            I am committed to writing clean, maintainable code that addresses current challenges while being adaptable for future needs. My goal is to develop software that not only meets today&apos;s demands but also anticipates the needs of tomorrow.
          </p>
          <p className="text-lg mb-8">
            Let&apos;s collaborate to turn your vision into a reality. Whether you&apos;re seeking a developer to build your next project or just want to connect and share ideas, I&apos;m always open to new conversations.
          </p>
        </div>
      </section>
    </div>
  );
}
