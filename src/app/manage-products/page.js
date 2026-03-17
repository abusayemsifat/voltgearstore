'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaEye, FaTrash, FaPlus } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { showToast } from '@/components/ui/Toast';
import useProducts from '@/hooks/useProducts';

export default function ManageProductsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { products, loading, deleteProduct } = useProducts();
  const [deletingId, setDeletingId] = useState(null);

  // Redirect if not authenticated
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  if (status === 'loading' || loading) {
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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setDeletingId(id);
      const result = await deleteProduct(id);
      setDeletingId(null);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Manage Products</h1>
              <p className="text-gray-600">View and manage all your products</p>
            </div>
            <Link href="/add-product">
              <Button variant="primary">
                <FaPlus className="mr-2" />
                Add New Product
              </Button>
            </Link>
          </div>

          {/* Products Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date Added</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {products.map((product, index) => (
                      <motion.tr
                        key={product._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img
                              src={product.imageUrl || 'https://via.placeholder.com/50'}
                              alt={product.title}
                              className="w-10 h-10 rounded-lg object-cover mr-3"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{product.title}</p>
                              <p className="text-sm text-gray-500 line-clamp-1">
                                {product.shortDescription}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-semibold text-blue-600">
                            ${product.price}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {product.category || 'Other'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                                                    {new Date(product.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-end space-x-2">
                            <Link href={`/products/${product._id}`}>
                              <button
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="View Product"
                              >
                                <FaEye />
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(product._id)}
                              disabled={deletingId === product._id}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                              title="Delete Product"
                            >
                              {deletingId === product._id ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                              ) : (
                                <FaTrash />
                              )}
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
                <Link href="/add-product">
                  <Button variant="primary">Add Your First Product</Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}