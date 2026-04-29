"use client";

import React, { useState, useEffect } from 'react';

interface HeroCodeProps {
  code?: string;
}

const HeroCode: React.FC<HeroCodeProps> = ({ code }) => {
  const codeString = code || `const engineer = {
  name: "Swayamvarapu Kumara Swamy",
  role: "Full Stack Developer",
  skills: ["React", "Next.js", "Python", "Django", "AWS"],
  passions: ["Scalable Architectures", "Terminal UI", "Open Source"],
  status: "OPEN_FOR_OPPORTUNITIES",
  location: "Visakhapatnam, Andhra Pradesh, India"
};`;

  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when code changes
    setDisplayedCode("");
    setCurrentIndex(0);
  }, [code]);

  useEffect(() => {
    if (currentIndex < codeString.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeString[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 25); // Slightly faster for multi-profile switching
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeString]);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-green/20 to-accent-blue/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <pre className="relative font-mono bg-surface border border-border rounded-lg p-6 overflow-x-auto text-sm md:text-base leading-relaxed shadow-2xl min-h-[250px]">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <code className="text-text-primary">
          {displayedCode}
          <span className="inline-block w-2 h-5 bg-accent-green ml-1 animate-pulse align-middle" />
        </code>
      </pre>
    </div>
  );
};

export default HeroCode;
