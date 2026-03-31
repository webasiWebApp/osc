'use client';

import React from 'react';

export default function InlineVideo() {
  return (
    <video
      src="/hero.mp4"
      autoPlay
      controls
      playsInline
      className="w-full h-full object-cover bg-black"
    />
  );
}
