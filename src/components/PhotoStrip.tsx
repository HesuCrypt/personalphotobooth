import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { Photo } from '../types';
import { filters } from '../data/filters';
import { toPng } from 'html-to-image';

interface PhotoStripProps {
  photos: Photo[];
}

const PhotoStrip: React.FC<PhotoStripProps> = ({ photos }) => {
  const photoStripRef = useRef<HTMLDivElement>(null);

  const downloadPhotoStrip = async () => {
    if (photoStripRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(photoStripRef.current, { quality: 0.95 });
      
      const link = document.createElement('a');
      link.download = `sanrio-photostrip-${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating photostrip:', error);
    }
  };

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-pink-600">Your Photo Strip</h3>
        <button
          onClick={downloadPhotoStrip}
          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
          disabled={photos.length === 0}
        >
          <Download size={18} />
          <span>Download</span>
        </button>
      </div>
      
      <div className="flex justify-center">
        <div 
          ref={photoStripRef} 
          className="bg-white p-6 rounded-lg shadow-lg max-w-xs border-8 border-pink-200"
          style={{ 
            backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="1" fill="%23FFB6C1" opacity="0.5"/></svg>')`,
            backgroundSize: '20px 20px'
          }}
        >
          <div className="text-center mb-4">
            <h4 className="text-2xl font-bold text-pink-600" style={{ fontFamily: 'cursive' }}>Fia PhotoBooth</h4>
            <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="space-y-4">
            {photos.slice(0, 4).map((photo, index) => (
              <div 
                key={photo.id} 
                className={`rounded-lg overflow-hidden border-4 border-white shadow-md ${
                  filters.find(f => f.id === photo.filter)?.class || ''
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '0.5s',
                  animationFillMode: 'both',
                  animationName: 'fadeIn',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                <img
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">♡ Made with love ♡</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoStrip;