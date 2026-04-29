import React from 'react';

interface StatusBadgeProps {
  label?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ label = "ONLINE" }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border">
      <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
      <span className="font-mono text-[10px] tracking-widest text-accent-green uppercase">
        {label}
      </span>
    </div>
  );
};

export default StatusBadge;
