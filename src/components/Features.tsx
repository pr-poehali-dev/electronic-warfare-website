
import { Shield, Clock, Award, Wrench, Building, BookOpen } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Почему выбирают нас</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Более 15 лет разрабатываем и производим системы радиоэлектронной защиты
            для государственных и коммерческих организаций
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Высокая надежность</h3>
            <p className="text-slate-300">
              Наше оборудование успешно эксплуатируется в самых суровых условиях, 
              гарантируя бесперебойную работу и выполнение задач.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
              <Building className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Собственное производство</h3>
            <p className="text-slate-300">
              Полный цикл разработки и производства на территории России. 
              Все комплектующие проходят строгий контроль качества.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Сертифицированная продукция</h3>
            <p className="text-slate-300">
              Все оборудование сертифицировано и соответствует требованиям 
              государственных стандартов в области безопасности.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
              <Wrench className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Техническая поддержка</h3>
            <p className="text-slate-300">
              Предоставляем полное техническое сопровождение, обучение персонала 
              и гарантийное обслуживание всей нашей продукции.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Научная база</h3>
            <p className="text-slate-300">
              Сотрудничаем с ведущими научно-исследовательскими институтами 
              для внедрения новейших технологий в наши разработки.
            </p>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Оперативные сроки</h3>
            <p className="text-slate-300">
              Обеспечиваем выполнение заказов в минимальные сроки благодаря 
              отлаженным производственным процессам и большому опыту.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
