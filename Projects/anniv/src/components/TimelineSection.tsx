import React from 'react';
import { MapPin, Heart, Plane } from 'lucide-react';

interface TimelineSectionProps {
  isVisible: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isVisible }) => {
  const milestones = [
    {
      title: "DBL 2023",
      description: "The first time we met — a moment that changed everything",
      icon: Heart,
      color: "text-rose-500",
      bgColor: "bg-rose-100"
    },
    {
      title: "Gachi",
      description: "Our first date — where I knew you were special to me",
      icon: MapPin,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      title: "Japan",
      description: "One of our biggest adventures together — memories I'll never forget",
      icon: Plane,
      color: "text-pink-500",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-pink-50 to-purple-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 font-light">Every step has led us here</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-rose-300 via-purple-300 to-pink-300 transform md:-translate-x-1/2"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative mb-16 transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 ${milestone.bgColor} border-4 border-white rounded-full transform md:-translate-x-1/2 z-10 shadow-lg`}></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${milestone.bgColor} mb-4`}>
                      <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                    </div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};