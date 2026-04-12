"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { path: '/', label: 'Início' },
    { path: '/search', label: 'Buscar' },
    { path: '/authors', label: 'Autores' },
    { path: '/settings', label: 'Configurações' },
  ];

  const showBackButton = pathname !== '/';

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={() => router.back()}
                className="p-2 rounded-full hover:bg-muted/50 transition-colors text-foreground/60 hover:text-foreground"
                aria-label="Voltar"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <Link href="/" className="text-lg tracking-wide text-foreground/80 hover:text-foreground transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
              Poemas
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors text-foreground/60 hover:text-foreground"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-6xl tracking-tight transition-colors ${
                      pathname === link.path
                        ? 'text-foreground'
                        : 'text-foreground/40 hover:text-foreground/70'
                    }`}
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
