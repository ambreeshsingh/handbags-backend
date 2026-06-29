

import express from "express";
import Order from "../models/Product.js";
// handbag-backend/routes/orderRoutes.js

const router = express.Router();

// CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    // req.body = order data from frontend

    await order.save();
    // save to MongoDB

    res.status(201).json({ message: "Order placed ✅", order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    // sort → latest orders first
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET SINGLE ORDER
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;