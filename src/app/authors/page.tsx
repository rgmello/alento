"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { getAuthors } from '../data/poems';

export default function Authors() {
  const authors = getAuthors();

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
          className="text-4xl md:text-5xl tracking-tight mb-12 text-foreground/90"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Autores
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-0"
        >
          {authors.map((author, index) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/author/${encodeURIComponent(author)}`}
                className="block py-6 border-b border-foreground/10 hover:border-foreground/20 transition-colors group"
              >
                <h2 className="text-2xl tracking-tight text-foreground/70 group-hover:text-foreground transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {author}
                </h2>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}