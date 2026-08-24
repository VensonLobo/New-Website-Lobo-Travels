import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919312640072?text=Hello%20Lobo%20Travels,%20I%20would%20like%20to%20plan%20a%20custom%20itinerary."
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        title="Chat on WhatsApp with Lobo Travels Help Desk"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold tracking-wide">
          WhatsApp Help Desk
        </span>
      </a>
    </div>
  );
};
