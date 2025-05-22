
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import QuoteSection from '../components/QuoteSection';
import CategoryNav from '../components/CategoryNav';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <QuoteSection />
      <CategoryNav />
    </div>
  );
};

export default Index;
