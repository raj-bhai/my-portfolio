
import "./globals.css"
import Header from './components/Header';
import Head from "next/head";

export const metadata = {
  title: "Rajkiran Kalwar - Full-Stack Developer | iamrajklwr",
  description: "Rajkiran Kalwar - Full-Stack Developer skilled in React.js, Node.js, and mobile app development. Follow me on Instagram @iamrajklwr for tech insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Rajkiran Kalwar, iamrajklwr, Full-Stack Developer, React.js, Node.js, iOS Developer, Android Developer, React-Native, React-Native Developer" />
        <meta name="author" content="Rajkiran Kalwar" />
        <link rel="canonical" href="https://www.iamrajklwr.com" />
        <title>{metadata.title}</title>
      </Head>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-4 text-white text-center mt-4 shadow-md">
        &copy; {new Date().getFullYear()} Rajkiran Kalwar. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
