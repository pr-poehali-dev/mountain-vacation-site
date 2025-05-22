
import React from 'react';

const ClosingSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-mountain-green text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl uppercase font-semibold mb-4">ВЛЮБИТЕСЬ<br />В ГОРЫ</h2>
          
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Мы команда путешественников, которые любят исследовать горный мир. Мы делимся нашей страстью с теми, кто хочет открыть для себя величие и красоту природы.
          </p>
          
          <button className="btn-outline uppercase tracking-widest text-sm">
            Начать путешествие
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
