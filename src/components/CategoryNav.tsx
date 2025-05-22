
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNav: React.FC = () => {
  return (
    <section className="py-4 bg-mountain-medium text-white">
      <div className="container-custom">
        <div className="flex justify-center items-center space-x-4 md:space-x-8 text-xs md:text-sm uppercase tracking-wider">
          <Link to="/hiking" className="hover:text-white/80 transition-colors">Походы</Link>
          <span>/</span>
          <Link to="/lodging" className="hover:text-white/80 transition-colors">Проживание</Link>
          <span>/</span>
          <Link to="/adventure" className="hover:text-white/80 transition-colors">Приключения</Link>
          <span>/</span>
          <Link to="/photography" className="hover:text-white/80 transition-colors">Фотография</Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
