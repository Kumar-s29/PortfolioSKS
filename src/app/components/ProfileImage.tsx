"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-0 bg-accent-green rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
      <div className="absolute inset-0 border border-accent-green rounded-2xl -rotate-3 opacity-40 group-hover:-rotate-6 transition-transform duration-500" />
      
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-surface flex items-center justify-center">
        {!error ? (
          <Image
            src="/assets/profile.png"
            alt="Kumar Swamy"
            fill
            unoptimized
            className="object-cover transition-transform duration-500 hover:scale-110"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface group">
            <span className="font-mono text-4xl font-bold text-accent-green animate-pulse">
              KS
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
