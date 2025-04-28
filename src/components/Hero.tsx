import { Button } from "@/components/ui/button";
import { ShieldCheck, Radio, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 mb-6">
              <ShieldCheck className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Надежная защита информации</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Современные решения радиоэлектронной борьбы
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Разрабатываем и производим высокоэффективные системы радиоэлектронного 
              противодействия для защиты критической информации и объектов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Каталог продукции
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-700">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50 relative z-10">
              <div className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-3">
                <Radio className="w-6 h-6" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Оборудование РЭБ" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Новейшие технологии РЭБ</h3>
              <p className="text-slate-300 mb-4">
                Наши системы обеспечивают защиту от радиоэлектронной разведки и противодействие беспилотным системам.
              </p>
              <div className="flex items-center text-sm text-slate-400">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                <span>Военные и гражданские применения</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
