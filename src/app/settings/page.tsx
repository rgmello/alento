"use client";

import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useTypography, TypographyOption } from '../contexts/TypographyContext';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { typography, setTypography } = useTypography();

  const typographyOptions: { id: TypographyOption; label: string; description: string }[] = [
    { id: 'crimson', label: 'Crimson Pro', description: 'Clássica e delicada (Padrão)' },
    { id: 'lora', label: 'Lora', description: 'Contemporânea com excelente legibilidade' },
    { id: 'merriweather', label: 'Merriweather', description: 'Proporções largas, ótima para leitura' },
    { id: 'garamond', label: 'EB Garamond', description: 'Estilo atemporal e histórico' },
    { id: 'inter', label: 'Inter', description: 'Visual limpo, moderno e sem serifa' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen px-8 py-24 md:px-16 md:py-32"
    >
      <div className="max-w-2xl w-full space-y-12 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          <h1 className="text-3xl md:text-5xl tracking-tight text-foreground/90" style={{ fontFamily: 'var(--font-serif)' }}>
            Configurações
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Personalize sua experiência de leitura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-medium tracking-tight text-foreground/80" style={{ fontFamily: 'var(--font-sans)' }}>Tema</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setTheme('light')}
              className={`p-4 rounded-xl border text-left transition-all ${
                theme === 'light' 
                  ? 'border-foreground/50 bg-foreground/5 ring-1 ring-foreground/20' 
                  : 'border-border hover:border-foreground/30 hover:bg-muted/30'
              }`}
            >
              <div className="font-medium mb-1">Claro</div>
              <div className="text-sm text-muted-foreground">Fundo branco com texto escuro</div>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-4 rounded-xl border text-left transition-all ${
                theme === 'dark' 
                  ? 'border-foreground/50 bg-foreground/5 ring-1 ring-foreground/20' 
                  : 'border-border hover:border-foreground/30 hover:bg-muted/30'
              }`}
            >
              <div className="font-medium mb-1">Escuro</div>
              <div className="text-sm text-muted-foreground">Fundo escuro com texto claro</div>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-medium tracking-tight text-foreground/80" style={{ fontFamily: 'var(--font-sans)' }}>Tipografia dos Poemas</h2>
          <div className="grid grid-cols-1 gap-4">
            {typographyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setTypography(option.id)}
                className={`p-5 rounded-xl border text-left transition-all flex flex-col gap-2 ${
                  typography === option.id 
                    ? 'border-foreground/50 bg-foreground/5 ring-1 ring-foreground/20' 
                    : 'border-border hover:border-foreground/30 hover:bg-muted/30'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 md:gap-0 w-full">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md w-fit">{option.description}</div>
                </div>
                <div 
                  className="text-lg md:text-xl text-foreground/80 mt-2 line-clamp-1" 
                  style={{ fontFamily: `var(--font-${option.id})` }}
                >
                  A vida é um poema que se escreve a cada instante.
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}