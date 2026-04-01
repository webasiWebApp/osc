'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import CTAButton from "@/components/CTAButton";

export interface SpeakerProps {
  name: string;
  roles: string;
  bio: string;
  imageSrc: string;
}

export default function SpeakerCard({ speaker }: { speaker: SpeakerProps }) {
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion variants for the staggered content reveal
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const gradientVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <div 
      className="relative w-full max-w-[320px] h-[450px] rounded-[2rem] border border-blue-100 bg-white overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speaker Cutout Image */}
      <div className="absolute inset-0 pt-10 px-4">
        <Image 
          src={speaker.imageSrc} 
          alt={speaker.name} 
          fill 
          className="object-cover object-bottom"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Hover State: Background Gradient Overlay */}
      <motion.div 
        variants={gradientVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        className="absolute inset-0 bg-gradient-to-t from-[#202561] via-[#6573A6]/90 to-transparent"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        
        {/* Hover State: Text Content */}
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          className="mb-4 text-left w-full"
        >
          <h3 className="text-3xl font-semibold text-primary mb-1 tracking-tight">
            {speaker.name}
          </h3>
          <p className="text-sm font-light text-white/90 mb-3">
            {speaker.roles}
          </p>
          <p className="text-[10px] font-light text-white leading-relaxed">
            {speaker.bio}
          </p>
        </motion.div>

        {/* Floating "More About" Button */}
        {/* It stays at the bottom right, but changes background slightly on hover to match the images */}
        {/* <div className=" flex justify-end w-full">
          <CTAButton 
            btnText="More About" 
            className="scale-90 origin-right transition-transform" 
          />
        </div> */}

      </div>
    </div>
  );
}