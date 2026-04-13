"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { getPoemById, Poem } from '../../data/poems';
import { PoemDisplay } from '../../components/PoemDisplay';

export default function PoemPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [poem, setPoem] = useState<Poem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPoemById(id).then((data) => {
        setPoem(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-muted-foreground">Poema não encontrado</p>
        </motion.div>
      </div>
    );
  }

  return <PoemDisplay poem={poem} />;
}