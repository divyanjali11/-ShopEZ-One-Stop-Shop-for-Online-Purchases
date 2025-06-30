import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  mainImg: String, 
  carousel: [String], // Array of image URLs
  sizes: [String],       // Array of sizes (e.g., S, M, L)
  gender: String,         // For example: "Men", "Women", "Unisex"
  discount: Number
});

const product = mongoose.model('Product', productSchema);
export default product;