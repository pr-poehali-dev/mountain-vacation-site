
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import InfoSection from '../components/InfoSection';
import ClosingSection from '../components/ClosingSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <InfoSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
