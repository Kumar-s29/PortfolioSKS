"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnvironment } from "@/context/EnvironmentContext";

const SKILLS_MAP = {
  FULL_STACK: [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "C++"] },
    { category: "Web Tech", items: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "NPM", "VS Code"] },
  ],
  DATA_ANALYTICS: [
    { category: "Analytics Tools", items: ["Power BI", "Microsoft Excel", "Jupyter Note", "Tableau"] },
    { category: "Languages", items: ["Python (Pandas/NumPy)", "SQL (PostgreSQL/MySQL)"] },
    { category: "Mathematics", items: ["Statistics", "Data Mining", "ETL Pipelines"] },
    { category: "Databases", items: ["SQLite", "PostgreSQL", "BigQuery"] },
  ],
  SERVICENOW: [
    { category: "ServiceNow Core", items: ["ITSM", "CMDB", "Service Catalog", "SLA Management"] },
    { category: "Development", items: ["ServiceNow Studio", "Business Rules", "GlideAjax", "Workflows"] },
    { category: "Certifications", items: ["CSA (Certified Admin)", "CAD (Certified Developer)"] },
    { category: "Automation", items: ["Flow Designer", "Assignment Rules", "Email Notifications"] },
  ],
};

export default function StackSection() {
  const { environment } = useEnvironment();
  const [mounted, setMounted] = React.useState(false);
  const currentSkills = SKILLS_MAP[environment];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="stack" className="py-24 bg-surface-container-low/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <p className="text-label-md text-primary mb-2">/ TECH_STACK [{environment}]</p>
            <h2 className="text-4xl md:text-5xl font-bold font-sans">Core Capabilities</h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-label-md opacity-40">Environment Hash: {mounted ? "0x" + Math.random().toString(16).slice(2, 10).toUpperCase() : "INIT..."}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={environment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {currentSkills.map((group) => (
              <div key={`${environment}-${group.category}`} className="space-y-6">
                <h3 className="text-label-md text-on-surface border-b border-white/10 pb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-container-high px-4 py-2 rounded-sm text-sm font-mono text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-default border border-transparent whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
