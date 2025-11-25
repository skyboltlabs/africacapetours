import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-safari-sand py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 relative animate-fade-in-up">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-safari-gold/20 rounded-full blur-3xl"></div>
              <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=600" className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-8 z-10 hover:scale-[1.02] transition-transform duration-500" alt="Cape Town" />
              <img src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=600" className="rounded-lg shadow-xl w-full h-64 object-cover z-10 hover:scale-[1.02] transition-transform duration-500" alt="Safari" />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up delay-200">
              <span className="text-safari-brown font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-safari-green mt-2 mb-6">Passionate About Africa</h1>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Founded in the heart of Cape Town, Africa Cape Tours & Adventures was born from a deep love for the African continent and a desire to share its magic with the world.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are a new, boutique touring company focusing on quality over quantity. Unlike mass-market operators, we take the time to get to know our guests, ensuring every itinerary is personalized. Whether you're a solo adventurer, a couple on honeymoon, or a family seeking connection, we craft journeys that leave a lasting legacy.
              </p>

              <div className="border-l-4 border-safari-gold pl-6 py-2 bg-white/50 rounded-r">
                <p className="italic text-gray-800 font-serif text-lg">"Travel is not just about seeing new places, it's about feeling them."</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white p-12 rounded-2xl shadow-sm animate-fade-in-up delay-300">
            <div className="text-center mb-12">
               <h2 className="font-serif text-3xl font-bold text-safari-green">Our Core Values</h2>
               <div className="w-16 h-1 bg-safari-gold mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-4 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-14 h-14 bg-safari-sand rounded-full flex items-center justify-center mx-auto mb-4 text-safari-brown">
                    <Heart size={28} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Passion First</h3>
                 <p className="text-gray-600 text-sm">We don't just sell tours; we share our passion for the land, the people, and the wildlife.</p>
              </div>
              <div className="text-center p-4 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-14 h-14 bg-safari-sand rounded-full flex items-center justify-center mx-auto mb-4 text-safari-brown">
                    <Users size={28} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Personal Connection</h3>
                 <p className="text-gray-600 text-sm">We treat every guest like family, ensuring you feel safe, heard, and cared for.</p>
              </div>
              <div className="text-center p-4 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-14 h-14 bg-safari-sand rounded-full flex items-center justify-center mx-auto mb-4 text-safari-brown">
                    <Globe size={28} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                 <p className="text-gray-600 text-sm">We are committed to ethical tourism that protects our heritage and uplifts local communities.</p>
              </div>
               <div className="text-center p-4 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-14 h-14 bg-safari-sand rounded-full flex items-center justify-center mx-auto mb-4 text-safari-brown">
                    <Award size={28} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Excellence</h3>
                 <p className="text-gray-600 text-sm">From luxury vehicles to expert guides, we never compromise on quality.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;