
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Radio, Shield, Zap } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Подавители радиосигналов",
    description: "Блокираторы и генераторы помех для защиты от прослушивания и отслеживания",
    icon: <Zap className="h-8 w-8 mb-2 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/jammers"
  },
  {
    id: 2,
    title: "Детекторы сигналов",
    description: "Оборудование для обнаружения подслушивающих устройств и скрытых камер",
    icon: <Radio className="h-8 w-8 mb-2 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/detectors"
  },
  {
    id: 3,
    title: "Защита информации",
    description: "Комплексные системы для обеспечения информационной безопасности",
    icon: <Shield className="h-8 w-8 mb-2 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/protection"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Наша продукция</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Поставляем широкий спектр оборудования для радиоэлектронной борьбы и защиты информации
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="group">
              <Card className="h-full overflow-hidden bg-slate-700 border-slate-600 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-center">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-white text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-center">
                    {category.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pb-4">
                  <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    Подробнее →
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
