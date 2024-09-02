import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow text-center">
        <h1 className="text-4xl font-bold mb-4">Let&apos;s Create Something Amazing Together</h1>
        <p className="text-lg mb-8">
          Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col items-center space-y-4 max-w-xs mx-auto w-full">
          <a
            href="mailto:rajkiranjnv1@gmail.com"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition flex items-center justify-center space-x-2 w-full"
          >
            <FaEnvelope className="text-white" />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.instagram.com/iamrajklwr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-6 py-2 rounded-md shadow hover:bg-pink-600 transition flex items-center justify-center space-x-2 w-full"
          >
            <FaInstagram className="text-white" />
            <span>Follow on Instagram</span>
          </a>

          <a
            href="https://github.com/raj-bhai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md shadow hover:bg-gray-900 transition flex items-center justify-center space-x-2 w-full"
          >
            <FaGithub className="text-white" />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </section>
    </div>
  );
}
