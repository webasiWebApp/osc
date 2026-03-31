'use client';

import React from 'react';
import Image from 'next/image';

// We define an interface so the component knows to expect a 'text' string from the parent
export interface WhyTMProps {
  text: string;
  iconUrl?: string;
}

export default function WhyTM({ text, iconUrl = "/teeth-icon.png" }: WhyTMProps) {
  return (
    <div className="group relative flex items-center p-2.5 md:p-3 rounded-full bg-primary cursor-pointer overflow-hidden shadow-sm transition-shadow hover:shadow-md w-full">
      
      {/* The Expanding Background (The Magic Trick) 
          Starts as a circle (w-12), expands to almost full width on group-hover.
      */}
      <div className="absolute left-2.5 top-2.5 bottom-2.5 w-12 md:w-14 bg-[#f4f6f9] rounded-full transition-all duration-500 ease-out group-hover:w-[calc(100%-1.25rem)] z-0" />
      
      {/* Icon Container */}
      <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
        <div className="relative w-7 h-7 md:w-8 md:h-8">
          
          {/* Using SVG fallback until you swap it out for the <Image /> tag with your custom teeth icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="#03045E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M10 21c-1 0-2-1.5-2-3v-4c0-1.5-1-3-3-3h0c-1.5 0-3-1.5-3-3V5c0-1.5 1.5-3 3-3h14c1.5 0 3 1.5 3 3v3c0 1.5-1.5 3-3 3h0c-2 0-3 1.5-3 3v4c0 1.5-1 3-2 3s-2-1.5-2-3v-2c0-1-1-2-2-2s-2 1-2 2v2c0 1.5-1 3-2 3z"/>
          </svg>
          
        </div>
      </div>

      {/* Text Content */}
      <p className="relative z-10 ml-4 md:ml-6 pr-6 text-sm md:text-base font-medium text-white transition-colors duration-500 group-hover:text-primary">
        {text}
      </p>
      
    </div>
  );
}