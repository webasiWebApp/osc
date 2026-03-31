'use client';

import React from 'react';
import WhyTM from './whyTM';

export default function WhyTMSec() {
  // I've pulled specific points from your PDF context to make this feel authentic, 
  // but you can easily swap these strings out if you prefer the exact repetition in the image.
  const reasons = [
    { id: 1, text: "What happens in the mouth does not stay in the mouth." },
    { id: 2, text: "Recognise hidden factors driving chronic inflammation." },
    { id: 3, text: "Learn practical approaches for your clinical practice." },
    { id: 4, text: "Expand your perspective on whole-body health." }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 lg:py-24">
      {/* Grid Layout: Stacks on mobile, splits side-by-side on md screens */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-0">
        
        {/* Left Column: Text & Vertical Divider */}
        <div className="w-full md:w-5/12 lg:w-1/3 flex flex-col justify-center pr-0 md:pr-10 lg:pr-16 md:border-r border-blue-900/20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-primary mb-4 leading-tight tracking-tight">
            Why This <br className="hidden md:block" />
            Matters
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
            This is where symptoms stop being random, and start making sense.
          </p>
        </div>

        {/* Right Column: Interactive Pills Stack */}
        <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col gap-4 pl-0 md:pl-10 lg:pl-16 justify-center">
          {reasons.map((reason) => (
            <WhyTM key={reason.id} text={reason.text} />
          ))}
        </div>
        
      </div>
    </section>
  );
}