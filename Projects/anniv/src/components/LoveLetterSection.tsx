import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface LoveLetterSectionProps {
  isVisible: boolean;
}

export const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({ isVisible }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  return (
    <section className={`py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">From My Heart</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-rose-200/20 to-pink-200/20 rounded-full translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light italic mb-8">
                "My love, every day with you feels like a gift… I love you more than words can ever say, 
                and I'll keep proving that every single day."
              </p>
            </div>

            {/* Hidden heart element */}
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setIsHeartClicked(true)}
                className="group relative"
              >
                <Heart 
                  className={`w-16 h-16 transition-all duration-300 ${
                    isHeartClicked 
                      ? 'text-pink-500 fill-pink-500 scale-110' 
                      : 'text-pink-300 hover:text-pink-400 hover:scale-110'
                  }`}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))',
                    animation: isHeartClicked ? 'none' : 'pulse 2s ease-in-out infinite'
                  }}
                />
                
                {/* Glowing effect */}
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  isHeartClicked ? 'bg-pink-400/20 scale-150' : 'bg-pink-300/10 scale-100'
                } blur-xl`}></div>
              </button>
            </div>

            {/* Hidden message */}
            <div className={`mt-8 text-center transition-all duration-700 ${
              isHeartClicked 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <p className="text-lg text-pink-600 italic font-medium">
                P.S. You're my forever. Thank you for being my everything 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};