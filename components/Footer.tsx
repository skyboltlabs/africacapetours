import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-safari-green text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wider">
              AFRICA CAPE <span className="text-safari-gold">TOURS</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Curating unforgettable experiences across Cape Town and the Western Cape. Authentic, safe, and adventurous.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-safari-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-safari-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-safari-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-safari-gold shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-safari-gold shrink-0" />
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-safari-gold shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;