
import React from 'react';

const ClosingSection: React.FC = () => {
  return (
    <section className="relative h-[60vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-mountain-dark/50"></div>
      
      <div className="relative h-full flex items-center z-10">
        <div className="container-custom">
          <div className="max-w-md text-white">
            <h2 className="text-3xl md:text-4xl font-cormorant uppercase tracking-wider mb-4">
              Влюблены<br />в Горы
            </h2>
            <p className="text-sm leading-relaxed">
              Мы — пара любителей высокогорья, которые любят исследовать альпийский мир. Свежий воздух, 
              панорамные виды и чувство достижения, когда вы достигаете вершины — 
              это моменты, ради которых мы живем и которыми хотим поделиться с вами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
