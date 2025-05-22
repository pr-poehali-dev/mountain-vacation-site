
import React from 'react';
import { Link } from 'react-router-dom';

const InfoSection: React.FC = () => {
  return (
    <section className="py-10 bg-mountain-light/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80" 
              alt="Mountain cabin" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="px-4 lg:px-12 py-8">
            <h2 className="text-3xl md:text-4xl text-mountain-medium font-cormorant mb-6 uppercase tracking-wider">
              A Place to Be
            </h2>
            
            <p className="text-mountain-medium leading-relaxed mb-6">
              In the rugged beauty that lies at these elevations, 
              the invigorating weather, the breathtaking vistas, 
              the endless paths to explore and trails to scale make 
              the space a place for everyone.
            </p>
            
            <p className="text-mountain-medium leading-relaxed mb-8">
              Let our team of expert mountain guides help you by 
              creating that whether you want to plan a hiking holiday, 
              to find inner peace in a meditation retreat, we know 
              exactly how to start planning your dream trip to the mountains.
            </p>
            
            <Link to="/learn" className="border border-mountain-medium text-mountain-medium text-xs uppercase tracking-wider px-4 py-2 hover:bg-mountain-medium hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
