import React from 'react';
import { Heart, Globe, Home } from 'lucide-react';

interface PromisesSectionProps {
  isVisible: boolean;
}

export const PromisesSection: React.FC<PromisesSectionProps> = ({ isVisible }) => {
  const promises = [
    {
      icon: Heart,
      emoji: "❤️",
      text: "I promise to always support and love you through everything.",
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      icon: Globe,
      emoji: "🌍",
      text: "I can't wait for all the adventures we'll share in the future.",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Home,
      emoji: "🏡",
      text: "One day, we'll build our home and our forever together.",
      color: "text-green-500",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">My Promises to You</h2>
          <p className="text-lg text-gray-600 font-light">For today, tomorrow, and always</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${promise.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{promise.emoji}</span>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700 font-light">
                  {promise.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};