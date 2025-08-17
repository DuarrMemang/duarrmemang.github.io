import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoGalleryProps {
  isVisible: boolean;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    {
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "That smile I'll never get tired of 💖"
    },
    {
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Us, just being ourselves 🌸"
    },
    {
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Every little adventure with you feels magical ✨"
    },
    {
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Forever my favorite person ❤️"
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">Our Memories</h2>
          <p className="text-lg text-gray-600 font-light">Every picture tells our story</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
            {/* Photo container */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {photos.map((photo, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-xl overflow-hidden">
                      <img 
                        src={photo.url} 
                        alt={`Memory ${index + 1}`}
                        className="w-full h-80 md:h-96 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-8 text-center">
              <p className="text-xl font-light text-gray-700 italic">
                {photos[currentIndex].caption}
              </p>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-pink-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};