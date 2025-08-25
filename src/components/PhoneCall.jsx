import { Phone } from "lucide-react";


const PhoneCall = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
      <a
        href="tel:+918448253664"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-green-500 text-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-green-600 hover:shadow-[0_0_15px_5px_rgba(72,255,22,1)]"
        aria-label="Chat with us on WhatsApp"
      >
        <Phone className="text-white w-8 h-8" />
      </a>
    </div>
  );
};

export default PhoneCall;
