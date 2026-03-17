'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/400x300?text=Voltgear+Product'}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
        
        <Link href={`/products/${product._id}`}>
          <Button variant="primary" className="w-full">
            <FaEye className="mr-2" />
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}