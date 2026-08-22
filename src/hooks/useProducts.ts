import { useState, useEffect } from 'react';
import { productApi } from '../api/baserow';
import { Product } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await productApi.getAll();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Не удалось загрузить товары');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProducts = async (query: string) => {
    if (!query.trim()) {
      await fetchProducts();
      return;
    }
    setLoading(true);
    try {
      const data = await productApi.search(query);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Ошибка поиска');
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, searchProducts, refetch: fetchProducts };
};
