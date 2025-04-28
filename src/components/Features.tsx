
import { BarChart, Wrench, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Высокая эффективность",
    description: "Наши устройства обеспечивают надежное подавление и блокировку сигналов в широком диапазоне частот",
    icon: <BarChart className="h-10 w-10 text-blue-500" />
  },
  {
    id: 2,
    title: "Надежная конструкция",
    description: "Продукция разработана для долговременной эксплуатации в различных условиях, включая экстремальные",
    icon: <Wrench className="h-10 w-10 text-blue-500" />
  },
  {
    id: 3,
    title: "Современные технологии",
    description: "Применяем передовые разработки в области радиоэлектроники для создания эффективных средств защиты",
    icon: <Cpu className="h-10 w-10 text-blue-500" />
  },
  {
    id: 4,
    title: "Сертификация качества",
    description: "Вся продукция соответствует необходимым стандартам и имеет сертификаты безопасности",
    icon: <ShieldCheck className="h-10 w-10 text-blue-500" />
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Преимущества наших решений</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Разрабатываем и производим оборудование с учетом самых высоких стандартов качества
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-slate-800 p-6 rounded-lg transition-all duration-300 hover:bg-slate-700 hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
              <p className="text-slate-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
