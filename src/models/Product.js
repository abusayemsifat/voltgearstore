import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide a short description'],
    maxlength: [200, 'Short description cannot be more than 200 characters'],
  },
  fullDescription: {
    type: String,
    required: [true, 'Please provide a full description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: [0, 'Price cannot be negative'],
  },
  imageUrl: {
    type: String,
    default: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop',
  },
  category: {
    type: String,
    enum: ['headphones', 'keyboards', 'smartwatches', 'mice', 'other'],
    default: 'other',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)