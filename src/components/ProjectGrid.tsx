"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { useEnvironment, Environment } from "@/context/EnvironmentContext";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: { github: string; live: string };
  category: Environment;
}

const PROJECTS: Project[] = [
  // Full Stack
  {
    title: "Student Learning Hub",
    description: "Full-stack educational platform featuring video streaming, notes management, and progress tracking.",
    tech: ["Django", "FastAPI", "PostgreSQL"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "FULL_STACK"
  },
  {
    title: "Prescripto",
    description: "Doctor appointment system with automated scheduling, real-time updates, and admin dashboard.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "FULL_STACK"
  },
  {
    title: "College Fest Website",
    description: "Full-stack event management platform with dynamic pages, ticketing systems, and Supabase integration.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "FULL_STACK"
  },
  // Data Analytics
  {
    title: "Vendor Performance Analytics",
    description: "Business intelligence dashboard analyzing vendor profitability and inventory efficiency.",
    tech: ["Python", "SQL", "Power BI"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "DATA_ANALYTICS"
  },
  {
    title: "Sales Analysis Dashboard",
    description: "Interactive Excel dashboard identifying top products, cities, and revenue trends.",
    tech: ["Excel", "Pivot Tables", "VBA"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "DATA_ANALYTICS"
  },
  {
    title: "Flight Booking Data Analysis",
    description: "In-depth analysis of booking trends and revenue patterns using SQL optimization and Python-driven insights.",
    tech: ["PostgreSQL", "Python", "FastAPI"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "DATA_ANALYTICS"
  },
  // ServiceNow
  {
    title: "Enterprise ITSM System",
    description: "End-to-end ITSM workflows for incident and service request management.",
    tech: ["ServiceNow", "SLA", "Catalog"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "SERVICENOW"
  },
  {
    title: "Smart Service Automation",
    description: "ServiceNow Studio app with GlideAjax and Business Rules for backend automation.",
    tech: ["Studio", "JavaScript", "Glide"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "SERVICENOW"
  },
  {
    title: "Streamlining Ticket Assignment",
    description: "Automated ticket routing system using assignment rules and secure ACL implementations for enterprise support.",
    tech: ["ITSM", "ACL", "Automation"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "SERVICENOW"
  },
  {
    title: "Educational Management System",
    description: "Custom ServiceNow application featuring structured tables and automated workflows for student data management.",
    tech: ["Custom App", "Workflow", "Forms"],
    image: "/assets/project_bg.png",
    links: { github: "https://github.com/Kumar-s29/", live: "#" },
    category: "SERVICENOW"
  }
];

export default function ProjectGrid() {
  const { environment } = useEnvironment();
  const [mounted, setMounted] = React.useState(false);
  const filteredProjects = PROJECTS.filter(p => p.category === environment);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 md:mb-16">
          <p className="text-label-md text-primary mb-2">/ SELECTED_WORKS</p>
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight">Projects</h2>
        </div>

        <div key={environment} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col glass-panel rounded-lg overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
              >
                {/* Viewport Header */}
                <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-on-surface-variant/50">
                    VIEWPORT_REF: {mounted ? Math.random().toString(16).slice(2, 8).toUpperCase() : "LOADING..."}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  </div>
                </div>

                <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Scanline Effect Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80" />
                  
                  {/* Build Info Tag */}
                  <div className="absolute top-4 right-4 animate-pulse">
                    <span className="text-[8px] font-mono bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                      STATUS: STABLE
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono bg-white/5 px-2 py-1 rounded-sm text-secondary border-l border-secondary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3 font-sans group-hover:text-primary transition-colors">
                    <span className="text-on-surface-variant/30">{`{ `}</span>
                    {project.title}
                    <span className="text-on-surface-variant/30">{` }`}</span>
                  </h3>
                  
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <a href={project.links.github} className="text-[10px] font-mono flex items-center gap-2 hover:text-primary transition-colors group/link">
                      <Code size={14} className="group-hover/link:rotate-12 transition-transform" /> 
                      &gt; VIEW_SOURCE
                    </a>
                    <a href={project.links.live} className="text-[10px] font-mono flex items-center gap-2 text-primary hover:text-primary-dim transition-colors group/link">
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" /> 
                      &gt; DEPLOY_LIVE
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
