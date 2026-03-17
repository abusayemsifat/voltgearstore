const connectDB = require('./mongodb');
const Product = require('../models/Product');

const sampleProducts = [
  {
    title: 'Wireless Headphones Pro',
    shortDescription: 'Premium noise-cancelling headphones with 30hr battery life',
    fullDescription: 'Experience crystal clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable memory foam ear cushions. Perfect for immersive listening experience.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'headphones'
  },
  {
    title: 'Mechanical Keyboard K8 Pro',
    shortDescription: 'RGB mechanical keyboard with hot-swappable switches',
    fullDescription: 'Take your typing and gaming to the next level with our K8 Pro mechanical keyboard. Features hot-swappable switches, per-key RGB lighting, and a durable aluminum frame. Wireless and wired dual mode.',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907f212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'keyboards'
  },
  {
    title: 'Smart Watch Ultra',
    shortDescription: 'Advanced fitness tracker with AMOLED display',
    fullDescription: 'Track your fitness goals with precision using the Smart Watch Ultra. Features a bright AMOLED display, heart rate monitoring, GPS, and 7-day battery life. Water-resistant up to 50m.',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'watches'
  },
  {
    title: 'Gaming Mouse X5',
    shortDescription: 'Ultra-light gaming mouse with 25K DPI sensor',
    fullDescription: 'Dominate the competition with the X5 gaming mouse. Features a 25K DPI optical sensor, 8 programmable buttons, and ultra-lightweight design at only 58g. RGB lighting and PTFE feet included.',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'mice'
  },
  {
    title: 'USB-C Hub Pro',
    shortDescription: '7-in-1 multiport adapter for laptops',
    fullDescription: 'Expand your laptop connectivity with our 7-in-1 USB-C hub. Includes HDMI 4K, 3 USB 3.0 ports, SD/TF card readers, and 100W PD charging. Plug and play, no drivers needed.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'other'
  },
  {
    title: 'Portable SSD 1TB',
    shortDescription: 'Ultra-fast external SSD for creators',
    fullDescription: 'Store and transfer files at lightning speed with our portable SSD. 1TB capacity, USB 3.2 Gen 2 interface with read/write speeds up to 1050MB/s. Shock-resistant and compact design.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'other'
  },
  {
    title: '4K Webcam Pro',
    shortDescription: 'Professional 4K webcam for streaming',
    fullDescription: 'Upgrade your video calls and streams with our 4K Pro webcam. Features Sony sensor, autofocus, and dual noise-canceling microphones. Works with all major streaming platforms.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1587826080691-f33b04c63bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'other'
  },
  {
    title: 'Wireless Earbuds',
    shortDescription: 'True wireless earbuds with wireless charging',
    fullDescription: 'Enjoy true freedom with our wireless earbuds. Features active noise cancellation, 24hr total battery life with case, and wireless charging support. IPX4 water resistant.',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'headphones'
  }
];

async function seedDatabase() {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();