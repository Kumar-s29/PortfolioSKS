"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: '01. home' },
  { id: 'projects', label: '02. projects' },
  { id: 'experience', label: '03. experience' },
  { id: 'achievements', label: '04. stats' },
  { id: 'stack', label: '05. stack' },
  { id: 'contact', label: '06. contact' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 300;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-green flex items-center justify-center font-mono font-bold text-bg group-hover:scale-110 transition-transform">
            KS
          </div>
          <span className="font-mono text-text-primary font-bold hidden sm:block">
            Kumar.Swamy<span className="text-accent-green">()</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-xs transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-accent-green' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg z-40 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ top: '0' }}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button 
            className="absolute top-8 right-8 text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-mono text-2xl transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-accent-green' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex gap-6">
             <div className="w-12 h-1 bg-accent-green rounded-full" />
             <div className="w-12 h-1 bg-accent-blue rounded-full" />
             <div className="w-12 h-1 bg-accent-amber rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
