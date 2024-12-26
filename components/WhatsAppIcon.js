import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/917086501892?text=Hello%20Rajkiran,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
      className="fixed bottom-4 z-[1000] right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppIcon;
