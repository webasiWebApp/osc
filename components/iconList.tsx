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
      description: 'Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology.',
      // Replace with your actual image path in the /public folder
      iconSrc: '/secondSec/1.png', 
    },
    {
      id: 'imbalance',
      title: 'Imbalance',
      description: 'Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology.',
      iconSrc: '/secondSec/2.png',
    },
    {
      id: 'systemic-health',
      title: 'Systemic Health',
      description: 'Bridging Dentistry, Parasitology, Microbiology, and Public Health. Bridging Dentistry, Parasitology, Microbiology.',
      iconSrc: '/secondSec/3.png',
    }
  ];

  return (
    <section className="w-full px-16 mx-auto px-1 ">
      {/* Responsive grid: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center flex">
        
        {items.map((item) => (
          <div key={item.id} className="flex items-start  gap-5 group">
            
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
            <div className="flex flex-col mt-1">
              <h3 className="text-2xl font-semibold text-primary mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">
                {item.description}
              </p>
            </div>

          </div>
        ))}
        
      </div>
    </section>
  );
}