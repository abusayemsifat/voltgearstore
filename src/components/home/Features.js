'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaHeadphones, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: FaRocket,
    title: 'Fast Delivery',
    description: 'Get your gadgets delivered within 24-48 hours',
    color: 'blue',
  },
  {
    icon: FaShieldAlt,
    title: '2 Year Warranty',
    description: 'All products come with extended warranty coverage',
    color: 'green',
  },
  {
    icon: FaHeadphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your needs',
    color: 'purple',
  },
  {
    icon: FaBolt,
    title: 'Premium Quality',
    description: 'Hand-picked products from top brands worldwide',
    color: 'orange',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Voltgear</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience for tech enthusiasts
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center group cursor-pointer"
              >
                <div className={`inline-block p-4 rounded-full bg-${feature.color}-100 text-${feature.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}