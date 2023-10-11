// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registration route
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).send("User already exists");

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = new User({ username, password: hashedPassword });
  await user.save();

  res.send("User registered successfully");
});

module.exports = router;
