'use client';

import React from 'react';
import Image from 'next/image';

export interface ConferenceStepProps {
  stepNumber: string;
  title: string;
  description: string;
  imageSrc?: string;
}

export default function Conference({ 
  stepNumber = "01", 
  title = "Conference Focus", 
  description = "Two Days. Two Perspectives. One Complete Picture of Your Health. This is where symptoms stop being random, and start making sense.",
  imageSrc = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" // Placeholder
}: ConferenceStepProps) {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-6 md:py-8 overflow-hidden">
      
      {/* The continuous timeline dotted line. 
        Positioned absolutely to run vertically down the right side of the container. 
      */}
      

      <div className="group relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-6 cursor-pointer">
        
        {/* Left Side: Numbering and Text Content */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-8 w-full md:w-2/3">
          
          {/* Icon and Number Grouped */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Timeline Node Circle */}
            <div className="w-7 h-7 flex-shrink-0 rounded-full border border-blue-400 bg-white" />
            
            {/* Oversized Background Number */}
            <div className="text-[5rem] md:text-[8rem] font-bold text-[#0077B6] opacity-[0.1] group-hover:opacity-100 transition-opacity duration-500 leading-none select-none tracking-tighter">
              {stepNumber}
            </div>
          </div>
          
          {/* Text Block */}
          <div className="flex flex-col items-center md:items-start gap-2 max-w-lg mt-2 md:mt-0">
            <h3 className="text-2xl font-normal text-primary">
              {title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-light">
              {description}
            </p>
          </div>

        </div>

        {/* Right Side: Image Container */}
        <div className="relative w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full max-w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            {/* Replace src with your actual image path */}
            <Image 
              src={imageSrc} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}