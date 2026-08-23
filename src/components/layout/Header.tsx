import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Globe, ChevronDown, Home } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useLanguage, languageNames } from '../../context/LanguageContext';
import { Language } from '../../types';

interface HeaderProps {
  onSearch: (query: string) => void;
  onCartOpen: () => void;
  onMenuOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, onCartOpen, onMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const { language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'ka', label: '🇬🇪 ქართული' },
    { code: 'en', label: '🇬🇧 English' },
    { code: 'ru', label: '🇷🇺 Русский' },
    { code: 'tr', label: '🇹🇷 Türkçe' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setIsLangOpen(false);
  };

  const getPlaceholder = () => {
    const placeholders = {
      ka: 'მოძებნეთ პროდუქტები...',
      en: 'Search products...',
      ru: 'Поиск товаров...',
      tr: 'Ürünleri ara...'
    };
    return placeholders[language] || placeholders.en;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          {/* Левая часть: Меню + Лого */}
          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <button
              onClick={onMenuOpen}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden flex-shrink-0"
              aria-label="Меню"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">U</span>
              </div>
              <span className="font-bold text-base sm:text-xl text-gray-800 hidden xs:block truncate max-w-[100px] sm:max-w-none">
                UniShop
              </span>
            </Link>
          </div>

          {/* Поиск - по центру, адаптивный */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-4">
            <div className="relative">
              <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={getPlaceholder()}
                className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-xs sm:text-sm bg-gray-50 hover:bg-white transition-colors"
              />
            </div>
          </form>

          {/* Правая часть: Язык + Корзина */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Переключатель языков */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-0.5 sm:gap-1"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                <span className="hidden sm:inline text-xs font-medium text-gray-700">
                  {language.toUpperCase()}
                </span>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 hidden sm:block" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-scale-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-gray-50 transition-colors ${
                        language === lang.code ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Корзина */}
            <button
              onClick={onCartOpen}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
              aria-label="Корзина"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-bold px-1">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};