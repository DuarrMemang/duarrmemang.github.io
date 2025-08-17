import React, { useRef, useEffect } from 'react';
import { LandingSection } from './components/LandingSection';
import { TimelineSection } from './components/TimelineSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetterSection } from './components/LoveLetterSection';
import { PromisesSection } from './components/PromisesSection';
import { MapSection } from './components/MapSection';
import { ClosingSection } from './components/ClosingSection';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  // Refs for each section
  const landingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const promisesRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  const isLandingVisible = useIntersectionObserver(landingRef, { threshold: 0.3 });
  const isTimelineVisible = useIntersectionObserver(timelineRef, { threshold: 0.2 });
  const isGalleryVisible = useIntersectionObserver(galleryRef, { threshold: 0.2 });
  const isLetterVisible = useIntersectionObserver(letterRef, { threshold: 0.3 });
  const isPromisesVisible = useIntersectionObserver(promisesRef, { threshold: 0.2 });
  const isMapVisible = useIntersectionObserver(mapRef, { threshold: 0.2 });
  const isClosingVisible = useIntersectionObserver(closingRef, { threshold: 0.3 });

  // Background music effect
  useEffect(() => {
    // Note: In a real implementation, you would add background music here
    // For demo purposes, we'll just add a comment
    // const audio = new Audio('/path-to-your-special-song.mp3');
    // audio.loop = true;
    // audio.volume = 0.3;
    // audio.play().catch(console.log); // Auto-play requires user interaction in modern browsers
  }, []);

  return (
    <div className="font-sans antialiased overflow-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #be185d);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #db2777, #9d174d);
        }
      `}</style>

      {/* Landing Section */}
      <div ref={landingRef}>
        <LandingSection isVisible={isLandingVisible} />
      </div>

      {/* Timeline Section */}
      <div ref={timelineRef}>
        <TimelineSection isVisible={isTimelineVisible} />
      </div>

      {/* Photo Gallery */}
      <div ref={galleryRef}>
        <PhotoGallery isVisible={isGalleryVisible} />
      </div>

      {/* Love Letter Section */}
      <div ref={letterRef}>
        <LoveLetterSection isVisible={isLetterVisible} />
      </div>

      {/* Promises Section */}
      <div ref={promisesRef}>
        <PromisesSection isVisible={isPromisesVisible} />
      </div>

      {/* Map Section */}
      <div ref={mapRef}>
        <MapSection isVisible={isMapVisible} />
      </div>

      {/* Closing Section */}
      <div ref={closingRef}>
        <ClosingSection isVisible={isClosingVisible} />
      </div>
    </div>
  );
}

export default App;