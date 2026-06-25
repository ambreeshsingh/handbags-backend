// import express from "express";
// const router = express.Router();

// // placeholder route
// router.get("/", (req, res) => {
//   res.json({ message: "Product routes working ✅" });
// });

// export default router;

// handbag-backend/models/Product.js
// handbag-backend/routes/productRoutes.js

import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    // find() → gets all products from MongoDB
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET SINGLE PRODUCT BY ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // findById() → finds product by MongoDB _id
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ADD NEW PRODUCT
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    // req.body → data sent from frontend or Postman
    
    await product.save();
    // saves to MongoDB
    
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;