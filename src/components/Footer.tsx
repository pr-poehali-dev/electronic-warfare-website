
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">РадиоЩит</span>
            </div>
            <p className="text-slate-400 mb-4">
              Разработка и производство профессиональных средств радиоэлектронной борьбы и защиты информации
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} РадиоЩит. Все права защищены.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/jammers" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Подавители сигналов
                </Link>
              </li>
              <li>
                <Link to="/products/detectors" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Детекторы сигналов
                </Link>
              </li>
              <li>
                <Link to="/products/protection" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Защита информации
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Все продукты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-slate-400">
              <li>г. Москва, ул. Радиотехническая, 15</li>
              <li>Телефон: +7 (495) 123-45-67</li>
              <li>Email: info@radio-shield.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
