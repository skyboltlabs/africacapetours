import React from 'react';
import { Clock, MessageCircle } from 'lucide-react';
import { TourPackage } from '../types';
import { COMPANY_WHATSAPP } from '../constants';

interface TourCardProps {
  tour: TourPackage;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const whatsappLink = `https://wa.me/${COMPANY_WHATSAPP}?text=Hi, I would like to enquire about the ${tour.title}.`;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={tour.imageUrl} 
          alt={tour.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute top-4 left-4 z-20 bg-white/90 text-safari-green text-xs font-bold px-3 py-1 rounded-sm shadow-sm backdrop-blur-sm uppercase tracking-wide">
          {tour.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex items-center text-safari-brown text-xs font-bold uppercase tracking-wider mb-2 gap-1">
          <Clock size={14} />
          <span>{tour.duration}</span>
        </div>
        
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-safari-green transition-colors duration-300">
          {tour.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {tour.shortDescription}
        </p>

        {/* Highlights Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tour.highlights.slice(0, 2).map((highlight, idx) => (
             <span key={idx} className="text-xs bg-safari-sand text-gray-600 px-2 py-1 rounded border border-gray-200">
                {highlight}
             </span>
          ))}
          {tour.highlights.length > 2 && (
            <span className="text-xs bg-safari-sand text-gray-600 px-2 py-1 rounded border border-gray-200">
              +{tour.highlights.length - 2} more
            </span>
          )}
        </div>

        <div className="border-t border-gray-100 pt-4 mt-auto">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-safari-green hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded transition-colors shadow-sm hover:shadow-md"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;