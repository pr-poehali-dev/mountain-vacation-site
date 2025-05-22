
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative h-full flex flex-col items-center justify-center z-20 text-center">
        <div className="container-custom px-6">
          <h2 className="text-white text-2xl md:text-3xl font-cormorant uppercase tracking-wide mb-2">
            It's time to
          </h2>
          <h1 className="text-white text-5xl md:text-7xl font-cormorant uppercase tracking-wide mb-6">
            Visit Mountains
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Crave new adventures, mystical experiences and breathtaking views? You need to visit the mountains. We make sure that you'll get an experience you'll never forget.
          </p>
          
          <Link to="/offers" className="btn-secondary">
            Our Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
