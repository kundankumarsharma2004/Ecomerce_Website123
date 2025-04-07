// Import dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

// Import configs and routes
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js"; // ✅ ADD THIS

// Configure environment
dotenv.config();

// Database connection
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Server listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
