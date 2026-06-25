// handbag-backend/models/Product.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // name is compulsory
  },
  price: {
    type: Number,
    required: true,
    // price is compulsory
  },
  category: {
    type: String,
    required: true,
    // category is compulsory
  },
  image: {
    type: String,
    required: true,
    // image URL is compulsory
  },
  description: {
    type: String,
    default: "A premium quality handbag.",
    // optional — default value if not provided
  },
}, { timestamps: true });
// timestamps → auto adds createdAt and updatedAt fields

export default mongoose.model("Product", productSchema);
// "Product" → collection name in MongoDB will be "products"