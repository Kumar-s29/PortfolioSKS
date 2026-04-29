"use client";

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
  liveUrl?: string;
  status?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, sourceUrl, liveUrl, status }) => {
  return (
    <div className="group relative bg-surface border border-border rounded-xl p-6 transition-all duration-500 hover:border-accent-green hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="w-24 h-24 border-2 border-accent-green rounded-full rotate-45 flex items-center justify-center">
          <div className="w-16 h-16 border border-accent-green rounded-full" />
        </div>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-mono font-bold text-text-primary group-hover:text-accent-green transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green transition-colors">
              <Github size={20} />
            </a>
            {liveUrl ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green transition-colors">
                <ExternalLink size={20} />
              </a>
            ) : (
              <span className="font-mono text-[10px] text-text-muted border border-border px-2 py-0.5 rounded">
                [ LIVE: PENDING ]
              </span>
            )}
          </div>
        </div>

        <p className="text-text-muted text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] bg-border/50 text-text-primary px-2 py-0.5 rounded-md border border-border/50">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-20 pointer-events-none">
        <div className="font-mono text-accent-green text-sm flex items-center overflow-hidden">
          <span className="whitespace-nowrap animate-[type_1.5s_steps(20)_infinite]">
            &gt; loading preview...
          </span>
          <span className="inline-block w-2 h-4 bg-accent-green ml-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
