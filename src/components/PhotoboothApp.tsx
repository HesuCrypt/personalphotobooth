import { useState } from 'react';
import { useCamera } from '../hooks/useCamera';
import Camera from './Camera';
import Filters from './Filters';
import Gallery from './Gallery';
import PhotoStrip from './PhotoStrip';
import Header from './Header';
import Footer from './Footer';
import { filters } from '../data/filters';
import { motion } from 'framer-motion';

function PhotoboothApp() {
  const {
    photos,
    webcamRef,
    currentFilter,
    setCurrentFilter,
    capture,
    deletePhoto,
    updatePhotoFilter
  } = useCamera();
  
  const [showFlash, setShowFlash] = useState(false);

  const handleCapture = () => {
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 500);
    capture();
  };

  const currentFilterClass = filters.find(f => f.id === currentFilter)?.class || '';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50"
    >
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-5 shadow-lg backdrop-blur-sm bg-white/90">
            <motion.h2 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-center text-pink-600 mb-6"
            >
              Take Photos & Create Photostrips!
            </motion.h2>
            
            <div className="relative">
              <Camera 
                webcamRef={webcamRef} 
                onCapture={handleCapture} 
                filterClass={currentFilterClass} 
              />
              {showFlash && <div className="camera-flash" />}
            </div>
            
            <Filters 
              currentFilter={currentFilter} 
              onFilterChange={setCurrentFilter} 
            />
            
            <Gallery 
              photos={photos} 
              onDeletePhoto={deletePhoto}
              onUpdateFilter={updatePhotoFilter} 
            />
            
            {photos.length >= 2 && (
              <PhotoStrip photos={photos} />
            )}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </motion.div>
  );
}

export default PhotoboothApp;