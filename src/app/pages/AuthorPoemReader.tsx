import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { getPoemsByAuthor, getPoemById } from '../data/poems';
import { PoemReader } from '../components/PoemReader';

export function AuthorPoemReader() {
  const { author, id } = useParams<{ author: string; id: string }>();

  if (!author || !id) {
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

  const poems = getPoemsByAuthor(decodeURIComponent(author));
  const poem = getPoemById(id);

  if (!poem || poems.length === 0) {
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

  const initialIndex = poems.findIndex((p) => p.id === id);

  return <PoemReader poems={poems} initialIndex={initialIndex} />;
}
