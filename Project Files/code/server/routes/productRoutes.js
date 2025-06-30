import express from 'express';
import Product from '../models/product.js';
const router = express.Router();

// POST: Add a new product
router.post('/add', async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error while saving the product:', error);
    res.status(500).json({ message: error.message });
  }
});

// GET: Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error saving product:',error);
    res.status(500).json({ message: "Failed to save product", error: error.message });
  }
});

export { router as default };