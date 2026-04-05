import React from 'react';
import Image from 'next/image';

// Define the interface for our data structure
interface IconItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export default function IconList() {
  // Array of data to keep the component DRY and easy to update
  const items: IconItem[] = [
    {
      id: 'infection',
      title: 'Infection',
      description: 'Exploring the transmission and pathology of oral pathogens. We analyze how localized infections serve as the catalyst for broader immunological responses.',
      // Replace with your actual image path in the /public folder
      iconSrc: '/secondSec/1.png', 
    },
    {
      id: 'imbalance',
      title: 'Imbalance',
      description: 'Examining the disruption of the microbiome. This pillar focuses on how chemical and biological shifts impact patient stability and treatment outcomes.',
      iconSrc: '/secondSec/2.png',
    },
    {
      id: 'systemic-health',
      title: 'Systemic Health',
      description: 'Connecting the dots between oral care and total body wellness. We bridge the gap between dental science and public health initiatives for holistic longevity.',
      iconSrc: '/secondSec/3.png',
    }
  ];

  return (
    <section className="w-full px-16 mx-auto px-1 ">
      {/* Responsive grid: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center flex">
        
        {items.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-5 group">
            
            {/* Icon Container: The dark blue circle */}
            <div className="relative flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-full bg-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="relative w-8 h-8">
                <Image
                  src={item.iconSrc}
                  alt={`${item.title} icon`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col mt-2 md:mt-1 items-center md:items-start">
              <h3 className="text-2xl font-semibold text-primary mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed md:pr-4">
                {item.description}
              </p>
            </div>

          </div>
        ))}
        
      </div>
    </section>
  );
}