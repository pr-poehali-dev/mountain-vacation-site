
import React from 'react';

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-mountain-light">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-cormorant text-4xl md:text-5xl uppercase tracking-widest mb-16 text-mountain-dark">
          Разрешение на жизнь
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Приключения */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 overflow-hidden" style={{ height: '200px' }}>
              <img 
                src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Приключения в горах" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl uppercase tracking-widest mb-3 font-cormorant font-semibold text-mountain-dark">Приключения</h3>
            <button className="border border-mountain-dark text-mountain-dark px-4 py-1.5 uppercase text-xs tracking-widest hover:bg-mountain-dark/10 transition-colors">
              Исследовать горы
            </button>
          </div>
          
          {/* Культура */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 overflow-hidden" style={{ height: '200px' }}>
              <img 
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Горная культура" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl uppercase tracking-widest mb-3 font-cormorant font-semibold text-mountain-dark">Культура</h3>
            <button className="border border-mountain-dark text-mountain-dark px-4 py-1.5 uppercase text-xs tracking-widest hover:bg-mountain-dark/10 transition-colors">
              Познать горы
            </button>
          </div>
          
          {/* Релаксация */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 overflow-hidden" style={{ height: '200px' }}>
              <img 
                src="https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Отдых в горах" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl uppercase tracking-widest mb-3 font-cormorant font-semibold text-mountain-dark">Релаксация</h3>
            <button className="border border-mountain-dark text-mountain-dark px-4 py-1.5 uppercase text-xs tracking-widest hover:bg-mountain-dark/10 transition-colors">
              Отдыхать в горах
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
