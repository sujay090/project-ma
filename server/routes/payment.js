const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
require("dotenv").config();
const razorpay = new Razorpay({
  key_id: process.env.API_KEY, // Replace with your Razorpay Key ID
  key_secret: process.env.KEY_SECRET, // Replace with your Razorpay Secret
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // Razorpay expects the amount in paisa (multiply by 100)
    currency: "INR",
    receipt: "receipt#1",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({ orderId: order.id });
  } catch (error) {
    res.status(500).json({ message: "Error creating Razorpay order", error });
  }
});

module.exports = router;
