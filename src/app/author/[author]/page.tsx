"use client";

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { getPoemsByAuthor } from '../../data/poems';

export default function AuthorPoems({ params }: { params: { author: string } }) {
  const { author: rawAuthor } = params;
  const author = decodeURIComponent(rawAuthor);
  const poems = author ? getPoemsByAuthor(author) : [];

  if (!author || poems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-muted-foreground">Autor não encontrado</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl tracking-tight text-foreground/90 mb-12"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {author}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-0"
        >
          {poems.map((poem, index) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/author/${encodeURIComponent(author)}/poem/${poem.id}`}
                className="block py-6 border-b border-foreground/10 hover:border-foreground/20 transition-colors group"
              >
                <h2 className="text-2xl tracking-tight mb-2 text-foreground/70 group-hover:text-foreground transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {poem.title}
                </h2>
                {poem.year && (
                  <span className="text-sm text-muted-foreground">{poem.year}</span>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}