import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Rajkiran Kalwar - Full-Stack Developer | React.js, Next.js, Node.js, Mobile App Development",
  description:
    "Explore the portfolio of Rajkiran Kalwar, a Full-Stack Developer specializing in React.js, Node.js, and mobile app development for iOS & Android. Let's work together to bring your ideas to life!",
  url: "https://www.iamrajklwr.com",
  image: "https://www.iamrajklwr.com/images/profile-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Rajkiran Kalwar, Rajkiran Kalowar, iamrajklwr, Full-Stack Developer, React.js, Next.js, Node.js, iOS Developer, Android Developer, React-Native, React-Native Developer"
        />
        <meta name="author" content="Rajkiran Kalwar" />
        <link rel="canonical" href={metadata.url} />
        <title>{metadata.title}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:image" content={metadata.image} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (!theme || theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </Head>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Analytics/>
        <Header />
        <main className="container mx-auto pt-32 sm:pt-32 p-2 sm:p-4">{children}</main>
        <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-4 text-white text-center mt-4 shadow-md">
          &copy; {new Date().getFullYear()} Rajkiran Kalwar. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
