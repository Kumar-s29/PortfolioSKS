"use client";

import React from 'react';
import Navbar from './components/Navbar';
import HeroCode from './components/HeroCode';
import ProjectCard from './components/ProjectCard';
import SectionReveal from './components/SectionReveal';
import StatusBadge from './components/StatusBadge';
import AchievementsSection from './components/AchievementsSection';
import GithubHeatmap from './components/GithubHeatmap';
import ProfileImage from './components/ProfileImage';
import EnvironmentSwitcher from './components/EnvironmentSwitcher';
import { useProfile } from './context/ProfileContext';
import { Github, Linkedin, Mail, ArrowUpRight, FileDown } from 'lucide-react';

export default function Page() {
  const { activeProfileId, activeProfile, setActiveProfileId } = useProfile();

  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col justify-center relative dot-grid">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionReveal className="space-y-8">
            <ProfileImage />
            <StatusBadge label={activeProfileId.replace('_', ' ')} />
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-bold font-mono tracking-tighter">
                Swayamvarapu <br />
                <span className="text-accent-green terminal-glow">Kumara Swamy</span>
              </h1>
              <p className="text-text-muted text-lg max-w-lg font-mono">
                &gt; {activeProfile.role} <br />
                Crafting premium digital experiences through clean code and robust architecture.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn-terminal group flex items-center gap-2">
                VIEW_PROJECTS <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href={activeProfile.resumeUrl} 
                download 
                className="flex items-center gap-2 px-6 py-2 font-mono text-text-muted hover:text-accent-green transition-colors border border-transparent hover:border-accent-green/30 rounded-md"
              >
                <FileDown size={16} /> DOWNLOAD_CV
              </a>
            </div>
          </SectionReveal>

          <SectionReveal className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <HeroCode code={activeProfile.heroCode} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-text-primary">
                <span className="text-accent-green">02.</span> featured_projects
              </h2>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProfile.projects.map((project, idx) => (
                <ProjectCard key={`${activeProfileId}-${idx}`} {...project} sourceUrl={project.sourceUrl || ""} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-text-primary">
                <span className="text-accent-green">03.</span> prof_experience
              </h2>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            <div className="space-y-8">
              {[
                {
                  role: "Full Stack Developer Intern",
                  company: "Acknowledgement Hub",
                  period: "Dec 2025 - Present",
                  description: "Developing and enhancing multiple real-world projects. Involved in designing, building, and improving scalable web applications.",
                  tech: ["React", "Django", "FastAPI"]
                },
                {
                  role: "Python Development Intern",
                  company: "Infosys SpringBoard",
                  period: "Sep 2025 - Nov 2025",
                  description: "Developed a Flight Booking Simulator with Dynamic Pricing using React, TypeScript, and PostgreSQL. Implemented secure backend services using FastAPI with JWT-based authentication and role-based access control.",
                  tech: ["FastAPI", "React", "PostgreSQL", "JWT"]
                },
                {
                  role: "Backend Development Intern",
                  company: "PearlThoughts",
                  period: "Jul 2025 - Sep 2025",
                  description: "Developed Doctor Appointment System backend using NestJS, TypeScript, and PostgreSQL. Built secure RESTful APIs with JWT authentication.",
                  tech: ["NestJS", "PostgreSQL", "JWT"]
                }
              ].map((exp, idx) => (
                <div key={idx} className="group relative pl-8 border-l border-border hover:border-accent-green transition-colors pb-8">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-border group-hover:bg-accent-green transition-colors" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <h3 className="text-xl font-mono font-bold text-text-primary">{exp.role}</h3>
                      <span className="font-mono text-xs text-accent-green bg-accent-green/10 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <div className="text-accent-blue font-mono text-sm">{exp.company}</div>
                    <p className="text-text-muted text-sm max-w-2xl leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex gap-2 pt-2">
                      {exp.tech.map(t => (
                        <span key={t} className="text-[10px] font-mono text-text-muted">#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats Section */}
      <AchievementsSection stats={activeProfile.achievements} />

      {/* Contribution Section */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <GithubHeatmap />
          </SectionReveal>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-text-primary">
                <span className="text-accent-green">05.</span> tech_stack
              </h2>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeProfile.stack.map((skill) => (
                <div key={skill} className="bg-surface border border-border p-4 rounded-lg flex items-center justify-center font-mono text-sm hover:border-accent-green hover:text-accent-green transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <SectionReveal className="space-y-4">
            <h2 className="text-2xl md:text-6xl font-bold font-mono terminal-glow">INIT_COMMUNICATION</h2>
            <p className="text-text-muted font-mono max-w-xl mx-auto">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </SectionReveal>

          <SectionReveal className="flex flex-wrap justify-center gap-8 pt-8">
            <a href="mailto:skumar.dev@gmail.com" className="group flex flex-col items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent-green group-hover:text-accent-green transition-all">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="font-mono text-[10px] md:text-xs uppercase text-text-muted group-hover:text-accent-green transition-colors">email</span>
            </a>
            <a href="https://github.com/Kumar-s29/" target="_blank" className="group flex flex-col items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent-green group-hover:text-accent-green transition-all">
                <Github size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="font-mono text-[10px] md:text-xs uppercase text-text-muted group-hover:text-accent-green transition-colors">github</span>
            </a>
            <a href="https://www.linkedin.com/in/kumara-swamy-swayamvarapu-381587270/" target="_blank" className="group flex flex-col items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent-green group-hover:text-accent-green transition-all">
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="font-mono text-[10px] md:text-xs uppercase text-text-muted group-hover:text-accent-green transition-colors">linkedin</span>
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
            © 2026 Kumar Swamy | All rights reserved
          </div>
          <div className="flex gap-6 font-mono text-[10px] text-text-muted">
            <span className="hover:text-accent-green cursor-default transition-colors">v1.0.4-stable</span>
            <span className="hover:text-accent-green cursor-default transition-colors">deployment: success</span>
          </div>
        </div>
      </footer>

      <EnvironmentSwitcher />
    </main>
  );
}
