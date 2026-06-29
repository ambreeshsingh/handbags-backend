// handbag-backend/models/Order.js

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    }
  ],
  // array of products ordered
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
    // Pending → Processing → Delivered
  },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);