import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Razorpay instance banao
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// CREATE ORDER
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    // amount frontend se aayega

    const options = {
      amount: amount * 100,
      // Razorpay amount paisa mein leta hai
      // ₹1299 → 129900 paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      // unique receipt id
    };

    const order = await razorpay.orders.create(options);
    // Razorpay pe order create karo

    res.json(order);
    // order id frontend ko bhejo
  } catch (error) {
    res.status(500).json({ message: "Payment error", error });
  }
});

export default router;