import React, { useState } from 'react';
import { TOURS } from '../constants';
import TourCard from '../components/TourCard';
import { TourCategory } from '../types';

const CATEGORIES: ('All' | TourCategory)[] = ['All', 'Day Tours', 'Safari', 'Wine & Dining', 'Multi-Day Packages'];

const Tours: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | TourCategory>('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (category: 'All' | TourCategory) => {
    if (activeCategory === category) return;
    setIsAnimating(true);
    setTimeout(() => {
        setActiveCategory(category);
        setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const filteredTours = activeCategory === 'All' 
    ? TOURS 
    : TOURS.filter(tour => tour.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-safari-green py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517406856758-c99026771d5b?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Tour Packages</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            From the Cape Winelands to the Garden Route, explore our curated selection of top experiences.
          </p>
        </div>
      </div>

      {/* Filter and Grid */}
      <section className="py-16 bg-safari-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 ${
                  activeCategory === category
                    ? 'bg-safari-green text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-safari-sand hover:text-safari-green border border-transparent hover:shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour, idx) => (
                    <div key={tour.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                        <TourCard tour={tour} />
                    </div>
                ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No tours found in this category yet. Check back soon!</p>
                </div>
            )}
          </div>

          <div className="mt-16 bg-white p-10 rounded-xl shadow-lg border-l-4 border-safari-gold text-center relative overflow-hidden animate-fade-in-up delay-300">
            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-bold text-safari-green mb-4">Don't see what you're looking for?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We specialize in custom itineraries. Tell us your interests, dates, and budget, and we'll design a unique package just for you.
              </p>
              <a href="/contact" className="inline-block px-8 py-3 bg-safari-brown text-white font-bold rounded hover:bg-safari-gold transition-colors shadow-md transform hover:scale-105">
                Create Custom Package
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5 text-safari-brown">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;