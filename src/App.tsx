import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import PhotoboothApp from './components/PhotoboothApp';
import FloatingHearts from './components/FloatingHearts';
import './styles/filters.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 relative overflow-hidden">
        <FloatingHearts />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/photobooth" element={<PhotoboothApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;