'use client';

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, CheckCircle2, GraduationCap, Mic2 } from 'lucide-react';

export interface SpeakerProps {
  name: string;
  roles: string;
  bio: string;
  imageSrc: string;
  speakingOn?: string;
  background?: string[];
  expertise?: string[];
}

export default function SpeakerCard({ speaker }: { speaker: SpeakerProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, scale: 1, y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { 
      opacity: 0, scale: 0.95, y: 20,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <div 
        className="relative w-full max-w-[320px] h-[450px] rounded-[2rem] border border-blue-100 bg-white overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
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
          animate={isHovered ? "visible" : "hidden"}
          className="absolute inset-0 bg-gradient-to-t from-[#202561] via-[#202561]/80 to-transparent"
        />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          
          {/* Hover State: Text Content */}
          <div className="mb-4 text-left w-full overflow-hidden">
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
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
              
              {/* More Button inside Hover State */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
                className="mt-4"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-primary text-xs font-semibold hover:bg-blue-50 transition-colors">
                  More About
                  <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="text-[10px]">+</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
            <motion.div 
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 bg-[#202561]/60 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-primary"
              >
                <X size={20} />
              </button>

              {/* Left Column: Image & Basic Info */}
              <div className="w-full md:w-[35%] bg-blue-50/50 p-8 flex flex-col items-center justify-center text-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg mb-6">
                  <Image 
                    src={speaker.imageSrc} 
                    alt={speaker.name} 
                    fill 
                    className="object-cover object-bottom"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 line-tight">
                  {speaker.name}
                </h2>
                <div className="h-1 w-12 bg-primary/20 rounded-full mb-4" />
                <p className="text-sm font-medium text-gray-500 leading-relaxed px-4">
                  {speaker.roles}
                </p>
              </div>

              {/* Right Column: Detailed Content */}
              <div className="w-full md:w-[65%] p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {/* Bio */}
                  <section>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-6 italic">
                      "{speaker.bio}"
                    </p>
                  </section>

                  {/* Speaking On */}
                  {speaker.speakingOn && (
                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                      <div className="flex items-center gap-3 mb-3 text-primary">
                        <Mic2 size={24} />
                        <h4 className="font-bold text-lg uppercase tracking-tight">Speaking On</h4>
                      </div>
                      <p className="text-primary font-medium">
                        {speaker.speakingOn}
                      </p>
                    </section>
                  ) || (
                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                       <div className="flex items-center gap-3 mb-3 text-primary">
                        <Mic2 size={24} />
                        <h4 className="font-bold text-lg uppercase tracking-tight">Speaking On</h4>
                      </div>
                      <p className="text-primary font-medium">
                        The Oral-Systemic Connection
                      </p>
                    </section>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Clinical & Research Background */}
                    <section>
                      <div className="flex items-center gap-3 mb-4 text-primary">
                        <GraduationCap size={22} className="text-gray-400" />
                        <h4 className="font-bold text-base uppercase tracking-wider">Clinical Background</h4>
                      </div>
                      <ul className="space-y-3">
                        {speaker.background ? speaker.background.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-snug">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        )) : (
                          <li className="text-sm text-gray-400 italic">Information pending...</li>
                        )}
                      </ul>
                    </section>

                    {/* Areas of Expertise */}
                    <section>
                      <div className="flex items-center gap-3 mb-4 text-primary">
                        <CheckCircle2 size={20} className="text-gray-400" />
                        <h4 className="font-bold text-base uppercase tracking-wider">Areas of Expertise</h4>
                      </div>
                      <ul className="space-y-3">
                        {speaker.expertise ? speaker.expertise.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-snug">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        )) : (
                          <li className="text-sm text-gray-400 italic">Information pending...</li>
                        )}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}