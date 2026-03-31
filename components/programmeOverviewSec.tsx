'use client';

import React from 'react';
// Assuming these are in the same directory
import ProgramOverviewCard, { ProgramOverviewProps } from './programOverviewCard';
import CTAButton from './CTAButton';

export default function ProgrammeOverviewSec() {
  // Array holding the data for both days. 
  // This keeps the JSX clean and makes it easy to update content later.
  const programData: ProgramOverviewProps[] = [
    {
      dayLabel: "Day 01",
      title: "Public Education Day",
      subtitle: "Oral Health, Pathology, and the Impact of Mercury",
      imageSrc: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800", // Replace with your actual image
      description: "Understand how oral health influences the entire body — from inflammation to chronic disease.",
      bullets: [
        "The connection between oral health and systemic health",
        "How to interpret basic pathology and what it may indicate",
        "The role of inflammation and infection in ongoing health concerns",
        "An overview of mercury in dentistry and its potential impact on the body"
      ]
    },
    {
      dayLabel: "Day 02",
      title: "Practitioner Day",
      subtitle: "Oral-Systemic Infection Clinical Conference",
      imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800", // Replace with your actual image
      description: "Dive deeper into clinical applications, diagnostics, and integrative care strategies for your practice.",
      bullets: [
        "Clinical insights into oral microbiome imbalances",
        "Advanced diagnostics and interpretation",
        "Integrative treatment protocols and patient management",
        "Interactive case studies and clinical Q&A"
      ]
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center">
      
      {/* Header Area */}
      <div className="max-w-3xl flex flex-col items-center text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-4">
          Programme Overview
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
          Two Days. Two Perspectives. One Complete Picture of Your Health. This is where 
          symptoms stop being random, and start making sense.
        </p>
      </div>

      {/* Top CTA Button */}
      {/* Using 'solid' variant to perfectly match the dark blue button in your mockup */}
      <div className="mb-14">
        <CTAButton 
          btnText="Meet the Speakers" 
          variant="solid" 
          onClick={() => {
            // Smooth scroll to speakers section
            document.getElementById('speaker-grid')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* Grid Layout for the Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 place-items-center md:place-items-stretch">
        {programData.map((dayData, index) => (
          <ProgramOverviewCard key={index} data={dayData} />
        ))}
      </div>

    </section>
  );
}