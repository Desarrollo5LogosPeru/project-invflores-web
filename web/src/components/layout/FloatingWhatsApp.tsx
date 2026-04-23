"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useWhatsapp } from "@/hooks/shared/useWhatsapp";

export const FloatingWhatsApp = () => {
  const { url, handleClick } = useWhatsapp();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip siempre visible */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2">
        <div className="bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-lg whitespace-nowrap shadow-lg animate-pulse">
          💬 ¡Escríbenos ya!
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gray-900"></div>
        </div>
      </div>

      {/* Resto del código igual */}
      <a
        href={url}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50"></div>
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <IconBrandWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white" stroke={1.5} />
          </div>
        </div>
      </a>
    </div>
  );
};
