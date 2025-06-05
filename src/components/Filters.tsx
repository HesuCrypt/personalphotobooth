import React from 'react';
import { filters } from '../data/filters';

interface FiltersProps {
  currentFilter: string;
  onFilterChange: (filterId: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-pink-600 mb-3">Filters</h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`relative rounded-lg overflow-hidden transition-all ${
              currentFilter === filter.id 
                ? 'ring-4 ring-pink-500 transform scale-105' 
                : 'hover:ring-2 hover:ring-pink-300'
            }`}
          >
            <div className={`aspect-square w-full ${filter.class}`}>
              <img 
                src={filter.preview} 
                alt={filter.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs py-1 text-center">
              {filter.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;