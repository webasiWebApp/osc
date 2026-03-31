'use client';

import React from 'react';
import Image from 'next/image';

// Reusable inline pill image to keep the paragraph JSX clean
const InlineImage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGFsfGVufDB8fDB8fHww";
  
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
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex items-center justify-center bg-transparent">
      <div className="text-2xl md:text-4xl lg:text-[2.75rem] font-medium text-center text-primary leading-[1.8] md:leading-[1.9] tracking-tight">
        What happens in the <InlineImage /> does not stay 
        in the <InlineImage />. Oral infections, hidden 
        bacteria, and chronic inflammation can influence the 
        entire <InlineImage />, from fatigue and immune 
        dysfunction to long-term disease. Yet most <InlineImage /> are 
        never shown how these connections work. This conference 
        brings those missing links into focus.
      </div>
    </section>
  );
}