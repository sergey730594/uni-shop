import React from 'react';
import { Product } from '../../types';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl h-72 animate-pulse" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Товары не найдены</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
        >
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <img
              src={product.image || 'https://via.placeholder.com/300'}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {!product.inStock && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Нет в наличии
              </div>
            )}
            {product.rating && (
              <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {product.rating}
              </div>
            )}
          </div>
          
          <div className="p-4 space-y-3">
            <div>
              <div className="text-xs text-primary-600 font-medium uppercase tracking-wider">
                {product.category}
              </div>
              <h3 className="font-semibold text-gray-800 text-base mt-1 line-clamp-2">
                {product.name}
              </h3>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                {product.price.toLocaleString()} ₽
              </span>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className="p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Добавить в корзину"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
