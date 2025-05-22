
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import InfoSection from '../components/InfoSection';
import ClosingSection from '../components/ClosingSection';
import CategoryNav from '../components/CategoryNav';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-mountain-cream">
      <Navbar />
      <Hero />
      <Categories />
      <InfoSection />
      <ClosingSection />
      <CategoryNav />
    </div>
  );
};

export default Index;
