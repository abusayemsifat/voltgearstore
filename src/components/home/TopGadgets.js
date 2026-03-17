'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const gadgets = [
  {
    id: 1,
    name: 'Wireless Headphones Pro',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$299',
    rating: 4.8,
    description: 'Premium noise-cancelling headphones',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907f212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$159',
    rating: 4.9,
    description: 'RGB mechanical gaming keyboard',
  },
  {
    id: 3,
    name: 'Smart Watch Ultra',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$399',
    rating: 4.7,
    description: 'Fitness tracker with AMOLED display',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '$79',
    rating: 4.6,
    description: 'Ultra-light gaming mouse',
  },
];

export default function TopGadgets() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Gadgets This Week</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most popular products loved by our customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gadgets.map((gadget, index) => (
            <motion.div
              key={gadget.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={gadget.image}
                  alt={gadget.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {gadget.rating} ⭐
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{gadget.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{gadget.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{gadget.price}</span>
                  <Link href={`/products/${gadget.id}`}>
                    <Button variant="primary" className="!px-4 !py-2">
                      <FaShoppingCart className="mr-2" />
                      Buy
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="primary">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}