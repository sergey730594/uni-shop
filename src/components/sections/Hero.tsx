import React from 'react';
import { ArrowRight, Zap, Truck, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Новая коллекция 2024</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Откройте мир
              <br />
              <span className="text-primary-200">уникальных товаров</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-100/90 max-w-lg">
              Современные технологии, качественные материалы и лучшие цены — всё для вашего комфорта
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl">
                Начать покупки
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">
                Узнать больше
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2 text-primary-100">
                <Truck className="w-5 h-5" />
                <span>Бесплатная доставка</span>
              </div>
              <div className="flex items-center gap-2 text-primary-100">
                <Shield className="w-5 h-5" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white/90">2024</div>
                <div className="text-xl text-primary-200 mt-2">Новая коллекция</div>
                <div className="mt-4 flex justify-center gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-primary-200">Товаров</div>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-sm text-primary-200">Рейтинг</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
