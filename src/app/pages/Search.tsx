import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { searchPoems, Poem } from '../data/poems';

export function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Poem[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length > 1) {
      setResults(searchPoems(value));
    } else {
      setResults([]);
    }
  };

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
          Buscar Poemas
        </motion.h1>

        <motion.input
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Digite título ou trecho do poema..."
          className="w-full px-6 py-4 bg-transparent border-b border-foreground/20 focus:border-foreground/40 outline-none text-lg text-foreground/80 placeholder:text-foreground/30 transition-colors"
          autoFocus
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 space-y-6"
        >
          {results.length > 0 && (
            <p className="text-sm text-muted-foreground mb-8">
              {results.length} {results.length === 1 ? 'poema encontrado' : 'poemas encontrados'}
            </p>
          )}

          {results.map((poem, index) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                to={`/poem/${poem.id}`}
                className="block py-6 border-b border-foreground/10 hover:border-foreground/20 transition-colors group"
              >
                <h2 className="text-2xl tracking-tight mb-2 text-foreground/80 group-hover:text-foreground transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {poem.title}
                </h2>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-sm">{poem.author}</span>
                  {poem.year && (
                    <>
                      <span className="opacity-40">·</span>
                      <span className="text-sm">{poem.year}</span>
                    </>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}

          {query.trim().length > 1 && results.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              Nenhum poema encontrado
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
