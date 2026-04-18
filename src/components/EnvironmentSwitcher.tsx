"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnvironment, Environment } from "@/context/EnvironmentContext";
import { Terminal, BarChart3, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const ENV_CONFIG: { id: Environment; label: string; icon: any }[] = [
  { id: "FULL_STACK", label: "FULL_STACK", icon: Terminal },
  { id: "DATA_ANALYTICS", label: "DATA_ANALYTICS", icon: BarChart3 },
  { id: "SERVICENOW", label: "SERVICE_NOW", icon: ShieldCheck },
];

export default function EnvironmentSwitcher() {
  const { environment, setEnvironment } = useEnvironment();

  return (
    <div className="fixed top-8 left-4 md:top-auto md:left-auto md:bottom-8 md:right-8 z-[90] flex flex-col gap-2 md:gap-3 scale-90 md:scale-100 origin-top-left md:origin-bottom-right w-fit">
      <div className="glass-panel p-2 rounded-lg flex flex-col gap-1.5 md:gap-2 shadow-2xl">
        <div className="px-3 py-1 text-[8px] md:text-[10px] font-mono text-on-surface-variant/40 border-b border-white/5 mb-1">
          SYS_ENVIRONMENT_MODES
        </div>
        {ENV_CONFIG.map((env) => {
          const Icon = env.icon;
          const isActive = environment === env.id;
          
          return (
            <button
              key={env.id}
              onClick={() => setEnvironment(env.id)}
              className={cn(
                "flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded transition-all group",
                isActive 
                  ? "bg-primary/20 text-primary border border-primary/30" 
                  : "hover:bg-white/5 text-on-surface-variant hover:text-on-surface"
              )}
            >
              <Icon size={16} className={cn("transition-transform", isActive ? "scale-110" : "group-hover:scale-110")} />
              <span className="text-[10px] font-mono tracking-tighter">
                {env.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="w-1.5 h-1.5 rounded-full bg-primary ml-auto shadow-[0_0_8px_rgba(222,142,255,0.8)]"
                />
              )}
            </button>
          );
        })}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={environment}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-right px-2"
        >
          <span className="text-[10px] font-mono text-primary opacity-60 uppercase tracking-widest">
            {environment}_MODE_ACTIVE
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
