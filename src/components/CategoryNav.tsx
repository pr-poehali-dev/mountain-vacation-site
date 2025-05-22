
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNav: React.FC = () => {
  return (
    <section className="py-6 bg-farm-cream border-t border-farm-light-brown/30">
      <div className="container mx-auto px-6">
        <nav className="category-nav">
          <Link to="/design">Design</Link>
          <Link to="/style">Style</Link>
          <Link to="/homesteading">Homesteading</Link>
          <Link to="/baking">Baking</Link>
        </nav>
      </div>
    </section>
  );
};

export default CategoryNav;
