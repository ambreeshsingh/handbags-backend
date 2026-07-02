// handbag-backend/server.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import https from "https";
import dotenv from "dotenv";
import productRoutes from "./routes/ProductRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
// loads .env file so we can use process.env.MONGO_URI

const app = express();
// creates express server

app.use(cors());
// allows React frontend to call this backend

app.use(express.json());
// allows backend to read JSON data from requests

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
// all product APIs → /api/products
// all order APIs → /api/orders
app.use("/api/payment", paymentRoutes);//paument route

// Connect to MongoDB + Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    app.listen(8000, () => console.log("Server running on port 8000 ✅"));
  })
  .catch((err) => console.log(err));

  setInterval(() => {
    https.get("https://handbags-backend.onrender.com");
  }, 840000);