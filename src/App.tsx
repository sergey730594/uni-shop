import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { ProductGrid } from './components/sections/ProductGrid';
import { CartDrawer } from './components/ui/CartDrawer';
import { useProducts } from './hooks/useProducts';

function HomePage() {
  const { products, loading, searchProducts } = useProducts();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={searchProducts}
        onCartOpen={() => setIsCartOpen(true)}
        onMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      <main>
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Популярные товары</h2>
            <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Смотреть все →
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
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
