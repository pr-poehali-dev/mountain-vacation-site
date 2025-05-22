
import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500586094511-ec910ee15693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-farm-green/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl ml-10 md:ml-20">
          <p className="handwritten text-2xl md:text-3xl text-farm-cream italic leading-relaxed">
            I believe in the simple life, in getting back to our roots, and helping others do the same.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
