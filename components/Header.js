"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return true;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Use Next.js hook to get the current path.

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-4 text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo and branding */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/profile-icon.png"
              alt="Rajkiran Kalwar"
              width={40}
              height={40}
              priority
              className="cursor-pointer transform transition-transform hover:scale-110"
            />
          </Link>
          <span className="text-xl font-bold tracking-wide">Rajkiran Kalwar</span>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-4 text-sm sm:text-lg">
          <Link
            href="/"
            className={`relative font-medium transition-all ${
              pathname === "/"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 dark:bg-yellow-400 transform scale-x-100 transition-transform origin-left"></span>
            )}
          </Link>
          <Link
            href="/about"
            className={`relative font-medium transition-all ${
              pathname === "/about"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 dark:bg-yellow-400 transform scale-x-100 transition-transform origin-left"></span>
            )}
          </Link>
          <Link
            href="/projects"
            className={`relative font-medium transition-all ${
              pathname === "/projects"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
          >
            Projects
            {pathname === "/projects" && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 dark:bg-yellow-400 transform scale-x-100 transition-transform origin-left"></span>
            )}
          </Link>
          <Link
            href="/contact"
            className={`relative font-medium transition-all ${
              pathname === "/contact"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
          >
            Contact
            {pathname === "/contact" && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-300 dark:bg-yellow-400 transform scale-x-100 transition-transform origin-left"></span>
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="ml-2 bg-white dark:bg-gray-800 p-2 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-4 text-white shadow-md">
          <Link
            href="/"
            className={`block py-2 font-medium transition-all ${
              pathname === "/"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-2 font-medium transition-all ${
              pathname === "/about"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`block py-2 font-medium transition-all ${
              pathname === "/projects"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`block py-2 font-medium transition-all ${
              pathname === "/contact"
                ? "text-yellow-300 dark:text-yellow-400"
                : "text-white dark:text-gray-300"
            } hover:text-yellow-300 dark:hover:text-yellow-400`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
