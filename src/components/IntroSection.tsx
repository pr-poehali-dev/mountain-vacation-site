
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <section className="py-16 bg-farm-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="rounded-full border border-farm-green p-1 mb-4">
            <div className="rounded-full bg-farm-green text-farm-cream text-xs px-3 py-1 uppercase tracking-widest">meet me</div>
          </div>
          <h2 className="handwritten text-2xl text-farm-black mb-1">Welcome, Friend!</h2>
          <h3 className="text-farm-green text-4xl md:text-5xl font-cormorant mb-6">HEY, I'M ETTA!</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex gap-4">
            <div className="w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                alt="Etta in kitchen" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1532640342830-577b77ec96c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                alt="Etta in garden" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="px-4 lg:px-8">
            <p className="text-farm-black text-center md:text-left mb-6 leading-relaxed">
              Farmer. Baker. Interior Designer. Anne of Green Gables wannabe. I'm here to take you along with me as we explore homesteading, sustainable style, farm-to-table recipes, and stories from our little farmhouse... together.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <Link to="/my-story" className="btn-primary">
                My Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
