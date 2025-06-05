import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera as CameraIcon, RefreshCw } from 'lucide-react';

interface CameraProps {
  webcamRef: React.RefObject<Webcam>;
  onCapture: () => void;
  filterClass: string;
}

const Camera: React.FC<CameraProps> = ({ webcamRef, onCapture, filterClass }) => {
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check camera permission
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        setHasPermission(true);
        setIsLoading(false);
      })
      .catch(() => {
        setHasPermission(false);
        setIsLoading(false);
      });
  }, []);

  const flipCamera = () => {
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode,
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-80 bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"></div>
        <p className="mt-4 text-pink-500">Loading camera...</p>
      </div>
    );
  }

  if (hasPermission === false) {
    return (
      <div className="flex flex-col items-center justify-center h-80 bg-gray-100 rounded-lg">
        <div className="text-red-500 text-center p-4">
          <p className="text-lg font-bold">Camera access denied</p>
          <p className="mt-2">Please allow camera access to use the photobooth</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
      <div className={`webcam-container relative ${filterClass}`}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="w-full h-auto"
        />
        <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-4">
          <button
            onClick={onCapture}
            className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            aria-label="Take photo"
          >
            <CameraIcon size={24} />
          </button>
          <button 
            onClick={flipCamera}
            className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            aria-label="Flip camera"
          >
            <RefreshCw size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Camera;