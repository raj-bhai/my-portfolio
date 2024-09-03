import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Want to Take Your Business Online?
        </h2>
        <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">
          Are you looking for a mobile application, web application, or any kind of software solution? 
          My team and I are here to deliver high-quality products at a competitive price.
        </p>
        <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">
          We specialize in transforming your ideas into reality with solutions tailored to meet your specific needs.
          Let&apos;s build something amazing together.
        </p>
        <Link href="/contact" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Contact Now
          </button>
        </Link>
      </div>
    </section>
  );
}
