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
      dayLabel: "Day 1",
      title: "Public Education Day",
      subtitle: "Oral Health, Pathology, and the Impact of Mercury",
      imageSrc: "https://images.unsplash.com/photo-1733119883210-04f09d5f86df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image
      description: "Understand how oral health influences the entire body — from inflammation to chronic disease.",
      bullets: [
        "The connection between oral health and systemic health",
        "How to interpret basic pathology and what it may indicate",
        "The role of inflammation and infection in ongoing health concerns",
        "An overview of mercury in dentistry and its potential impact on the body"
      ]
    },
    {
      dayLabel: "Day 2",
      title: "Practitioner Day",
      subtitle: "Oral-Systemic Infection Clinical Conference",
      imageSrc: "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8", // Replace with your actual image
      description: "Delivered in a clear and practical way to help you better understand your health and make informed decisions.",
      bullets: [
        "Infection-driven inflammation",
        "Systemic disease correlations",
        "Clinical case insights",
        "Translational application",
        "8 CPE points per day ",
        "practitioner goodie bag"
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

      

      {/* Grid Layout for the Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 place-items-center md:place-items-stretch">
        {programData.map((dayData, index) => (
          <ProgramOverviewCard key={index} data={dayData} />
        ))}
      </div>

    </section>
  );
}