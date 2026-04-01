'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BlurFadeInProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function BlurFadeIn({ children, id, className = "", delay = 0 }: BlurFadeInProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
