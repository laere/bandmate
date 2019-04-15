const express = require("express");
const _ = require("lodash");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateUser = require("../validation/userValidation");
const validateLogin = require("../validation/loginValidation");
const errors = require("../errors/errors");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res, next) =>
  res.send({ msg: "Hello this is a test" })
);

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post("/register", async (req, res, next) => {
  // validate req.body as valid register input
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { username, email, password } = req.body;

  const avatar = gravatar.url(email, {
    s: "200", // Size
    r: "pg", // Rating
    d: "mm" // Default
  });

  // check if user already exists.
  let user = await User.findOne({ email });

  if (user) next(errors.processReq);

  // If req makes it past both checks it must be valid and non existant
  user = new User({ username, email, password, avatar });

  await user.save();

  const token = user.generateAuthToken();

  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "username", "email"]));
});

router.post("/login", async (req, res, next) => {
  // seperate validation for login
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) next(errors.userNotFound);

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) next(errors.passwordIncorrect);

  const token = user.generateAuthToken();

  res.send(token);
});

router.get("/current_user", async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) next(errors.userNotFound);

  res.send(user);
});

module.exports = router;
