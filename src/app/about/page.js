'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaBolt, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { icon: FaUsers, value: '10K+', label: 'Happy Customers' },
    { icon: FaRocket, value: '5K+', label: 'Products Sold' },
    { icon: FaHeart, value: '4.8', label: 'Customer Rating' },
    { icon: FaBolt, value: '24/7', label: 'Support' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Voltgear</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to power up your digital life with the latest and greatest tech gadgets.
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2024, Voltgear started with a simple idea: to make cutting-edge technology 
                accessible to everyone. What began as a small online store has grown into a trusted 
                destination for tech enthusiasts worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We carefully curate every product in our collection, ensuring that each gadget meets 
                our high standards for quality, performance, and design. From wireless headphones to 
                mechanical keyboards, we bring you the best from leading brands and innovative startups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Voltgear Office"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <Icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto">
              To empower people with technology that enhances their daily lives, while providing 
              exceptional customer service and building a community of tech enthusiasts.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}