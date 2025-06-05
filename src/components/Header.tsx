import React from 'react';
import { Camera, Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Camera className="mr-2" size={24} />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Fia PhotoBooth
          </h1>
          <Heart className="ml-2 text-white fill-white animate-pulse" size={20} />
        </div>
        <p className="text-center text-white/80 text-sm mt-1">
          Take photos with  filters!
        </p>
      </div>
    </header>
  );
};

export default Header;