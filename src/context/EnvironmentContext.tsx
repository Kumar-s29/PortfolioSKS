"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Environment = "FULL_STACK" | "DATA_ANALYTICS" | "SERVICENOW";

interface EnvironmentContextType {
  environment: Environment;
  setEnvironment: (env: Environment) => void;
}

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(undefined);

export function EnvironmentProvider({ children }: { children: ReactNode }) {
  const [environment, setEnvironment] = useState<Environment>("FULL_STACK");

  return (
    <EnvironmentContext.Provider value={{ environment, setEnvironment }}>
      <div className={`env-${environment.toLowerCase().replace("_", "-")}`}>
        {children}
      </div>
    </EnvironmentContext.Provider>
  );
}

export function useEnvironment() {
  const context = useContext(EnvironmentContext);
  if (context === undefined) {
    throw new Error("useEnvironment must be used within an EnvironmentProvider");
  }
  return context;
}
