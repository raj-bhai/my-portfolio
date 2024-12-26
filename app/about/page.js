import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Rajkiran Kalwar - Full-Stack Developer</title>
        <meta name="description" content="Learn more about Rajkiran Kalwar, a Full-Stack Developer with expertise in various technologies and a passion for building innovative solutions." />
        <meta name="keywords" content="About Rajkiran Kalwar, Full-Stack Developer, Skills, Experience" />
        <meta name="author" content="Rajkiran Kalwar" />
        <link rel="canonical" href="https://www.iamrajklwr.com/about" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* First Section with Gradient Background */}
        <section className="flex-grow text-center py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Who Am I?</h1>
            <p className="text-lg mb-6">
              Hello! I&apos;m Rajkiran Kalwar, a Full-Stack Developer with over
              3 years of experience in building robust web and mobile
              applications. My journey in the tech world has allowed me to work
              with multinational corporations, dynamic startups, and small
              businesses, helping them grow by taking their operations online.
            </p>
            <p className="text-lg mb-6">
              I specialize in full-stack development, where I combine creative
              design with efficient coding to deliver user-centric digital
              experiences. Whether it&apos;s building intuitive front-ends,
              designing scalable back-end systems, or developing mobile apps for
              iOS and Android, I thrive on turning ideas into impactful
              solutions.
            </p>
            <p className="text-lg mb-8">
              Outside of coding, I am passionate about continuous learning,
              staying ahead of the latest tech trends, and applying best
              practices in SEO to ensure that the products I create are not only
              functional but also discoverable by the right audience.
            </p>
          </div>
        </section>

        {/* Second Section with Light/Dark Theme Support */}
        <section className="flex-grow text-center py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">My Expertise</h2>
            <p className="text-lg mb-6">
              Over the years, I&apos;ve developed a deep understanding of both
              the technical and business aspects of software development. My
              expertise includes:
            </p>
            <ul className="list-disc list-inside text-left mx-auto mb-6 text-lg">
              <li>
                <strong>Web Development:</strong> Creating responsive, scalable
                web applications using technologies like Next.js, React.js, and
                Node.js.
              </li>
              <li>
                <strong>Mobile App Development:</strong> Developing
                cross-platform mobile applications with React Native for both
                iOS and Android.
              </li>
              <li>
                <strong>SEO Optimization:</strong> Implementing SEO best
                practices to ensure that digital products rank highly on search
                engines and attract organic traffic.
              </li>
              <li>
                <strong>Business Growth:</strong> Helping small businesses go
                digital by developing custom solutions that drive growth and
                improve operational efficiency.
              </li>
            </ul>
            <p className="text-lg mb-8">
              My goal is to deliver clean, maintainable code that solves current
              challenges while being adaptable to future needs. I believe in the
              power of collaboration and am committed to turning your vision
              into a reality through innovative, scalable software solutions.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
