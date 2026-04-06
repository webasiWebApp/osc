'use client';

import React, { useState, useTransition } from 'react';
import { sendContactEmail } from '@/app/actions';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

// ─── FormField ────────────────────────────────────────────────────────────────

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  isTextArea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

const FormField = ({ id, label, type = 'text', isTextArea = false, value, onChange, required, disabled }: FormFieldProps) => (
  <div className="relative w-full mb-10 group">
    {/* Floating placeholder */}
    {!value && (
      <div className="absolute left-0 top-3 pointer-events-none text-gray-400 text-sm flex gap-1">
        {label}
        {required && <span className="text-[#ff6b6b]">*</span>}
      </div>
    )}
    {isTextArea ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={4}
        disabled={disabled}
        className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-700 focus:outline-none focus:border-[#03045E] transition-colors resize-none disabled:opacity-50"
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full bg-transparent border-b border-gray-400 py-3 text-gray-700 focus:outline-none focus:border-[#03045E] transition-colors disabled:opacity-50"
      />
    )}
    {/* Focus bar animation */}
    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#03045E] transition-all duration-300 group-focus-within:w-full" />
  </div>
);

// ─── ContactForm ──────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-transparent p-6" noValidate>

      <FormField id="name"    label="Your Name"          value={formData.name}    onChange={handleChange} required disabled={isPending} />
      <FormField id="email"   label="Your E-mail"  type="email" value={formData.email}   onChange={handleChange} required disabled={isPending} />
      <FormField id="mobile"  label="Your Mobile Number" type="tel" value={formData.mobile}  onChange={handleChange} disabled={isPending} />
      <FormField id="message" label="Your Message"  isTextArea   value={formData.message} onChange={handleChange} required disabled={isPending} />

      {/* Status feedback */}
      {status === 'success' && (
        <div className="flex items-center gap-3 mb-6 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
          <CheckCircle2 size={18} className="flex-shrink-0" />
          <span>Message sent! We&apos;ll be in touch soon.</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-3 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={18} className="flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#03045E] text-white text-sm font-semibold hover:bg-[#020344] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>

    </form>
  );
}