"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shuffle } from 'lucide-react';
import { PoemDisplay } from './components/PoemDisplay';
import { getShuffledPoemIds, getPoemById, Poem } from './data/poems';

interface PoemState {
  current: Poem | null;
  queue: string[];
}

export default function Home() {
  const [poemState, setPoemState] = useState<PoemState>({ current: null, queue: [] });
  const [key, setKey] = useState(0);

  const initQueue = async () => {
    const ids = await getShuffledPoemIds();
    if (ids.length > 0) {
      const firstPoem = await getPoemById(ids[0]);
      setPoemState({
        current: firstPoem,
        queue: ids.slice(1),
      });
    }
  };

  useEffect(() => {
    initQueue();
  }, []);

  const handleNewPoem = async () => {
    let nextQueue = [...poemState.queue];
    
    if (nextQueue.length === 0) {
      nextQueue = await getShuffledPoemIds();
      
      if (poemState.current && nextQueue.length > 1 && nextQueue[0] === poemState.current.id) {
        [nextQueue[0], nextQueue[1]] = [nextQueue[1], nextQueue[0]];
      }
    }
    
    const nextId = nextQueue.shift()!;
    const nextPoem = await getPoemById(nextId);
    
    setPoemState({
      current: nextPoem,
      queue: nextQueue,
    });
    setKey((prev) => prev + 1);
  };

  if (!poemState.current) {
    return <div className="min-h-screen bg-background" />; // Retorna vazio durante a renderização no servidor para evitar Hydration Error
  }

  return (
    <div className="min-h-screen relative">
      <motion.div key={key}>
        <PoemDisplay poem={poemState.current} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none pb-8 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNewPoem}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground/70 transition-all backdrop-blur-sm border border-foreground/10 pointer-events-auto"
            aria-label="Poema aleatório"
          >
            <Shuffle className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}