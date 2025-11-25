import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_WHATSAPP } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=Hi! I'm interested in booking a tour.`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-semibold hidden md:inline">Chat with us</span>
    </button>
  );
};

export default WhatsAppButton;