import React from 'react';
import { ArrowRight, Zap, Truck, Shield, Star, Package } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ka: {
      badge: '🔥 ახალი კოლექცია 2024',
      title: 'აღმოაჩინეთ უნიკალური',
      titleHighlight: 'პროდუქტების სამყარო',
      subtitle: 'თანამედროვე ტექნოლოგიები, ხარისხიანი მასალები და საუკეთესო ფასები',
      buttonPrimary: 'იყიდე ახლავე',
      buttonSecondary: 'გაიგე მეტი',
      features: ['უფასო მიწოდება', 'ხარისხის გარანტია', '24/7 მხარდაჭერა'],
      stats: ['50+ პროდუქტი', '4.8 ★ რეიტინგი']
    },
    en: {
      badge: '🔥 New Collection 2024',
      title: 'Discover the World of',
      titleHighlight: 'Unique Products',
      subtitle: 'Modern technology, quality materials, and the best prices for you',
      buttonPrimary: 'Shop Now',
      buttonSecondary: 'Learn More',
      features: ['Free Delivery', 'Quality Guarantee', '24/7 Support'],
      stats: ['50+ Products', '4.8 ★ Rating']
    },
    ru: {
      badge: '🔥 Новая коллекция 2024',
      title: 'Откройте мир',
      titleHighlight: 'уникальных товаров',
      subtitle: 'Современные технологии, качественные материалы и лучшие цены',
      buttonPrimary: 'Купить сейчас',
      buttonSecondary: 'Узнать больше',
      features: ['Бесплатная доставка', 'Гарантия качества', 'Поддержка 24/7'],
      stats: ['50+ Товаров', '4.8 ★ Рейтинг']
    },
    tr: {
      badge: '🔥 Yeni Koleksiyon 2024',
      title: 'Benzersiz Ürünlerin',
      titleHighlight: 'Dünyasını Keşfedin',
      subtitle: 'Modern teknoloji, kaliteli malzemeler ve en iyi fiyatlar',
      buttonPrimary: 'Şimdi Alışveriş Yap',
      buttonSecondary: 'Daha Fazla',
      features: ['Ücretsiz Teslimat', 'Kalite Garantisi', '7/24 Destek'],
      stats: ['50+ Ürün', '4.8 ★ Puan']
    }
  };

  const t = content[language];

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка - Текст */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t.badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.title}
              <br />
              <span className="text-primary-200">{t.titleHighlight}</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100/90 max-w-lg mx-auto lg:mx-0">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
                {t.buttonPrimary}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-white/30 transition-all text-sm sm:text-base">
                {t.buttonSecondary}
              </button>
            </div>

            {/* Фичи */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-2">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-primary-100 text-xs sm:text-sm">
                  {index === 0 ? <Truck className="w-4 h-4 sm:w-5 sm:h-5" /> : 
                   index === 1 ? <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> : 
                   <Package className="w-4 h-4 sm:w-5 sm:h-5" />}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - Карточка */}
          <div className="hidden lg:block relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10 p-6 md:p-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white/90">2024</div>
                <div className="text-lg md:text-xl text-primary-200 mt-1">New Collection</div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold">50+</div>
                    <div className="text-xs md:text-sm text-primary-200">Products</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-1">
                      4.8
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="text-xs md:text-sm text-primary-200">Rating</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-sm text-primary-200">🔥 Limited Offer</div>
                  <div className="text-2xl font-bold text-white">-20%</div>
                  <div className="text-xs text-primary-200">on first order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};