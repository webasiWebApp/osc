'use client';

import React from 'react';
import SpeakerCard from './SpeakerCard';
import { speakers } from '@/lib/speakersData';

export default function SpeakerSec() {
  return (
    <section
      id="speakers"
      className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center text-center"
    >
      {/* Header Area */}
      <div className="max-w-3xl flex flex-col items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-4">
          Meet the Speakers
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
          Bridging Dentistry, Parasitology, Microbiology, and Public Health. 
        </p>
      </div>

      {/* Responsive Speaker Grid */}
      <div
        id="speaker-grid"
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
      >
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}