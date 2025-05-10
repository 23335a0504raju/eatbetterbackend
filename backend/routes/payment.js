const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Payment = require('../models/payment'); // Import your Payment model

// Initialize Razorpay with env keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Razorpay Order
router.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ success: false, message: 'Amount is required' });
    }

    const options = {
      amount: amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);

  } catch (error) {
    console.error('❌ Error creating order:', error.message);
    res.status(500).json({ success: false, message: 'Failed to create Razorpay order' });
  }
});

// ✅ Verify Razorpay Payment
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature === razorpay_signature) {
      // ✅ Save payment details in DB
      const payment = new Payment({
        orderId: null, // Replace with actual order ID if available
        razorpayPaymentId: razorpay_payment_id,
        razorpayOrderId: razorpay_order_id,
        razorpaySignature: razorpay_signature,
        amount: req.body.amount || 0,
        status: 'completed',
      });

      await payment.save();

      res.json({
        success: true,
        message: 'Payment verified successfully',
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid signature. Payment verification failed.',
      });
    }
  } catch (error) {
    console.error('❌ Error verifying payment:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
