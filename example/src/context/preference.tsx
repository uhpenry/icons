'use client';

import { createContext, useContext, ReactNode } from 'react';

interface iPreference {
  theme: 'light' | 'dark';
}

const Preference = createContext<iPreference | undefined>(undefined);

interface Props {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export const PreferenceProvider = (props: Props) => {
  const { children, theme = 'light' } = props;
  return (
    <Preference.Provider value={{ theme }}>{children}</Preference.Provider>
  );
};

export const usePreference = () => {
  const context = useContext(Preference);
  if (!context) {
    throw new Error('usePreference must be used within a PreferenceProvider');
  }
  return context;
};
