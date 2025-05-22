
import React from 'react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-mountain-light/20">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl text-mountain-medium font-cormorant mb-16 uppercase tracking-wider">
          Лицензия на Жизнь
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Приключения */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden mb-6 w-full">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Горный поход" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-mountain-medium text-xl uppercase tracking-widest mb-4 font-cormorant">
              Приключения
            </h3>
            <Link to="/explore" className="border border-mountain-medium text-mountain-medium text-xs uppercase tracking-wider px-4 py-2 hover:bg-mountain-medium hover:text-white transition-colors">
              Исследовать горы
            </Link>
          </div>
          
          {/* Культура */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden mb-6 w-full">
              <img 
                src="https://images.unsplash.com/photo-1547636780-e41778614c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Горная деревня" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-mountain-medium text-xl uppercase tracking-widest mb-4 font-cormorant">
              Культура
            </h3>
            <Link to="/understand" className="border border-mountain-medium text-mountain-medium text-xs uppercase tracking-wider px-4 py-2 hover:bg-mountain-medium hover:text-white transition-colors">
              Понять горы
            </Link>
          </div>
          
          {/* Релаксация */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden mb-6 w-full">
              <img 
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                alt="Горный отдых" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-mountain-medium text-xl uppercase tracking-widest mb-4 font-cormorant">
              Релаксация
            </h3>
            <Link to="/relax" className="border border-mountain-medium text-mountain-medium text-xs uppercase tracking-wider px-4 py-2 hover:bg-mountain-medium hover:text-white transition-colors">
              Отдохнуть в горах
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
