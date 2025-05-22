
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-mountain-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1476611550464-5cfc9a5fca89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Горный храм" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="px-4 lg:px-8">
            <h2 className="section-title font-cormorant mb-8">МЕСТО ДЛЯ ДУШИ</h2>
            
            <p className="text-mountain-dark text-base mb-6 leading-relaxed font-montserrat font-light">
              Исследуйте горы, где каждый рассвет открывает новые удивительные виды. Величественные горные пейзажи предлагают редкую возможность найти себя и насладиться моментами истинного спокойствия.
            </p>
            
            <p className="text-mountain-dark text-base mb-6 leading-relaxed font-montserrat font-light">
              Наша команда экспертов-путешественников поможет вам выбрать идеальный тур, будь то активный треккинг, культурное погружение или спокойный отдых. Мы знаем точно, что нужно для незабываемого путешествия в горы.
            </p>
            
            <button className="border border-mountain-green text-mountain-green px-6 py-2 uppercase text-sm tracking-wider hover:bg-mountain-green/10 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
