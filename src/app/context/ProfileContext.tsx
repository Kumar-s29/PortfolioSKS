"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProfileType, profiles, ProfileData } from '../data/profiles';

interface ProfileContextType {
  activeProfileId: ProfileType;
  activeProfile: ProfileData;
  setActiveProfileId: (id: ProfileType) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [activeProfileId, setActiveProfileId] = useState<ProfileType>('FULL_STACK');

  const activeProfile = profiles[activeProfileId];

  return (
    <ProfileContext.Provider value={{ activeProfileId, activeProfile, setActiveProfileId }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
