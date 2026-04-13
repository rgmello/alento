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
            <Link href="/" className="text-lg tracking-wide text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
              <svg width="24" height="24" viewBox="780 440 700 740" fill="currentColor" className="text-accent-foreground" preserveAspectRatio="xMidYMid meet">
                <path d="M 1448.57 461.428 C 1451.24 461.063 1451.21 460.847 1453.65 461.861 C 1359.18 542.906 1343.8 676.428 1323.65 792.394 C 1282.81 1027.42 1133.8 1149.64 894.394 1158.88 C 944.436 1010.28 1011.81 873.339 1108.83 749.558 C 1124.44 729.644 1140.75 710.284 1157.73 691.514 C 1166.93 681.378 1178.6 670.1 1187.08 659.908 L 1187.8 659.033 C 1176.71 667.362 1167.21 675.298 1156.69 684.31 C 1020.26 799.578 915.987 965.085 849.713 1129.7 C 826.646 1082.14 812.295 1030.83 807.342 978.211 C 798.62 881.148 825.515 790.382 888.816 716.382 C 1015.96 567.749 1259.03 478.346 1448.57 461.428 z"/>
              </svg>
              Alento
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
