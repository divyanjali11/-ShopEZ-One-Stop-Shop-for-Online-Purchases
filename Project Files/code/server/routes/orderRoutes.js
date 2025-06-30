import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { userDetails, products } = req.body;

  console.log('Order Received:', {
    user: userDetails,
    items: products,
  });

  // Here, you can save order to MongoDB (optional)
  res.status(201).json({ message: 'Order placed successfully!' });
});

export default router;