'use client';

import React from 'react';
// Assuming these components are in the same directory
import SpeakerCard, { SpeakerProps } from './SpeakerCard';
import CTAButton from './CTAButton';

export default function SpeakerSec() {
  // Array of speaker data. 
  // You can easily swap out the imageSrc paths when the client provides the final transparent PNGs.
  const speakers: SpeakerProps[] = [
    {
      name: "Dr. Simone Sleep",
      roles: "Biomedical Scientist | Oral Infection Researcher",
      bio: "Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology, and Public Health.",
      imageSrc: "/team/1.png", 
    },
    {
      name: "Dr. Andrew Taylor",
      roles: "Biological Dentist | Mercury-Free Expertise",
      bio: "Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology, and Public Health.",
      imageSrc: "/team/2.png", 
    },
    {
      name: "Dr. Blanche Crabe",
      roles: "Biological Dentist | Integrative Medicine",
      bio: "Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology, and Public Health.",
      imageSrc: "/team/3.png", 
    },
    {
      name: "Susan Russle",
      roles: "Dental Hygienist | Oral Microbiome Educator",
      bio: "Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology, and Public Health.",
      imageSrc: "/team/4.png", 
    },
    {
      // This is the 5th "extra" bio the client mentioned in the chat
      name: "Guest Speaker (TBA)",
      roles: "Integrative Health Specialist",
      bio: "Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology, and Public Health.",
      imageSrc: "/team/5.png", 
    },
    {
      name: "Panel Discussion",
      roles: "All Speakers & Q&A",
      bio: "Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology, and Public Health.",
      imageSrc: "/team/6.png", 
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center text-center">

      {/* Header Area */}
      <div className="max-w-3xl flex flex-col items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-4">
          Meet the Speakers
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
          Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry,
          Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology,
          Microbiology, and Public Health.
        </p>
      </div>

      {/* Top CTA Button */}
      {/* Using the 'solid' variant to perfectly match your dark blue mockup button */}
      {/* <div className="mb-14">
        <CTAButton
          btnText="Meet the Speakers"
          variant="solid"
          onClick={() => {
            // Optional: If you want this button to scroll down to the grid instead of navigating away
            const speakerGrid = document.getElementById('speaker-grid');
            speakerGrid?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div> */}

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