'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { showToast } from '@/components/ui/Toast';
import useProducts from '@/hooks/useProducts';

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { addProduct, loading } = useProducts();
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    price: '',
    imageUrl: '',
    category: 'other',
  });

  // Redirect if not authenticated
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  if (status === 'loading') {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.shortDescription || !formData.fullDescription || !formData.price) {
      showToast.error('Please fill in all required fields');
      return;
    }

    if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      showToast.error('Please enter a valid price');
      return;
    }

    const result = await addProduct({
      ...formData,
      price: parseFloat(formData.price),
    });

    if (result.success) {
      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        price: '',
        imageUrl: '',
        category: 'other',
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h1 className="text-3xl font-bold mb-2">Add New Product</h1>
            <p className="text-gray-600 mb-8">Fill in the details to add a new product to your store</p>

            <form onSubmit={handleSubmit}>
              <Input
                label="Product Title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Wireless Headphones Pro"
                required
              />

              <Input
                label="Short Description"
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                placeholder="Brief description (max 200 characters)"
                required
              />

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="fullDescription"
                  value={formData.fullDescription}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Detailed product description"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Price ($)"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="299.99"
                  required
                  min="0"
                  step="0.01"
                />

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="headphones">Headphones</option>
                    <option value="keyboards">Keyboards</option>
                    <option value="mice">Mice</option>
                    <option value="watches">Watches</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <Input
                label="Image URL (Optional)"
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />

              <div className="flex gap-4 mt-8">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  disabled={loading}
                >
                  {loading ? 'Adding Product...' : 'Add Product'}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => router.push('/manage-products')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}