
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519994007676-6cf3f9b397a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative h-full flex flex-col items-center justify-center z-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-3xl md:text-5xl font-cormorant uppercase tracking-wide mb-2">
            Style, Recipes, & Stories
          </h1>
          <div className="handwritten text-white text-xl md:text-3xl mb-4">from the Farm</div>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            A homesteading lifestyle blog, sharing our life from our Oklahoma farm
          </p>
          
          <Link to="/explore" className="uppercase text-white border border-white px-6 py-2 tracking-widest text-sm hover:bg-white/20 transition-colors">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
