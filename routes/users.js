const express = require("express");
const router = express.Router();
const bcrypt = require("bycrypt");
const User = require("../models/User");
const validateUser = require("../validation/userValidation");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/", (req, res, next) => res.json({ msg: "Hello this is a test" }));

// @route   GET api/users/current_user
// @desc    Get curent user
// @access  Public
router.get("/current_user", async (req, res, next) => {
  const user = await User.findOne({ _id: user.req.id });

  if (!user) return res.status(404).json({ msg: "User not found" });

  res.json(user);
});

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post("/register", async (req, res, next) => {
  // validate req.body as valid register input
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if user already exists.
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).json({ msg: "User already exists" });

  // If req makes it past both checks it must be valid and non existant
  user = new User({ ...req.body });

  await user.save();
  res.json(user);
});

module.exports = router;
