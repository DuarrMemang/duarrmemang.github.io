import React from 'react';
import { Heart } from 'lucide-react';

interface LandingSectionProps {
  isVisible: boolean;
}

export const LandingSection: React.FC<LandingSectionProps> = ({ isVisible }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i}
            className={`absolute text-pink-200/30 animate-pulse`}
            size={20 + (i % 3) * 10}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-pink-600 mb-6 leading-tight">
            Hi, my love 💕
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            I made this little place just for us, to celebrate our journey together.
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};