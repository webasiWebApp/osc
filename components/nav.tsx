'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
// Assuming the CTAButton component is in the same directory
import CTAButton from './CTAButton';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Program', href: '#program' },
    { name: 'Tickets', href: '#tickets' },
  ];

  // Handle scroll effect for the sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`absolute md:fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className=" mx-auto md:px-20 px-5 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="#home" className="flex items-center justify-center gap-2 z-50">
          <div className="relative w-20 h-20 md:w-24 md:h-24 = transition-transform duration-300 hover:scale-105">
            {/* Replace this src with your actual logo image path from the public folder */}
            <Image 
              src="/logo.png" 
              alt="Oral Systemic Health Conference Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative text-primary text-base font-light transition-colors hover:text-blue-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <CTAButton 
            btnText="Reserve Your Seat" 
            variant="solid" 
            onClick={() => window.location.href = 'https://www.trybooking.com/DIOAS'}
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden relative z-40 text-primary p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex flex-col items-start justify-center px-10 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-8 right-5 text-primary p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-start gap-8 mb-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-primary text-3xl font-light transition-colors hover:text-blue-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <CTAButton 
          btnText="Reserve Your Seat" 
          variant="solid" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.location.href = 'https://www.trybooking.com/DIOAS';
          }}
        />
      </div>
    </header>
  );
}