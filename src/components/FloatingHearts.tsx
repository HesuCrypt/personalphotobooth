import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', x: `${heart.left}vw`, opacity: 0 }}
          animate={{ 
            y: '-20vh',
            opacity: [0, 1, 1, 0],
            scale: [1, 1.2, 1, 0.8]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute"
        >
          <Heart 
            size={heart.size} 
            className="text-pink-300 fill-pink-200 opacity-50"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;