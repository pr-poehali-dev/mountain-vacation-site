import React from "react";

const ClosingSection: React.FC = () => {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start max-w-xl">
          <h2 className="text-white text-2xl uppercase tracking-widest font-cormorant mb-2">
            Влюбитесь
          </h2>
          <h3 className="text-white text-4xl md:text-5xl uppercase tracking-wide font-cormorant mb-8">
            В ГОРЫ
          </h3>

          <p className="text-white text-base mb-8 leading-relaxed font-light">
            Мы команда единомышленников, которые любят исследовать горы. Мы
            знаем все тропы, лучшие виды и секретные места. Позвольте нам
            показать вам настоящую красоту гор.
          </p>

          <button className="btn-outline uppercase tracking-widest text-sm">
            Спланировать путешествие
          </button>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full py-4 bg-black/30 text-white text-center text-xs z-10">
        <p>© 2025 Альтитуда. Все права защищены.</p>
      </footer>
    </section>
  );
};

export default ClosingSection;
