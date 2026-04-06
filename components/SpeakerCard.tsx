'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface SpeakerProps {
  name: string;
  slug: string;
  roles: string;
  bio: string;
  imageSrc: string;
  speakingOn?: string;
  background?: string[];
  expertise?: string[];
}

export default function SpeakerCard({ speaker }: { speaker: SpeakerProps }) {
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative w-full max-w-[320px] h-[450px] rounded-[2rem] border border-blue-100 bg-white overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speaker Cutout Image */}
      <div className="absolute inset-0 pt-10 px-4">
        <Image
          src={speaker.imageSrc}
          alt={speaker.name}
          fill
          className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Hover State: Background Gradient Overlay */}
      <motion.div
        variants={gradientVariants}
        initial="hidden"
        animate={isHovered ? 'visible' : 'hidden'}
        className="absolute inset-0 bg-gradient-to-t from-[#202561] via-[#202561]/80 to-transparent"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">

        {/* Hover State: Text Content */}
        <div className="mb-4 text-left w-full overflow-hidden">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
          >
            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
              {speaker.name}
            </h3>
            <p className="text-[11px] uppercase tracking-wider font-medium text-white/80 mb-3 leading-tight">
              {speaker.roles}
            </p>
            <p className="text-[12px] font-light text-white/90 leading-relaxed line-clamp-4">
              {speaker.bio}
            </p>

            {/* More About Button → navigates to speaker page */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <Link
                href={`/speakers/${speaker.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-primary text-xs font-semibold hover:bg-blue-50 transition-colors"
              >
                More About
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="text-[10px]">+</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}