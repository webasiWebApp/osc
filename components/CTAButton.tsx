'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  btnText: string;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function CTAButton({ 
  btnText, 
  variant = 'solid', 
  onClick,
  className = '',
  type
}: CTAButtonProps) {
  // Define styles based on the variant prop
  const isSolid = variant === 'solid';
  
  const containerClasses = isSolid 
    ? 'bg-primary text-white' 
    : 'bg-white text-primary'; // Adding border so it stands out on white backgrounds
    
  const iconContainerClasses = isSolid
    ? 'bg-white text-primary'
    : 'bg-primary text-white';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-full pl-8 pr-2 py-2 transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer ${containerClasses} ${className}`}
    >
      <span className="text-lg font-light transition-all duration-300 ease-in-out group-hover:tracking-wide">
        {btnText}
      </span>
      
      <div className={`ml-4 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 ${iconContainerClasses}`}>
        <ArrowRight 
          className="h-5 w-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0" 
        />
      </div>
    </button>
  );
}
