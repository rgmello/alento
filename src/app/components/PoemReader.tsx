"use client";

import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Poem } from '../data/poems';
import { PoemDisplay } from './PoemDisplay';

interface PoemReaderProps {
  poems: Poem[];
  initialIndex: number;
}

export function PoemReader({ poems, initialIndex }: PoemReaderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [key, setKey] = useState(0);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPoem = poems[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < poems.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentIndex(currentIndex - 1);
      setKey((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex(currentIndex + 1);
      setKey((prev) => prev + 1);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100;

    if (info.offset.x > threshold && hasPrevious) {
      handlePrevious();
    } else if (info.offset.x < -threshold && hasNext) {
      handleNext();
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      <motion.div
        key={key}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="cursor-grab active:cursor-grabbing md:cursor-default md:pointer-events-none"
      >
        <PoemDisplay poem={currentPoem} />
      </motion.div>

      {/* Desktop navigation buttons */}
      <div className="hidden md:block">
        {hasPrevious && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="fixed left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground/70 transition-all backdrop-blur-sm border border-foreground/10"
            aria-label="Poema anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}

        {hasNext && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="fixed right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground/70 transition-all backdrop-blur-sm border border-foreground/10"
            aria-label="Próximo poema"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </div>

      {/* Mobile swipe indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-sm border border-foreground/10"
      >
        {poems.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-foreground/70 w-6'
                : 'bg-foreground/20'
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
