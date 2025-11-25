import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, COMPANY_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navClass = `fixed w-full z-40 transition-all duration-300 ${
    scrolled ? 'bg-safari-green shadow-lg py-2' : 'bg-transparent py-4 bg-gradient-to-b from-black/50 to-transparent'
  }`;

  const textColor = scrolled || location.pathname !== '/' ? 'text-white' : 'text-white';
  
  // If not on home page, always use solid background
  const finalNavClass = location.pathname !== '/' ? 'bg-safari-green shadow-lg py-2 fixed w-full z-40' : navClass;

  return (
    <nav className={finalNavClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl font-bold tracking-wider ${textColor}`}>
            AFRICA CAPE <span className="text-safari-gold">TOURS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest hover:text-safari-gold transition-colors ${textColor} ${location.pathname === link.path ? 'text-safari-gold border-b-2 border-safari-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 bg-safari-brown hover:bg-safari-gold text-white px-4 py-2 rounded text-sm transition-colors">
              <Phone size={16} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${textColor} hover:text-safari-gold focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-safari-green text-white absolute w-full shadow-xl border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 text-base font-medium hover:bg-safari-brown rounded uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/20">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 bg-safari-gold text-white px-4 py-3 rounded w-full font-bold">
                <Phone size={18} />
                Call {COMPANY_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;