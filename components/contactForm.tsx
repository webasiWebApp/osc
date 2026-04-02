'use client';

import React, { useState } from 'react';
import CTAButton from './CTAButton';


// Reusable component for the custom input fields to keep the code DRY
interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  isTextArea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = ({ id, label, type = 'text', isTextArea = false, value, onChange }: FormFieldProps) => {
  return (
    <div className="relative w-full mb-10 group">
      {/* Custom Placeholder to allow the red asterisk */}
      {!value && (
        <div className="absolute left-0 top-3 pointer-events-none text-gray-400 text-sm flex gap-1">
          {label} <span className="text-[#ff6b6b]">*</span>
        </div>
      )}
      
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-700 focus:outline-none focus:border-gray-900 transition-colors resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
        />
      )}
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS or custom API route)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-transparent p-6">
      <FormField 
        id="name" 
        label="Your Name Here" 
        value={formData.name} 
        onChange={handleChange} 
      />
      
      <FormField 
        id="email" 
        type="email" 
        label="Your E-mail Here" 
        value={formData.email} 
        onChange={handleChange} 
      />
      
      <FormField 
        id="mobile" 
        type="tel" 
        label="Your Mobile Number Here" 
        value={formData.mobile} 
        onChange={handleChange} 
      />
      
      <FormField 
        id="message" 
        label="Your Message" 
        isTextArea 
        value={formData.message} 
        onChange={handleChange} 
      />

      {/* Adding a sleek submit button to complete the form */}
      <CTAButton 
        type="button"
        btnText="Send Message"
        className="mt-4"
        onClick={() => window.location.href = 'https://www.trybooking.com/DKWFJ'}
      />
    </form>
  );
}