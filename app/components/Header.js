'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import Link from 'next/link'; // Import the Link component from Next.js

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-4 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/" className="hover:underline">My Portfolio</Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <button
            onClick={toggleDarkMode}
            className="bg-white dark:bg-gray-800 p-2 rounded-full flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}