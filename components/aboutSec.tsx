'use client';

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';
// Assuming the CTAButton component is in the same directory
import CTAButton from './CTAButton';

export default function AboutSec() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play error:", error);
      });
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center text-center">
      
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
      <div 
        className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12 border-4 border-secondary-light/60 group transition-transform duration-300 hover:scale-[1.02]"
      >
        <video
          ref={videoRef}
          src="/hero.mp4"
          className="w-full h-full object-cover"
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
        />

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 transition-colors duration-300 group-hover:bg-transparent z-10"
            onClick={handlePlayClick}
          >
            {/* Pulse ripple effect */}
            <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/40 animate-ping"></div>
            {/* Zoom In/Out animated play button */}
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] backdrop-blur-sm animate-zoom-in-out group-hover:bg-white transition-colors duration-300">
              <Play className="w-6 h-6 md:w-10 md:h-10 text-primary ml-1 md:ml-2" fill="currentColor" />
            </div>
          </div>
        )}
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