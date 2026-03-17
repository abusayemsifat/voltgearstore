'use client';

import { useState, useEffect } from 'react';
import { showToast } from '@/components/ui/Toast';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/products');
      const data = await res.json();
      
      if (res.ok) {
        setProducts(data.products);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData) => {
    try {
      setLoading(true);
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setProducts([data.product, ...products]);
        showToast.success('Product added successfully!');
        return { success: true, product: data.product };
      } else {
        showToast.error(data.error || 'Failed to add product');
        return { success: false };
      }
    } catch (err) {
      showToast.error('Failed to add product');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        setProducts(products.filter(p => p._id !== id));
        showToast.success('Product deleted successfully!');
        return { success: true };
      } else {
        const data = await res.json();
        showToast.error(data.error || 'Failed to delete product');
        return { success: false };
      }
    } catch (err) {
      showToast.error('Failed to delete product');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    deleteProduct,
  };
}