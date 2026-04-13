"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type FontSizeOption = 'small' | 'base' | 'large';

interface FontSizeContextType {
  fontSize: FontSizeOption;
  setFontSize: (size: FontSizeOption) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSizeOption>('base');

  useEffect(() => {
    const root = document.documentElement;
    // Padrão em Tailwind é 16px.
    // Usaremos 14px para 'Pequeno', 16px para 'Padrão' e 18px para 'Grande'.
    if (fontSize === 'small') {
      root.style.setProperty('--font-size', '14px');
    } else if (fontSize === 'large') {
      root.style.setProperty('--font-size', '18px');
    } else {
      root.style.setProperty('--font-size', '16px');
    }
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within FontSizeProvider');
  }
  return context;
}
