import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h3 className="text-white text-xl md:text-2xl font-cormorant uppercase tracking-widest mb-2">
              Время отправиться
            </h3>
            <h1 className="text-white text-5xl md:text-7xl font-cormorant mb-6">
              В ГОРЫ
            </h1>
            <p className="text-white text-base mb-8 leading-relaxed font-light">
              Откройте для себя захватывающие приключения, мистические
              впечатления и расслабляющий отдых. Вам нужно посетить горы. Мы
              гарантируем, что вы получите незабываемые впечатления.
            </p>
            <button className="btn-outline uppercase tracking-widest text-sm">
              Наши предложения
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
