'use client';

import React from 'react';
import Image from 'next/image';
// Assuming the CTAButton component is in the same directory
import CTAButton from './CTAButton'; 

export default function Cta() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      {/* Main Container */}
      <div className="relative w-full rounded-[2.5rem] bg-surface-deep overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 gap-10 lg:gap-16 shadow-2xl">
        
        {/* Subtle Background Watermark Graphic (Absolute Positioned) */}
        {/* You will need to replace this src with your actual faint lung/tree graphic */}
        <div className="absolute top-0 left-0 w-[60%] h-full opacity-10 pointer-events-none mix-blend-overlay">
          <Image
            src="/watermark-graphic.png" // Placeholder for your watermark asset
            alt="Background graphic"
            fill
            className="object-cover object-left"
            priority={false}
          />
        </div>

        {/* Left Column: Text & Button */}
        <div className="relative z-10 flex flex-col items-start w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-[3rem] font-light text-white leading-[1.15] tracking-tight mb-6">
            Ready to Expand Your <br className="hidden lg:block" />
            Perspective?
          </h2>
          
          <p className="text-base lg:text-lg text-blue-100 font-light leading-relaxed max-w-md mb-10">
            Join us for an immersive experience bridging dentistry, microbiology, 
            and public health. Secure your pass today and understand the 
            complete picture of health.
          </p>

          {/* Using the CTA Button we built earlier. 
              The 'outline' variant perfectly matches the white button with blue text in your mockup. */}
          <CTAButton 
            btnText="Reserve Your Seat Now" 
            variant="outline" 
            onClick={() => window.location.href = 'https://www.trybooking.com/DIOAS'}
          />
        </div>

        {/* Right Column: Featured Image */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-[1/1] rounded-3xl overflow-hidden shadow-xl border border-white/10">
            {/* Replace with your actual clinic image */}
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
              alt="Clinical professionals with patient"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}