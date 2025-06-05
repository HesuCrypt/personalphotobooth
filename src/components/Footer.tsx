import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-100 py-4 mt-12">
      <div className="container mx-auto text-center text-pink-600 text-sm">
        <p className="flex items-center justify-center">
          Made with <Heart className="mx-1 text-pink-500 fill-pink-500" size={14} /> in 2025
        </p>
        <p className="mt-1 text-xs text-pink-400">
          Sanrio-Style PhotoBooth | Fun photos for everyone
        </p>
      </div>
    </footer>
  );
};

export default Footer;