const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const seedProduct = require('./utils/seedProduct');

const app = express();
const PORT = process.env.PORT || 1000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/payment');

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/product', productRoutes);
app.use('/api', cartRoutes);
app.use('/api/payment', paymentRoutes);

// Connect MongoDB first, then start server
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected successfully');

    // Seed data
    await seedProduct();

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handling
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});
