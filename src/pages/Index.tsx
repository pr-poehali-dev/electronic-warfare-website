
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main>
        <Hero />
        <ProductCategories />
        <Features />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Заинтересованы в наших решениях?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Свяжитесь с нашими специалистами для консультации и получения подробной информации о продукции
            </p>
            <a 
              href="/contacts" 
              className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Запросить консультацию
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
