"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEnvironment } from "@/context/EnvironmentContext";

const HERO_CONTENT = {
  FULL_STACK: {
    role: "Full Stack Developer",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
    code: `const engineer = {
  role: "Full Stack Developer",
  focus: ["Scalable Systems", "Modern Web Apps"],
  status: "Building the future."
};`,
  },
  DATA_ANALYTICS: {
    role: "Data Analyst",
    tech: ["SQL", "Power BI", "Pandas", "Python"],
    code: `const analyst = {
  role: "Data & Insights Expert",
  focus: ["Business Intel", "Data Pipelines"],
  action: "Transforming data into value."
};`,
  },
  SERVICENOW: {
    role: "ServiceNow Developer",
    tech: ["ITSM", "CSA", "CAD", "Glide Scripts"],
    code: `const dev = {
  role: "ServiceNow Architect",
  focus: ["Workflow Automation", "ITSM/CAD"],
  status: "Optimizing Enterprise Systems."
};`,
  },
};

export default function Hero() {
  const { environment } = useEnvironment();
  const [mounted, setMounted] = useState(false);
  const content = HERO_CONTENT[environment];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-40 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="ambient-glow w-[500px] h-[500px] bg-primary -top-24 -left-24" />
      <div className="ambient-glow w-[400px] h-[400px] bg-secondary bottom-0 right-0" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left z-10 lg:w-7/12">
          <motion.div
            key={environment + "-title"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <span className="text-label-md text-primary tracking-widest block uppercase">
                / {mounted ? environment.replace('_', ' ') : 'BOOTING...'}
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter leading-[1.1]">
                Swayamvarapu<br />
                <span className="text-outline">Kumara Swamy</span>
              </h1>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={environment + "-code"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-lg relative overflow-hidden group max-w-xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/30" />
              <pre className="font-mono text-xs md:text-sm text-on-surface-variant leading-relaxed">
                <code className="text-primary">{content.code}</code>
              </pre>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={environment + "-stack"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
            >
              {content.tech.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-white/5 border-l-2 border-primary/60 rounded-sm font-mono text-[10px] md:text-xs tracking-widest text-on-surface-variant hover:bg-primary/10 hover:border-primary transition-all cursor-default"
                >
                  {tech.toUpperCase()}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group order-first lg:order-last"
        >
          <div className="absolute -inset-4 border border-primary/20 rounded-lg group-hover:border-primary/40 transition-colors" />
          <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-lg overflow-hidden glass-panel">
            <img
              src="/assets/profile.png?v=system_update_1"
              alt="Kumara Swamy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Metadata Overlays */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                ONLINE
              </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono border border-white/10 text-on-surface-variant">
              LAT: 17.6868<br />
              LNG: 83.2185
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Brackets */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[20rem] font-mono text-primary/5 select-none pointer-events-none">
        &#123;
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[20rem] font-mono text-primary/5 select-none pointer-events-none">
        &#125;
      </div>
    </section>
  );
}
