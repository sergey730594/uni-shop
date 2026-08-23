import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { ProductGrid } from './components/sections/ProductGrid';
import { CartDrawer } from './components/ui/CartDrawer';
import { useProducts } from './hooks/useProducts';
import { useLanguage } from './context/LanguageContext';

function HomePage() {
  const { products, loading, searchProducts } = useProducts();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  const getTitle = () => {
    const titles = {
      ka: 'პოპულარული პროდუქტები',
      en: 'Popular Products',
      ru: 'Популярные товары',
      tr: 'Popüler Ürünler'
    };
    return titles[language] || titles.en;
  };

  const getViewAll = () => {
    const texts = {
      ka: 'ყველას ნახვა →',
      en: 'View All →',
      ru: 'Смотреть все →',
      tr: 'Hepsini Gör →'
    };
    return texts[language] || texts.en;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={searchProducts}
        onCartOpen={() => setIsCartOpen(true)}
        onMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      <main>
        <Hero />
        
        <section className="container-custom section-padding">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {getTitle()}
            </h2>
            <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm sm:text-base">
              {getViewAll()}
            </button>
          </div>
          
          <ProductGrid products={products} loading={loading} />
        </section>
      </main>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </CartProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;