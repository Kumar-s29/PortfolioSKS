"use client";

import React, { useState } from "react";
import { Briefcase, Menu, X, Command, Cpu, Layout, Terminal, Award } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home", tech: "01.Initialize", icon: Cpu },
  { label: "PROJECTS", href: "#projects", tech: "02.Works", icon: Layout },
  { label: "EXPERIENCE", href: "#experience", tech: "03.History", icon: Briefcase },
  { label: "ACHIEVEMENTS", href: "#achievements", tech: "04.Accolades", icon: Award },
  { label: "STACK", href: "#stack", tech: "05.Capabilities", icon: Terminal },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop HUD */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center p-6 pointer-events-none">
        <div className="glass-panel rounded-full px-10 py-4 flex items-center gap-10 shadow-2xl border border-white/10 pointer-events-auto">
          <div className="flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex flex-col items-center shrink-0 min-w-fit"
              >
                <span className="text-[11px] font-mono text-primary/60 group-hover:text-primary transition-colors uppercase tracking-widest leading-none mb-1">
                  {item.tech.split('.')[0]}
                </span>
                <span className="text-label-md font-sans transition-colors group-hover:text-primary whitespace-nowrap">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 w-0 h-px bg-primary transition-all group-hover:w-full opacity-40" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8 border-l border-white/10 pl-10">
            <Link 
              href="#contact"
              className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-2.5 rounded-full font-sans text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(222,142,255,0.4)]"
            >
              CONNECT
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Trigger */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-primary text-on-primary p-4 rounded-full shadow-[0_0_20px_rgba(222,142,255,0.4)] flex items-center gap-3 border border-white/20"
        >
          <Command size={20} />
          <span className="font-mono text-xs font-bold tracking-widest">SYS_NAV</span>
        </motion.button>
      </div>

      {/* Innovative Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-background/80 md:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-mono text-[10px] text-primary space-y-1">
                <p>STATUS: OVERRIDE_ACTIVE</p>
                <p>USER: S_K_SWAMY</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-primary"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
              {NAV_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-6 p-4 rounded-lg bg-white/5 border border-white/5 active:bg-primary/20 active:border-primary/40 transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded group-active:bg-primary group-active:text-on-primary transition-colors">
                        <Icon size={24} className="text-primary group-active:text-on-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">{item.tech}</p>
                        <h3 className="text-xl font-bold tracking-tight">{item.label}</h3>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-on-primary p-6 rounded-lg font-sans text-lg font-bold flex items-center justify-between"
              >
                <span>INITIATE CONNECT</span>
                <Briefcase size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
