import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <main>
        <Hero />
        <ProductCategories />
        <Features />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/80 to-blue-700/80 relative">
          <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Заинтересованы в наших решениях?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Свяжитесь с нашими специалистами для консультации и получения подробной информации о продукции
            </p>
            <Link to="/contacts">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 h-auto">
                Запросить консультацию
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Watermark */}
      <div className="fixed bottom-6 right-6 text-white/20 font-bold text-xl">
        TSG-GROUP
      </div>
    </div>
  );
};

export default Index;
