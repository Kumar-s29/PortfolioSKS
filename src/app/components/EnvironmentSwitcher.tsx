"use client";

import React from 'react';
import { ProfileType } from '../data/profiles';
import { useProfile } from '../context/ProfileContext';
import { Cpu, Database, Settings } from 'lucide-react';

const EnvironmentSwitcher: React.FC = () => {
  const { activeProfileId, setActiveProfileId } = useProfile();
  
  const modes: { id: ProfileType; icon: React.ReactNode; label: string }[] = [
    { id: 'FULL_STACK', icon: <Cpu size={16} />, label: 'FULL_STACK' },
    { id: 'DATA_ANALYTICS', icon: <Database size={16} />, label: 'DATA_ANALYTICS' },
    { id: 'SERVICENOW', icon: <Settings size={16} />, label: 'SERVICENOW' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3">
      <div className="bg-surface/80 backdrop-blur-md border border-border rounded-lg p-1 flex flex-col md:flex-row gap-1 shadow-2xl">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setActiveProfileId(mode.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-[10px] md:text-xs transition-all duration-300 ${
              activeProfileId === mode.id
                ? 'bg-accent-green text-bg font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                : 'text-text-muted hover:text-text-primary hover:bg-border/50'
            }`}
          >
            {mode.icon}
            <span className="hidden sm:inline">{mode.label}</span>
          </button>
        ))}
      </div>
      <div className="font-mono text-[10px] text-text-muted flex items-center gap-2 px-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
        SYS_ENVIRONMENT_MODES
      </div>
    </div>
  );
};

export default EnvironmentSwitcher;
