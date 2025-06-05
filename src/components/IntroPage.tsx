import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400" />
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Fia Photobooth</h1>
          <div className="flex justify-center items-center gap-2">
            <Heart className="text-pink-500 fill-pink-500" size={24} />
            <span className="text-xl text-gray-600">Your own personal photobooth</span>
            <Heart className="text-pink-500 fill-pink-500" size={24} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose text-center mx-auto mb-8"
        >
          <p className="text-gray-700 leading-relaxed">
            I created this special photobooth just for you, knowing how much joy you find in capturing beautiful moments. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            Let's create memories together 
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/photobooth')}
            className="group relative inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-pink-600 hover:scale-105 hover:shadow-lg"
          >
            <Camera className="group-hover:animate-bounce" size={24} />
            Start Taking Photos
            <Heart className="group-hover:animate-ping" size={20} />
          </button>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400" />
      </motion.div>
    </div>
  );
};

export default IntroPage;