"use client";

import { motion } from 'motion/react';
import { Poem } from '../data/poems';
import { useTypography } from '../contexts/TypographyContext';

interface PoemDisplayProps {
  poem: Poem;
}

export function PoemDisplay({ poem }: PoemDisplayProps) {
  const { typography } = useTypography();
  const fontFamily = `var(--font-${typography})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen px-8 py-24 md:px-16 md:py-32"
    >
      <div className="max-w-2xl w-full space-y-8 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          <h1 className="text-3xl md:text-5xl tracking-tight text-foreground/90" style={{ fontFamily }}>
            {poem.title}
          </h1>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="text-sm md:text-base">{poem.author}</span>
            {poem.year && (
              <>
                <span className="opacity-40">·</span>
                <span className="text-sm md:text-base">{poem.year}</span>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-1 pt-6"
        >
          {poem.verses.map((verse, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.03, duration: 0.4 }}
              className={`text-lg md:text-xl leading-relaxed ${
                verse === '' ? 'h-6' : 'text-foreground/80'
              }`}
              style={{ fontFamily }}
            >
              {verse}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
