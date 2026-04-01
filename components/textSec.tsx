'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reusable inline pill image to keep the paragraph JSX clean
const InlineImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <span className="inline-block align-middle mx-2 w-20 h-9 md:w-28 md:h-12 lg:w-32 lg:h-14 relative overflow-hidden rounded-[2rem] shadow-sm">
      <Image 
        src={imageUrl} 
        alt="Oral-Systemic Connection" 
        fill 
        className="object-cover object-center"
        sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
      />
    </span>
  );
};

export default function TextSec() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)", 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const
      } 
    },
  };

  const contentSegments = [
    "What happens in the ",
    <InlineImage key="1" imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8MHwwfHx8Mg%3D%3D" />,
    " does not stay in the ",
    <InlineImage key="2" imageUrl="https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpbmljfGVufDB8MHwwfHx8Mg%3D%3D" />,
    ". Oral infections, hidden bacteria, and chronic inflammation can influence the entire ",
    <InlineImage key="3" imageUrl="https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsaW5pY3xlbnwwfDB8MHx8fDI%3D" />,
    ", from fatigue and immune dysfunction to long-term disease. Yet most ",
    <InlineImage key="4" imageUrl="https://images.unsplash.com/photo-1740410643780-883b33ee1b86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNsaW5pY3xlbnwwfDB8MHx8fDI%3D" />,
    " are never shown how these connections work. This conference brings those missing links into focus."
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex items-center justify-center bg-transparent overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="text-2xl md:text-4xl lg:text-[2.75rem] font-light text-center text-primary leading-[1.8] md:leading-[1.9] tracking-tight"
      >
        {contentSegments.map((segment, index) => {
          if (typeof segment === 'string') {
            const words = segment.split(' ');
            return words.map((word, wIndex) => {
              if (!word) return null; // Handle empty strings from extra spaces
              return (
                <React.Fragment key={`${index}-${wIndex}`}>
                  <motion.span variants={itemVariants} className="inline-block">
                    {word}
                  </motion.span>
                  {" "}
                </React.Fragment>
              );
            });
          } else {
            return (
              <motion.span key={`comp-${index}`} variants={itemVariants} className="inline-block align-middle">
                {segment}
              </motion.span>
            );
          }
        })}
      </motion.div>
    </section>
  );
}