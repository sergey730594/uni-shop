import axios from 'axios';
import { Product } from '../types';

const API_URL = import.meta.env.VITE_BASEROW_API_URL;
const TOKEN = import.meta.env.VITE_BASEROW_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    try {
      const response = await api.get('/');
      return response.data.results || response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  getById: async (id: number): Promise<Product | null> => {
    try {
      const response = await api.get(`/${id}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  },

  getByCategory: async (category: string): Promise<Product[]> => {
    try {
      const response = await api.get(`/?category=${category}`);
      return response.data.results || response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }
  },

  search: async (query: string): Promise<Product[]> => {
    try {
      const response = await api.get(`/?search=${query}`);
      return response.data.results || response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      return [];
    }
  },
};
