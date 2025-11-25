import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';

const CATEGORIES: ('All' | GalleryImage['category'])[] = ['All', 'Wildlife', 'Scenery', 'City', 'Activities'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20 bg-white min-h-screen">
       {/* Header */}
       <div className="bg-safari-green py-20 text-center text-white mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Moments Captured</h1>
            <p className="text-gray-300 mt-2 text-lg">A glimpse into the beauty that awaits you.</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-1 ${
                  activeCategory === category
                    ? 'bg-safari-brown text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(img)}
                className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-md cursor-pointer bg-gray-100 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${(idx % 5) * 100}ms` }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={32} className="mx-auto mb-2 opacity-80" />
                    <span className="font-serif tracking-widest text-lg block">{img.category}</span>
                    <span className="text-xs text-gray-300 uppercase">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
       </div>

       {/* Lightbox Modal */}
       {selectedImage && (
         <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
         >
           <button 
             onClick={() => setSelectedImage(null)}
             className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
           >
             <X size={40} />
           </button>
           
           <div 
             className="max-w-6xl max-h-[90vh] relative animate-fade-in-up"
             onClick={(e) => e.stopPropagation()}
           >
             <img 
               src={selectedImage.src} 
               alt={selectedImage.alt} 
               className="max-w-full max-h-[85vh] rounded shadow-2xl mx-auto"
             />
             <div className="mt-4 text-center text-white">
                <h3 className="font-serif text-xl md:text-2xl">{selectedImage.alt}</h3>
                <span className="text-sm text-safari-gold uppercase tracking-wider font-bold mt-1 block">{selectedImage.category}</span>
             </div>
           </div>
         </div>
       )}
    </div>
  );
};

export default Gallery;