import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div 
            className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? 'animate-ken-burns' : ''}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
          </div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto pt-16">
            <span className={`text-safari-gold font-bold tracking-[0.2em] uppercase mb-4 transition-all duration-1000 delay-300 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Welcome to South Africa
            </span>
            <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-none transition-all duration-1000 delay-500 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {slide.title}
            </h1>
            <p className={`text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl drop-shadow-md font-light leading-relaxed transition-all duration-1000 delay-700 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {slide.subtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-1000 delay-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link 
                to="/tours" 
                className="px-8 py-4 bg-safari-gold hover:bg-amber-600 text-white font-bold rounded shadow-lg transition-all transform hover:-translate-y-1 text-center min-w-[180px]"
              >
                Explore Tours
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white text-white font-bold rounded shadow-lg transition-all transform hover:-translate-y-1 text-center min-w-[180px]"
              >
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-safari-gold w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce hidden md:block opacity-70 z-20 text-white">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-4 mb-8">Scroll</span>
            <div className="w-px h-12 bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;