
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Shield, Radio, Zap } from "lucide-react";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold">РадиоЩит</span>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-white hover:bg-slate-800"}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:bg-slate-800">
                Продукция
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                        to="/products"
                      >
                        <Radio className="h-6 w-6 text-blue-400" />
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Все устройства
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Полный каталог средств радиоэлектронной защиты для различных задач
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem to="/products/jammers" title="Генераторы помех" icon={<Zap className="h-4 w-4 text-blue-400 mr-2" />}>
                    Системы подавления радиосигналов
                  </ListItem>
                  <ListItem to="/products/detectors" title="Детекторы" icon={<Radio className="h-4 w-4 text-blue-400 mr-2" />}>
                    Обнаружение устройств слежения
                  </ListItem>
                  <ListItem to="/products/protection" title="Защитное оборудование" icon={<Shield className="h-4 w-4 text-blue-400 mr-2" />}>
                    Комплексы защиты информации
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-white hover:bg-slate-800"}>
                  О компании
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts">
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-white hover:bg-slate-800"}>
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div>
          <Link to="/contacts" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-medium transition-colors">
            Заказать
          </Link>
        </div>
      </div>
    </header>
  );
};

interface ListItemProps {
  title: string;
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ListItem = ({ title, children, to, icon }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
        >
          <div className="flex items-center text-sm font-medium leading-none text-white">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavBar;
