import React from 'react';
import { MapPin } from 'lucide-react';

interface MapSectionProps {
  isVisible: boolean;
}

export const MapSection: React.FC<MapSectionProps> = ({ isVisible }) => {
  const locations = [
    {
      name: "DBL",
      description: "Where we first crossed paths 💕",
      position: { top: '30%', left: '25%' },
      color: "bg-rose-500"
    },
    {
      name: "Gachi",
      description: "Our first date, where it all began 💫",
      position: { top: '50%', left: '50%' },
      color: "bg-purple-500"
    },
    {
      name: "Japan",
      description: "A trip that will always live in my heart ✈️",
      position: { top: '40%', left: '75%' },
      color: "bg-pink-500"
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">Places in Our Hearts</h2>
          <p className="text-lg text-gray-600 font-light">Every location holds a special memory</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
          {/* Stylized world map */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden">
            {/* Decorative map background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-blue-200 via-transparent to-green-200"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100 to-transparent"></div>
            </div>

            {/* Location pins */}
            {locations.map((location, index) => (
              <div 
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={location.position}
              >
                {/* Pin */}
                <div className={`${location.color} w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-all duration-300 cursor-pointer`}>
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                
                {/* Pulse animation */}
                <div className={`absolute inset-0 ${location.color} rounded-full animate-ping opacity-30`}></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-xs text-gray-300">{location.description}</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Location cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {locations.map((location, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${location.color} mb-3`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};