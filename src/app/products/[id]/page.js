'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaStar } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { showToast } from '@/components/ui/Toast';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      
      if (res.ok) {
        setProduct(data.product);
      } else {
        showToast.error('Product not found');
        router.push('/products');
      }
    } catch (error) {
      showToast.error('Failed to fetch product');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Product not found</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Products
            </Link>
          </motion.div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-96 lg:h-full"
              >
                <img
                  src={product.imageUrl || 'https://via.placeholder.com/800x600?text=Voltgear+Product'}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-12"
              >
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-600">(4.8) · 128 reviews</span>
                  </div>

                  <p className="text-gray-600 mb-6">{product.shortDescription}</p>
                </div>

                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      Category: {product.category || 'Other'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="primary" className="flex-1">
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Buy Now
                    </Button>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="text-sm text-gray-500">
                  <p>Product ID: {product._id}</p>
                  <p>Added: {new Date(product.createdAt).toLocaleDateString()}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}