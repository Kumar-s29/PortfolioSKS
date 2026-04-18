"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Target, Zap } from "lucide-react";

interface Achievement {
  title: string;
  value: string;
  subValue?: string;
  icon: any;
  color: string;
}

const ACCOLADES: Achievement[] = [
  {
    title: "LeetCode Rating",
    value: "1765",
    subValue: "Top Tier Problem Solver",
    icon: Target,
    color: "#FFA116",
  },
  {
    title: "Problems Solved",
    value: "2000+",
    subValue: "Competitive Programming",
    icon: Zap,
    color: "#22C55E",
  },
  {
    title: "CodeChef Max",
    value: "1669",
    subValue: "3-Star Programmer",
    icon: Trophy,
    color: "#FACC15",
  },
  {
    title: "Code Rush Contest",
    value: "2nd PLACE",
    subValue: "Regional Competition",
    icon: Award,
    color: "#6366F1",
  },
];

const CERTIFICATIONS = [
  "ServiceNow Certified Administrator (CSA)",
  "ServiceNow Certified Application Developer (CAD)",
  "Cisco Certified: JavaScript Specialist",
  "Cisco Certified: Python Specialist",
  "MERN Stack Specialization (Udemy)",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 md:mb-16">
          <p className="text-label-md text-primary mb-2">/ SYSTEM_ACCOLADES</p>
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight">Honors & Proofs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {ACCOLADES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-lg border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden text-center"
              >
                <div 
                  className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 bg-primary/20 group-hover:bg-primary" 
                  style={{ backgroundColor: item.color + "44" }}
                />
                <Icon size={32} className="mx-auto mb-6 transition-transform group-hover:scale-110" style={{ color: item.color }} />
                <h4 className="text-[10px] font-mono text-on-surface-variant/40 mb-2 uppercase tracking-widest">{item.title}</h4>
                <div className="text-3xl font-bold mb-2 font-sans tracking-tight">{item.value}</div>
                <p className="text-[9px] font-mono text-on-surface-variant/60">{item.subValue}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-lg border border-white/5 bg-white/[0.02]">
          <h3 className="text-label-md font-mono text-primary mb-8 border-b border-white/5 pb-4">FILE_SYSTEM: /CERTIFICATIONS/ACTIVE</h3>
          <div className="flex flex-wrap gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert} 
                className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-sm border-l-2 border-primary/40 hover:border-primary transition-all text-sm group"
              >
                <Award size={14} className="text-primary/60 group-hover:text-primary" />
                <span className="text-on-surface-variant">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
