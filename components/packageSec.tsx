'use client';

import React, { MouseEvent, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
// Assuming CTAButton is in the same directory or adjust the import path
import CTAButton from './CTAButton'; 

// --- Reusable Glow Card Wrapper ---
// Handles the liquid hover physics and gradient backgrounds independently per card
interface GlowCardProps {
  children: React.ReactNode;
  hasTopGradient?: boolean;
  badge?: React.ReactNode;
}

const GlowCard = ({ children, hasTopGradient = false, badge }: GlowCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      400px circle at ${glowX}px ${glowY}px,
      rgba(0, 180, 216, 0.15),
      transparent 80%
    )
  `;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col w-full h-full overflow-hidden rounded-[1.5rem] bg-surface border border-blue-900/40 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/30"
    >
      {/* The Liquid Glow Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: backgroundStyle }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Optional Top Gradient (For 2nd and 3rd Cards) */}
      {hasTopGradient && (
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-secondary/30 to-transparent z-0 pointer-events-none" />
      )}

      {/* Optional Badge */}
      {badge && (
        <div className="relative z-10 text-center pt-8 pb-2 text-xs font-semibold tracking-widest text-white/90 uppercase">
          {badge}
        </div>
      )}

      {/* Content Container */}
      <div className={`relative z-10 flex flex-col h-full p-8 ${!badge ? 'pt-12' : ''}`}>
        {children}
      </div>
    </div>
  );
};


// --- Reusable Bullet Item ---
const IncludeItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    {/* Small white circle with icon as seen in the design */}
    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white">
      {/* Tiny SVG representing a tooth/check */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5 text-surface">
        <path d="M12 2C8 2 6 5 6 8c0 2.5 1 5 2 7 1 2 2 4 2 7h4c0-3 1-5 2-7 1-2 2-4.5 2-7 0-3-2-6-6-6z" />
      </svg>
    </div>
    <span className="text-sm font-light text-blue-100">{text}</span>
  </li>
);


// --- Main Section Component ---
export default function PackageSec() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      
      {/* Responsive Grid: 1 column mobile, 3 columns desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        
        {/* CARD 1: Single Day Pass */}
        <GlowCard>
          <h3 className="text-2xl font-light text-white text-center mb-10">Single Day Pass</h3>
          
          <div className="flex flex-col text-center mb-6">
            <span className="text-[2.75rem] font-bold text-white leading-none">$295</span>
            <span className="text-sm text-blue-200 mt-2">Day 1 — Public</span>
          </div>
          
          <ul className="flex flex-col gap-4 mb-8">
            <IncludeItem text="Ideal if you want a focused introduction" />
            <IncludeItem text="Oral health, pathology, and mercury awareness" />
          </ul>

          <div className="w-full h-px bg-blue-800/50 mb-8" />

          <div className="flex flex-col text-center mb-6">
            <span className="text-[2.75rem] font-bold text-white leading-none">$495</span>
            <span className="text-sm text-blue-200 mt-2">Day 2 — Practitioners</span>
          </div>

          <ul className="flex flex-col gap-4 mb-10">
            <IncludeItem text="Clinical insights, diagnostics, and integrative care" />
          </ul>

          <div className="mt-auto flex justify-center w-full">
            <CTAButton btnText="Learn More" variant="outline" />
          </div>
        </GlowCard>

        {/* CARD 2: 2-Day Conference Pass */}
        <GlowCard hasTopGradient badge="RECOMMENDED PACKAGE">
          <h3 className="text-[1.7rem] font-light text-white text-center mb-10">2-Day Conference Pass</h3>
          
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex flex-col text-center">
              <span className="text-[2.75rem] font-bold text-white leading-none">$295</span>
              <span className="text-sm text-blue-200 mt-2">(General)</span>
            </div>
            <div className="w-px h-16 bg-blue-400/30" />
            <div className="flex flex-col text-center">
              <span className="text-[2.75rem] font-bold text-white leading-none">$795</span>
              <span className="text-sm text-blue-200 mt-2">(Practitioner)</span>
            </div>
          </div>

          <div className="text-sm text-white font-medium mb-4">Includes:</div>
          <ul className="flex flex-col gap-4 mb-10">
            <IncludeItem text="Access to both days" />
            <IncludeItem text="All presentations" />
            <IncludeItem text="Full catering (morning tea, lunch, afternoon tea)" />
            <IncludeItem text="Tea & coffee throughout" />
            <IncludeItem text="Conference material" />
            <IncludeItem text="Goodie bag" />
          </ul>

          <div className="mt-auto flex justify-center w-full">
            <CTAButton btnText="Learn More" variant="outline" />
          </div>
        </GlowCard>

        {/* CARD 3: VIP Clinical Experience */}
        <GlowCard 
          hasTopGradient 
          badge={
            <>LIMITED TO <span className="text-red-500 font-bold ml-1">10</span></>
          }
        >
          <h3 className="text-[1.7rem] font-light text-white text-center mb-10">VIP Clinical Experience</h3>
          
          <div className="flex flex-col text-center mb-10">
            <span className="text-[2.75rem] font-bold text-white leading-none">$1,200</span>
            <span className="text-xs text-blue-200 mt-3 max-w-[200px] mx-auto leading-relaxed">
              For practitioners ready to go deeper
            </span>
          </div>

          <div className="text-sm text-white font-medium mb-4">Includes:</div>
          <ul className="flex flex-col gap-4 mb-10">
            <IncludeItem text="Full 2-day access" />
            <IncludeItem text="Front row seating" />
            <IncludeItem text="Private Q&A with speakers" />
            <IncludeItem text="Photo opportunity" />
            <IncludeItem text="Signed resources" />
            <IncludeItem text="All catering" />
          </ul>

          <div className="mt-auto flex justify-center w-full">
            <CTAButton btnText="Learn More" variant="outline" />
          </div>
        </GlowCard>

      </div>
    </section>
  );
}