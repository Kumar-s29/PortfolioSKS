import React from 'react';
import Image from 'next/image';

const GithubHeatmap: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="text-text-muted font-mono text-[10px] md:text-xs uppercase tracking-widest">// contribution_graph</span>
        <div className="h-px flex-1 bg-border/50" />
      </div>
      <div className="bg-surface border border-border p-4 rounded-lg overflow-hidden">
        <div className="relative w-full aspect-[10/1.5] min-h-[120px]">
          <Image
            src="https://ghchart.rshah.org/Kumar-s29"
            alt="Kumar-s29 GitHub Contributions"
            fill
            unoptimized
            className="object-contain"
            style={{ filter: 'invert(1) hue-rotate(90deg) brightness(0.85)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubHeatmap;
