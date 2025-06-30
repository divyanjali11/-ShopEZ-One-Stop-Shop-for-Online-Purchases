import  Product from './models/product.js';
import authRoutes from './routes/authRoutes.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import user from './models/user.js';
import orderRoutes from './routes/orderRoutes.js';
dotenv.config();
// load .env from root folder
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.get('/api', (req, res) => {

  res.json({ message: 'This is the frontend connected with the backend.' });
});

app.listen(3000, () => {
  console.log("App server is running on port 3000");
});

console.log("Mongo URI:", process.env.DRIVER_LINK);

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.DRIVER_LINK);
    console.log("Connected to your MongoDB database successfully");
  } catch (error) {
    console.log(error.message);

  }
};

connectToMongo();