const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose"); // <-- Add this line for Mongoose
const app = express();

// Import your authentication routes
const authRoutes = require("./routes/authRoutes");

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`Failed to connect to MongoDB with error: ${err}`);
});

// Other routes and middleware
app.use(express.json()); // for parsing application/json

// Mount the authentication routes
app.use("/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
