'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
// Assuming the CTAButton component is in the same directory
import CTAButton from './CTAButton';

export default function AboutSec() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center text-center">
      
      {/* Header Section */}
      <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-3">
        About the Conference
      </h2>
      <p className="text-base md:text-lg text-gray-600 font-light mb-8">
        The mouth is not separate from the body.
      </p>

      {/* CTA Button */}
      <div className="mb-14">
        <CTAButton 
          btnText="Reserve Your Seat" 
          variant="solid" 
          onClick={() => window.location.href = 'https://www.trybooking.com/DIOAS'}
        />
      </div>

      {/* First Text Block */}
      <div className="max-w-4xl flex flex-col gap-6 text-gray-700 font-light leading-relaxed mb-16 md:text-lg">
        <p>
          What happens in the oral environment may influence inflammation, chronic symptoms, and overall 
          health. Yet most people are never shown how these connections work.
        </p>
        <p>
          This conference brings together dentistry, pathology, microbiology, and integrative health to explore 
          those connections in a clear and practical way. You will gain insight into how hidden infections, toxicity, 
          and microbial imbalance may be contributing to ongoing health challenges.
        </p>
      </div>

      {/* Video Thumbnail Section */}
      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12 border-4 border-secondary-light/60 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
        
        {/* Placeholder for the video thumbnail image */}
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
          alt="Dental professional preparing equipment"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Translucent white hexagon/circle behind the play icon */}
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white/70 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            {/* Cyan Play Icon */}
            <Play 
              className="w-10 h-10 md:w-14 md:h-14 text-secondary-light ml-2" 
              fill="currentColor" 
              strokeWidth={0} 
            />
          </div>
        </div>
      </div>

      {/* Concluding Text Block */}
      <div className="max-w-3xl text-gray-700 font-light leading-relaxed md:text-lg">
        <p className="font-semibold text-primary mb-2">
          This is not just theory.
        </p>
        <p>
          It is about understanding what to look for, what to question, and how to approach health differently. 
          Grounded in a One Health approach, this two-day conference bridges the gap between oral health 
          and whole-body wellbeing.
        </p>
      </div>

    </section>
  );
}