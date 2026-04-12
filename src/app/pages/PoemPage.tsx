import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { getPoemById } from '../data/poems';
import { PoemDisplay } from '../components/PoemDisplay';

export function PoemPage() {
  const { id } = useParams<{ id: string }>();
  const poem = id ? getPoemById(id) : undefined;

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
