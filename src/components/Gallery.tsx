import React from 'react';
import { Trash2 } from 'lucide-react';
import { Photo } from '../types';
import { filters } from '../data/filters';

interface GalleryProps {
  photos: Photo[];
  onDeletePhoto: (id: string) => void;
  onUpdateFilter: (id: string, filter: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ photos, onDeletePhoto, onUpdateFilter }) => {
  if (photos.length === 0) {
    return (
      <div className="mt-6 bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">No photos taken yet! Use the camera to take some cute photos.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-pink-600 mb-3">Your Photos</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="relative group">
            <div className={`aspect-square rounded-lg overflow-hidden border-4 border-white shadow-md ${
              filters.find(f => f.id === photo.filter)?.class || ''
            }`}>
              <img
                src={photo.src}
                alt="Captured"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={() => onDeletePhoto(photo.id)}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105"
                aria-label="Delete photo"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <select 
                value={photo.filter}
                onChange={(e) => onUpdateFilter(photo.id, e.target.value)}
                className="bg-transparent text-white text-xs border-0 focus:ring-0 cursor-pointer"
              >
                {filters.map(filter => (
                  <option key={filter.id} value={filter.id} className="bg-gray-800 text-white">
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;