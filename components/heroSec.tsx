'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Play } from 'lucide-react';
// Assuming the CTAButton component is in the same directory
import CTAButton from './CTAButton';
import VideoModal from './VideoModal';

export default function HeroSec() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative w-full  mx-auto px-4 md:px-6 lg:px-16 pb-4 mt-10 md:mt-10 h-[85vh] min-h-[650px]">
      
      {/* Custom Keyframe for Zoom In-Out Loop Animation */}
      <style>{`
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-zoom-in-out {
          animation: zoomInOut 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* Fullscreen Video Modal Implementation */}
      <VideoModal
        isOpen={isVideoPlaying}
        onClose={() => setIsVideoPlaying(false)}
        videoSrc="/hero.mp4"
      />

      {/* Inner Rounded Container */}
      <div className="relative w-full h-full rounded-[25px] lg:rounded-[25px] overflow-hidden shadow- ">
        
        {/* Background Image */}
        <Image
          // Replace with your actual high-res clinic image
          src="/hero.png" 
          alt="Dentist treating a child patient"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay (Darkens the image so the white text is readable) */}
        <div className="absolute inset-0 bg-black/20  pointer-events-none" />

        {/* Main Centered Content */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light text-white leading-[1.1] tracking-tight mb-8 ">
            Australian Oral–Systemic Infection <br className="hidden md:block" />
            & One Health Clinical Summit
          </h1>

          {/* We use the 'outline' variant here because in your previous CTAButton code, 
              'outline' generates a white button with a dark blue arrow—matching this mockup exactly! */}
          <CTAButton
            btnText="Reserve Your Seat Now"
            variant="outline"
            onClick={() => window.location.href = 'https://www.trybooking.com/DIOAS'}
          />
        </div>

        {/* Bottom Left Content (Date, Location, and Paragraph) */}
        {/* Hidden on very small mobile screens to prevent clutter, visible on sm and up */}
        <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-xs md:max-w-md flex flex-col gap-6 z-10 hidden sm:flex">
          
          {/* Location & Date */}
          <div className="flex items-start gap-3">
            <MapPin className="text-white w-6 h-6 mt-1 flex-shrink-0 " />
            <div className="text-white ">
              <p className="text-lg font-medium">17 & 18 October 2026</p>
              <p className="text-base font-light text-white/90">Mantra on Russell, Melbourne</p>
            </div>
          </div>

          {/* Paragraph text */}
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed ">
            This conference brings together dentistry, pathology, microbiology, and integrative health to explore those connections in a clear and practical way.
          </p>
        </div>

        {/* Bottom Center Video Thumbnail */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 z-20">
          
          <button 
            className="group relative w-40 h-24 md:w-56 md:h-32 rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-2xl"
            aria-label="Play promotional video"
            onClick={() => setIsVideoPlaying(true)}
          >
            <Image
              // Replace with your actual video thumbnail image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" 
              alt="Video thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Subtle blue tint over the thumbnail */}
            <div className="absolute inset-0 bg-primary/20 transition-colors duration-300 group-hover:bg-transparent" />

            {/* Play Icon Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Pulse ripple effect */}
              <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/40 animate-ping"></div>
              {/* Zoom In/Out animated play button */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-sm animate-zoom-in-out group-hover:bg-white transition-colors duration-300">
                <Play className="w-4 h-4 md:w-5 md:h-5 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
          
        </div>

      </div>
    </section>
  );
}