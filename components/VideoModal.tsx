'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const [renderVideo, setRenderVideo] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRenderVideo(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Delay unmounting video so closing animation plays smoothly
      const timer = setTimeout(() => setRenderVideo(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/25 rounded-full text-white transition-all duration-300 z-[101] hover:scale-110 cursor-pointer"
        aria-label="Close video"
      >
        <X size={28} />
      </button>

      {/* Video Wrapper */}
      {/* Takes full height on mobile, maintains aspect ratio on desktop */}
      <div 
        className={`relative w-full h-[100dvh] md:h-auto md:w-[90vw] md:max-w-6xl md:aspect-video flex items-center justify-center md:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-700 ease-out transform ${
          isOpen ? 'scale-100 translate-y-0 opacity-100 pointer-events-auto' : 'scale-95 translate-y-12 opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {renderVideo && (
          <video
            src={videoSrc}
            autoPlay
            controls
            playsInline
            className="w-full h-full object-contain md:object-cover bg-black"
            onEnded={onClose}
          />
        )}
      </div>
    </div>
  );
}
