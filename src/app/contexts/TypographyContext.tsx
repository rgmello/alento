"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export type TypographyOption = 'crimson' | 'lora' | 'merriweather' | 'garamond' | 'inter';

interface TypographyContextType {
  typography: TypographyOption;
  setTypography: (font: TypographyOption) => void;
}

const TypographyContext = createContext<TypographyContextType | undefined>(undefined);

export function TypographyProvider({ children }: { children: ReactNode }) {
  const [typography, setTypography] = useState<TypographyOption>('crimson');

  return (
    <TypographyContext.Provider value={{ typography, setTypography }}>
      {children}
    </TypographyContext.Provider>
  );
}

export function useTypography() {
  const context = useContext(TypographyContext);
  if (!context) {
    throw new Error('useTypography must be used within TypographyProvider');
  }
  return context;
}
