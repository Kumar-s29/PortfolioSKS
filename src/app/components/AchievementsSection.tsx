"use client";

import React from 'react';
import SectionReveal from './SectionReveal';

interface Stat {
  label: string;
  value: string;
  color: string;
  glow: string;
}

interface AchievementsSectionProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    label: "LeetCode Max Rating",
    value: "1765",
    color: "text-accent-amber",
    glow: "drop-shadow-[0_0_15px_rgba(245,166,35,0.4)]"
  },
  {
    label: "Problems Solved",
    value: "2000+",
    color: "text-accent-amber",
    glow: "drop-shadow-[0_0_15px_rgba(245,166,35,0.4)]"
  },
  {
    label: "CodeChef Rating",
    value: "1669",
    color: "text-accent-green",
    glow: "drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]"
  }
];

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ stats = defaultStats }) => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-text-primary">
                <span className="text-accent-green">04.</span> stats_overview
              </h2>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className={`font-mono text-5xl md:text-8xl font-bold ${stat.color} ${stat.glow} transition-transform duration-500 group-hover:scale-110`}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-text-muted tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AchievementsSection;
