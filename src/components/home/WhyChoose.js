'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaTruck, FaUndo, FaCreditCard } from 'react-icons/fa';

const reasons = [
  {
    icon: FaCheckCircle,
    title: 'Authentic Products',
    description: '100% genuine products directly from manufacturers',
  },
  {
    icon: FaTruck,
    title: 'Free Shipping',
    description: 'Free shipping on orders over $50',
  },
  {
    icon: FaUndo,
    title: '30-Day Returns',
    description: 'Hassle-free returns within 30 days',
  },
  {
    icon: FaCreditCard,
    title: 'Secure Payments',
    description: 'Multiple secure payment options',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Shop at Voltgear?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Experience the best online shopping with our customer-first approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
              >
                <Icon size={48} className="mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}