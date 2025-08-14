// Import necessary libraries
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// --- Middleware ---

// Enable CORS for all routes, allowing the frontend to communicate with the backend
app.use(cors());

// Enable the app to parse JSON from the body of requests
app.use(express.json());

// --- Database Connection ---

// Async function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully! 🚀");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Exit the process with failure code if connection fails
    process.exit(1);
  }
};

// Call the function to connect to the database
connectDB();

// --- Routes (Endpoints) ---

// A simple test route to check if the API is running
app.get("/", (req, res) => {
  res.send("JobHelper API is running...");
});

// We will add more routes here for user authentication, resume upload, etc.

// --- Server Startup ---

// Define the port to run the server on
const PORT = process.env.PORT || 5000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
