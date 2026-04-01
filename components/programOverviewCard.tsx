'use client';

import React, { MouseEvent, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Calendar } from 'lucide-react';

export interface ProgramOverviewProps {
  dayLabel: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
  bullets: string[];
}

export default function ProgramOverviewCard({ data }: { data: ProgramOverviewProps }) {
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion values for tracking mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Adding a spring effect so the glow "lags" slightly behind the cursor for that liquid feel
  const springConfig = { stiffness: 300, damping: 30 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  // Handle mouse movement to update coordinates relative to the card
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generate the dynamic radial gradient background using the spring coordinates
  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      350px circle at ${glowX}px ${glowY}px,
      rgba(0, 180, 216, 0.15),
      transparent 80%
    )
  `;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-[#1a1b4b] border border-blue-900/50 shadow-xl transition-transform duration-500 hover:-translate-y-1"
    >
      {/* The Liquid Glow Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: backgroundStyle }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Content Container (z-10 to stay above the glow) */}
      <div className="relative z-10 flex flex-col p-8 md:p-10">
        
        {/* Header: Day Badge */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a1b4b]">
            <Calendar className="h-6 w-6" strokeWidth={2} />
          </div>
          <span className="text-lg font-light text-white">{data.dayLabel}</span>
        </div>

        {/* Titles */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-3xl font-medium tracking-tight text-white">
            {data.title}
          </h2>
          <p className="text-sm font-light text-blue-200">
            {data.subtitle}
          </p>
        </div>

        {/* Image Container */}
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-800 shadow-md">
          {/* Replace this placeholder src with your actual image path */}
          <Image
            src={data.imageSrc || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-blue-50">
          {data.description}
        </p>

        {/* Bullet Points */}
        <ul className="flex flex-col gap-3">
          {data.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              <span className="text-sm font-light leading-relaxed text-blue-100">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}