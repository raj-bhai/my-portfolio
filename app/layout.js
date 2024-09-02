
import "./globals.css"
import Header from './components/Header';

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my Next.js skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
