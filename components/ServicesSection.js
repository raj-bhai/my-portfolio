'use client'; // Ensure client-side behavior for animations

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const ref = useRef(null); // Ref to track the section
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Transform values based on scroll position
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }} // Apply scroll-based transforms
      className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
    >
      <motion.div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Want to Take Your Business Online?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg mb-8 text-gray-800 dark:text-gray-300"
        >
          Are you looking for a mobile application, web application, or any kind of software solution? 
          My team and I are here to deliver high-quality products at a competitive price.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg mb-8 text-gray-800 dark:text-gray-300"
        >
          We specialize in transforming your ideas into reality with solutions tailored to meet your specific needs.
          Let&apos;s build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/contact" passHref>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Contact Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
