import { useState, useCallback, useRef } from 'react';
import { Photo } from '../types';
import Webcam from 'react-webcam';

export const useCamera = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentFilter, setCurrentFilter] = useState('none');
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const newPhoto: Photo = {
          id: Date.now().toString(),
          src: imageSrc,
          filter: currentFilter
        };
        setPhotos(prevPhotos => [...prevPhotos, newPhoto]);
        return newPhoto;
      }
    }
    return null;
  }, [webcamRef, currentFilter]);

  const deletePhoto = useCallback((id: string) => {
    setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== id));
  }, []);

  const clearPhotos = useCallback(() => {
    setPhotos([]);
  }, []);

  const updatePhotoFilter = useCallback((id: string, filter: string) => {
    setPhotos(prevPhotos => 
      prevPhotos.map(photo => 
        photo.id === id ? { ...photo, filter } : photo
      )
    );
  }, []);

  return {
    photos,
    webcamRef,
    currentFilter,
    setCurrentFilter,
    capture,
    deletePhoto,
    clearPhotos,
    updatePhotoFilter
  };
};