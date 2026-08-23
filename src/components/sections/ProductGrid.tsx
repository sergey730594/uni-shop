import React from 'react';
import { ProductLocalized } from '../../types';
import { ShoppingCart, Star, Check, Package } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useLanguage } from '../../context/LanguageContext';

interface ProductGridProps {
  products: ProductLocalized[];
  loading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  const { addToCart } = useCart();
  const { language } = useLanguage();

  const getCategoryLabel = () => {
    const labels = {
      ka: 'კატეგორია',
      en: 'Category',
      ru: 'Категория',
      tr: 'Kategori'
    };
    return labels[language];
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
            <div className="aspect-square bg-gray-200"></div>
            <div className="p-3 sm:p-4 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-8 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12 sm:py-20">
        <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-base sm:text-lg">
          {language === 'ka' ? 'პროდუქტები არ მოიძებნა' :
           language === 'en' ? 'No products found' :
           language === 'ru' ? 'Товары не найдены' :
           'Ürün bulunamadı'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 flex flex-col"
        >
          {/* Изображение */}
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <img
              src={product.image || 'https://placehold.co/400x400/3b82f6/white?text=Product'}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {!product.in_stock && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
                {language === 'ka' ? 'არ არის' :
                 language === 'en' ? 'Out of stock' :
                 language === 'ru' ? 'Нет в наличии' :
                 'Stokta yok'}
              </div>
            )}
            {product.rating && product.rating > 0 && (
              <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-lg flex items-center gap-0.5 sm:gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {product.rating.toFixed(1)}
              </div>
            )}
          </div>
          
          {/* Информация */}
          <div className="p-2.5 sm:p-4 flex-1 flex flex-col">
            <div className="flex-1 space-y-1 sm:space-y-2">
              <div className="text-[10px] sm:text-xs text-primary-600 font-medium uppercase tracking-wider truncate">
                {product.category}
              </div>
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2">
                {product.name}
              </h3>
            </div>
            
            <div className="flex items-center justify-between mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
              <span className="text-sm sm:text-base font-bold text-gray-900">
                {product.price.toLocaleString()} ₽
              </span>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.in_stock}
                className="p-1.5 sm:p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Добавить в корзину"
              >
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};