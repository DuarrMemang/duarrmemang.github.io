import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ClosingSectionProps {
  isVisible: boolean;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ isVisible }) => {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowFireworks(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hearts */}
        {[...Array(12)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-pink-300/20 animate-pulse"
            size={15 + (i % 4) * 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
        
        {/* Sparkles */}
        {showFireworks && [...Array(20)].map((_, i) => (
          <Sparkles 
            key={i}
            className="absolute text-yellow-300/40 animate-ping"
            size={12 + (i % 3) * 6}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${1 + (i % 2) * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          {/* Glowing heart */}
          <div className="mb-8 flex justify-center">
            <Heart 
              className="w-20 h-20 text-pink-400 fill-pink-400 animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(244, 114, 182, 0.6))',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
            Happy Anniversary, my love 💕
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-100 font-light leading-relaxed max-w-2xl mx-auto">
            I love you forever, and I'm so thankful for you.
          </p>
        </div>

        {/* Fireworks effect */}
        {showFireworks && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                style={{
                  left: `${20 + (i * 10)}%`,
                  top: `${30 + (i * 5)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              >
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};