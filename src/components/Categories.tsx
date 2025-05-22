
import React from 'react';

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-mountain-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">СВОБОДА ЖИТЬ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Категория 1 */}
          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Приключения" 
              className="w-full h-64 object-cover"
            />
            <div className="category-content flex flex-col items-center">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 text-center">Приключения</h3>
              <button className="border border-white text-white text-xs px-4 py-2 uppercase tracking-wider hover:bg-white/20 transition-colors">
                Исследовать горы
              </button>
            </div>
          </div>
          
          {/* Категория 2 */}
          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1633709454768-7d7bfe0280bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Культура" 
              className="w-full h-64 object-cover"
            />
            <div className="category-content flex flex-col items-center">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 text-center">Культура</h3>
              <button className="border border-white text-white text-xs px-4 py-2 uppercase tracking-wider hover:bg-white/20 transition-colors">
                Понять традиции
              </button>
            </div>
          </div>
          
          {/* Категория 3 */}
          <div className="category-card">
            <img 
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
              alt="Релаксация" 
              className="w-full h-64 object-cover"
            />
            <div className="category-content flex flex-col items-center">
              <h3 className="text-white text-xl uppercase tracking-wide mb-4 text-center">Релаксация</h3>
              <button className="border border-white text-white text-xs px-4 py-2 uppercase tracking-wider hover:bg-white/20 transition-colors">
                Отдохнуть в горах
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
