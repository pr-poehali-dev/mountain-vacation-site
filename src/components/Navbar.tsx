
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-5">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-cormorant tracking-widest uppercase">
          Montaña
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/pricing" className="text-white text-sm uppercase tracking-wider hover:text-white/80 transition-colors">
            Pricing
          </Link>
          <Link to="/visit" className="text-white text-sm uppercase tracking-wider hover:text-white/80 transition-colors">
            Visit
          </Link>
          <Link to="/about" className="text-white text-sm uppercase tracking-wider hover:text-white/80 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-white text-sm uppercase tracking-wider hover:text-white/80 transition-colors">
            Contact
          </Link>
        </nav>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
