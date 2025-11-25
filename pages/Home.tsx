import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { FEATURE_HIGHLIGHTS, TOURS, TESTIMONIALS, TRUST_STATS } from '../constants';
import TourCard from '../components/TourCard';
import HeroSlider from '../components/HeroSlider';

const Home: React.FC = () => {
  const holidayPackages = TOURS.filter(t => t.category === 'Multi-Day Packages');
  const popularDayTours = TOURS.filter(t => t.category !== 'Multi-Day Packages').slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Trust Stats Bar */}
      <div className="bg-safari-green text-white py-12 border-b border-white/10 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-2 hover:transform hover:-translate-y-1 transition-transform duration-300">
                <stat.icon size={32} className="text-safari-gold mb-3" />
                <span className="text-3xl font-bold font-serif mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-safari-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-safari-brown font-bold tracking-widest uppercase text-sm">The Experience</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-safari-green mt-2 mb-4">Why Travel With Us?</h2>
            <div className="w-20 h-1 bg-safari-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURE_HIGHLIGHTS.map((feature, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 opacity-0 animate-fade-in-up`} style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-16 h-16 bg-safari-sand rounded-full flex items-center justify-center mx-auto mb-6 text-safari-brown group-hover:bg-safari-gold group-hover:text-white transition-colors duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Packages Section */}
      {holidayPackages.length > 0 && (
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-safari-sand/30 -skew-x-12 transform translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in-up">
               <div>
                  <span className="text-safari-gold font-bold tracking-widest uppercase text-sm">Extended Adventures</span>
                  <h2 className="font-serif text-4xl font-bold text-safari-green mt-2">Holiday Packages</h2>
                  <p className="text-gray-600 mt-2 max-w-xl">Immersive multi-day itineraries designed to show you the very best of South Africa.</p>
               </div>
               <Link to="/tours" className="hidden md:flex items-center text-safari-brown hover:text-safari-gold font-bold transition-colors group mt-4 md:mt-0">
                  View All Packages <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {holidayPackages.map((tour, idx) => (
                 <div key={tour.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                    <TourCard tour={tour} />
                 </div>
               ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/tours" className="text-safari-brown font-bold flex justify-center items-center">
                View All Packages <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Popular Day Tours */}
      <section className="py-24 bg-safari-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 animate-fade-in-up">
            <div>
              <span className="text-safari-brown font-bold tracking-widest uppercase text-sm">Day Trips</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-safari-green mt-2">Popular Excursions</h2>
              <p className="text-gray-600 mt-2">Perfect for travelers with limited time.</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center text-safari-brown hover:text-safari-gold font-bold transition-colors group">
              View All Tours <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDayTours.map((tour, idx) => (
              <div key={tour.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/tours" className="inline-block px-6 py-3 border-2 border-safari-green text-safari-green font-bold rounded hover:bg-safari-green hover:text-white transition-colors">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-24 relative bg-safari-green overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-up">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-safari-gold rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop" 
                alt="Safari Jeep" 
                className="rounded-lg shadow-2xl border-4 border-white/20 relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-xl hidden md:block z-20 max-w-xs transform hover:scale-105 transition-transform duration-300">
                <p className="font-serif text-safari-green text-lg italic">"We don't just show you Africa, we help you feel it."</p>
              </div>
            </div>
            <div className="text-white animate-fade-in-up delay-200">
              <span className="text-safari-gold font-bold tracking-widest uppercase text-sm">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 mt-2">Authentic. Safe. Memorable.</h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                We are a passionate touring company based in the heart of Cape Town. 
                Our mission is to show you the real Africa, from the rugged coastlines 
                of the Cape Peninsula to the majestic wildlife of the bush.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-safari-gold rounded-full"></div>
                  <span>Personalized itineraries tailored to your needs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-safari-gold rounded-full"></div>
                  <span>Registered and experienced local guides</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-safari-gold rounded-full"></div>
                  <span>Luxury vehicles for ultimate comfort</span>
                </li>
              </ul>
              <Link to="/about" className="inline-block bg-safari-gold hover:bg-amber-600 text-white px-8 py-3 rounded font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-safari-brown font-bold tracking-widest uppercase text-sm">Reviews</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-safari-green mt-2 mb-4">Guest Experiences</h2>
            <div className="w-20 h-1 bg-safari-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={testimonial.id} className="bg-safari-sand p-8 rounded-xl shadow-sm relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="absolute top-0 right-0 p-8 opacity-10 text-safari-brown">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.953 14.941 15.172C15.557 14.39 16.516 13.665 17.817 12.997V11.002C16.828 11.232 15.938 11.666 15.147 12.305C14.356 12.943 13.96 13.843 13.96 15V21H14.017ZM8.017 21L8.017 18C8.017 16.896 8.325 15.953 8.941 15.172C9.557 14.39 10.516 13.665 11.817 12.997V11.002C10.828 11.232 9.938 11.666 9.147 12.305C8.356 12.943 7.96 13.843 7.96 15V21H8.017Z" /></svg>
                </div>
                <div className="flex text-safari-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-bold text-safari-green">{testimonial.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-safari-brown text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">Ready to start your journey?</h2>
            <p className="text-lg mb-10 text-amber-100 max-w-2xl mx-auto animate-fade-in-up delay-100">Let us help you plan the perfect South African getaway. No hidden fees, just pure adventure.</p>
            <Link to="/contact" className="inline-block bg-white text-safari-brown hover:bg-gray-100 font-bold px-12 py-5 rounded shadow-xl transition-all hover:scale-105 uppercase tracking-widest text-sm animate-fade-in-up delay-200">
              Request a Quote
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;