'use client';

import React from 'react';
import Image from 'next/image';
import { HeartPulse } from 'lucide-react';

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
          
          <HeartPulse className="w-full h-full text-primary " strokeWidth={1.5} />
          
        </div>
      </div>

      {/* Text Content */}
      <p className="relative z-10 ml-4 md:ml-6 pr-6 text-sm md:text-base font-medium text-white transition-colors duration-500 group-hover:text-primary">
        {text}
      </p>
      
    </div>
  );
}