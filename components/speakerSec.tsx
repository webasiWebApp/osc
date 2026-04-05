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
      roles: "Biomedical Scientist | Oral Infection Researcher | One Health Advocate",
      bio: "Dr Simone Sleep is a biomedical scientist specialising in oral infectious disease and its relationship with systemic health. With a foundation in naturopathy and extensive research in dentistry, her work bridges clinical science with whole-body health understanding.",
      imageSrc: "/team/1.png",
      speakingOn: "Oral infections, pathology, and systemic health connections",
      background: [
        "PhD in Dentistry and Oral Health – Griffith University",
        "Queensland Representative – One Health Oral Health Special Interest Group (PHAA)",
        "Early clinical work alongside biological dentists",
        "Focus on integrating oral health into broader medical frameworks"
      ],
      expertise: [
        "Oral infections and systemic disease connections",
        "Inflammation and chronic illness patterns",
        "Pathology interpretation in oral-systemic health",
        "Translating research into clinical application"
      ]
    },
    {
      name: "Dr Andrew Taylor",
      roles: "Biological Dentist | 32 Years Experience in Mercury-Free Dentistry",
      bio: "Dr Andrew Taylor is a biological dentist with over three decades of experience in mercury-free dentistry and its impact on whole-body health. His work focuses on reducing toxic load and restoring oral environments to support long-term systemic wellbeing.",
      imageSrc: "/team/5.png",
      speakingOn: "Mercury toxicity, safe amalgam removal, and the role of dental health in systemic conditions",
      background: [
        "32+ years in biological dentistry",
        "Trained in the Huggins Protocol for safe mercury removal",
        "Experience in addressing root canal complications and chronic oral infections",
        "Focus on integrating dental care with systemic health outcomes"
      ],
      expertise: [
        "Mercury toxicity and amalgam removal",
        "Oral infections and their systemic impact",
        "Biological dentistry principles",
        "Detoxification support in dental care"
      ]
    },
    {
      name: "Dr Eric Davis",
      roles: "Biological Dentist | Oral Medicine & Clinical Nutrition",
      bio: "Dr Eric Davis is a biological dentist with a strong focus on oral medicine and clinical nutrition. His work integrates dental health with broader physiological systems, supporting a more complete understanding of chronic health conditions.",
      imageSrc: "/team/6.png",
      speakingOn: "Oral infections, toxicity, and the role of dentistry in systemic health",
      background: [
        "Extensive experience in oral medicine and integrative dentistry",
        "Background in clinical nutrition and systemic health",
        "Focus on identifying underlying contributors to chronic disease",
        "Experience working across multidisciplinary health frameworks"
      ],
      expertise: [
        "Oral-systemic health connections",
        "Nutritional influences on dental and systemic health",
        "Chronic disease patterns linked to oral conditions",
        "Functional and integrative dental approaches"
      ]
    },
    {
      name: "Susan Rusalen",
      roles: "Dental Hygienist | Oral Microbiome Educator | Clinical Consultant",
      bio: "Susan Rusalen is an internationally recognised dental hygienist, educator, and consultant who has spent nearly four decades transforming dentistry through prevention, microbiome science, and hygiene-led patient care.",
      imageSrc: "/team/4.png",
      speakingOn: "The oral microbiome and its role in inflammation and systemic health",
      background: [
        "Experienced dental hygienist and clinical consultant",
        "Focus on oral microbiome and preventative strategies",
        "Works with patients to improve long-term oral health outcomes",
        "Educates practitioners on microbial balance and clinical application"
      ],
      expertise: [
        "Oral microbiome and bacterial balance",
        "Preventative dental care",
        "Gum health and inflammation",
        "Patient education and clinical support strategies"
      ]
    },
    {
      name: "Dr Blanche D Grube",
      roles: "Biological Dentist | Integrative Medicine Practitioner | Educator",
      bio: "Dr Blanche D Grube is an internationally recognised biological dentist with over 40 years of clinical experience. Mentored by the late Dr Hal Huggins, she co-developed the Huggins–Grube Protocol.",
      imageSrc: "/team/2.png",
    },
    {
      name: "Anita Vazquez Tibau",
      roles: "Advocate | Author | Researcher",
      bio: "Anita Vazquez Tibau is an internationally recognised advocate, author, and researcher dedicated to eliminating toxic mercury, with a strong focus on achieving a global ban on dental amalgam.",
      imageSrc: "/team/3.png",
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