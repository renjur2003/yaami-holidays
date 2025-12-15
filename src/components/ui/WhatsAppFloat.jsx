import React from 'react';
import { Phone } from 'lucide-react'; // Using Phone icon as placeholder for WhatsApp if specific logo not available in lucide

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/918547964084" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppFloat;
