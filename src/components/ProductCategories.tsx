
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Radio, Shield, Zap, Smartphone, Wifi, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-500 text-blue-400">Наша продукция</Badge>
          <h2 className="text-3xl font-bold mb-6">Системы радиоэлектронной борьбы</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Разрабатываем и производим передовые системы РЭБ для различных сфер применения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
                <Radio className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle>Комплексы радиоподавления</CardTitle>
              <CardDescription className="text-slate-400">
                Системы блокирования радиосигналов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <Wifi className="w-4 h-4 mr-2 text-blue-400" />
                  Подавление GSM, 3G, 4G, 5G
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-blue-400" />
                  Противодействие БПЛА
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                  Защита объектов инфраструктуры
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/products/jammers" className="w-full">
                <Button variant="ghost" className="w-full border border-slate-700 hover:bg-slate-700">
                  Подробнее
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle>Средства защиты информации</CardTitle>
              <CardDescription className="text-slate-400">
                Предотвращение утечек данных
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2 text-blue-400" />
                  Блокираторы сотовой связи
                </li>
                <li className="flex items-center">
                  <Wifi className="w-4 h-4 mr-2 text-blue-400" />
                  Подавители Wi-Fi и Bluetooth
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                  Комплексная защита помещений
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/products/protection" className="w-full">
                <Button variant="ghost" className="w-full border border-slate-700 hover:bg-slate-700">
                  Подробнее
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle>Обнаружители устройств слежения</CardTitle>
              <CardDescription className="text-slate-400">
                Поиск и нейтрализация закладок
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <Radio className="w-4 h-4 mr-2 text-blue-400" />
                  Детекторы скрытых камер
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-blue-400" />
                  Поисковые комплексы
                </li>
                <li className="flex items-center">
                  <Wifi className="w-4 h-4 mr-2 text-blue-400" />
                  Обнаружители радиопередатчиков
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/products/detectors" className="w-full">
                <Button variant="ghost" className="w-full border border-slate-700 hover:bg-slate-700">
                  Подробнее
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Смотреть все категории
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
