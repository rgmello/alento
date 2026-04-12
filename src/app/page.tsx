"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shuffle } from 'lucide-react';
import { PoemDisplay } from './components/PoemDisplay';
import { getRandomPoem, Poem } from './data/poems';

export default function Home() {
  const [poem, setPoem] = useState<Poem | null>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setPoem(getRandomPoem());
  }, []);

  const handleNewPoem = () => {
    setPoem(getRandomPoem());
    setKey((prev) => prev + 1);
  };

  if (!poem) {
    return <div className="min-h-screen bg-background" />; // Retorna vazio durante a renderização no servidor para evitar Hydration Error
  }

  return (
    <div className="min-h-screen relative">
      <motion.div key={key}>
        <PoemDisplay poem={poem} />
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNewPoem}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground/70 transition-all backdrop-blur-sm border border-foreground/10"
        aria-label="Poema aleatório"
      >
        <Shuffle className="w-5 h-5" />
      </motion.button>
    </div>
  );
}