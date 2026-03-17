'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Tech Enthusiast',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'The headphones I bought are absolutely amazing! The sound quality is incredible and the battery life lasts for days.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1494790108777-2961285f7c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Best mechanical keyboard I've ever used. The switches are smooth and the RGB customization is perfect.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Fitness Coach',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'The smart watch tracks my workouts perfectly. Battery lasts a whole week even with GPS on.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Voltgear
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    } mr-1`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}