"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnvironment } from "@/context/EnvironmentContext";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const UNIFIED_EXPERIENCE = [
  {
    company: "Acknowledgement Hub",
    role: "Full Stack Developer Intern",
    period: "Dec 2025 - Present",
    location: "Visakhapatnam",
    description: "Currently working as a Full Stack Developer Intern, developing and enhancing multiple real-world projects. Involved in designing, building, and improving scalable web applications.",
    skills: ["React", "Django", "FastAPI", "Full Stack"],
  },
  {
    company: "PearlThoughts",
    role: "Backend Development Intern",
    period: "Jul 2025 - Sep 2025",
    location: "Chennai, India",
    description: "Developed Doctor Appointment System backend using NestJS, TypeScript, and PostgreSQL. Built secure RESTful APIs with JWT authentication and implemented optimized scheduling algorithms.",
    skills: ["NestJS", "PostgreSQL", "JWT", "Backend"],
  },
  {
    company: "Infosys SpringBoard",
    role: "Python Development Intern",
    period: "Remote",
    location: "Infosys",
    description: "Built backend services using FastAPI with JWT authentication and role-based access control. Debugged pricing logic inconsistencies and optimized database queries using PostgreSQL.",
    skills: ["FastAPI", "Python", "RBAC", "PostgreSQL"],
  },
];

const EXPERIENCE_DATA = {
  FULL_STACK: UNIFIED_EXPERIENCE,
  DATA_ANALYTICS: UNIFIED_EXPERIENCE,
  SERVICENOW: UNIFIED_EXPERIENCE,
};

export default function Experience() {
  const { environment } = useEnvironment();
  const currentExp = EXPERIENCE_DATA[environment];

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 md:mb-16">
          <p className="text-label-md text-primary mb-2">/ PROFESSIONAL_LOG</p>
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight">Experience</h2>
        </div>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/10 md:left-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={environment}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10 md:space-y-12"
            >
              {currentExp.map((exp, idx) => (
                <motion.div
                  key={exp.company + idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full bg-background border-2 border-primary z-10 md:left-1/2 md:-translate-x-1/2 shadow-[0_0_10px_rgba(222,142,255,0.5)]" />

                  <div className="hidden md:block md:flex-1 md:w-1/2" />
                  
                  <div className="flex-1 md:w-1/2 glass-panel p-8 md:p-10 rounded-lg border border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
                    <div className="flex flex-col gap-8">
                      {/* Header Section */}
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-none tracking-tight ml-[30px]">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2.5 text-sm md:text-md text-on-surface-variant/60 font-mono">
                            <div className="w-[20px] flex justify-center shrink-0">
                               <Briefcase size={18} className="text-primary/60" />
                            </div>
                            <span className="tracking-widest uppercase text-[10px] md:text-xs font-bold">
                                {exp.company}
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 text-[10px] font-mono text-primary bg-primary/10 px-4 py-2 rounded-sm border border-primary/20">
                           {exp.period}
                        </div>
                      </div>

                      {/* Description and Location Info */}
                      <div className="space-y-6">
                        <p className="text-sm md:text-base text-on-surface-variant/70 leading-relaxed text-left border-l-2 border-primary/20 pl-6 ml-[30px]">
                          {exp.description}
                        </p>
                        
                        <div className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-mono opacity-40">
                           <div className="w-[20px] flex justify-center shrink-0">
                              <MapPin size={14} className="text-primary/60" />
                           </div>
                           <span className="tracking-widest uppercase">{exp.location}</span>
                        </div>
                      </div>

                      {/* Technical Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 ml-[30px]">
                        {exp.skills.map(s => (
                          <span key={s} className="text-[9px] md:text-[10px] font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-on-surface-variant/40 group-hover:text-primary/60 group-hover:border-primary/20 transition-all">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
