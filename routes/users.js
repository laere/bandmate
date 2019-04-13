const express = require("express");
const _ = require("lodash");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateUser = require("../validation/userValidation");
const errors = require("../errors/userErrors");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res, next) =>
  res.json({ msg: "Hello this is a test" })
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

  if (user) next(errors.emailInUse);

  // If req makes it past both checks it must be valid and non existant
  user = new User({ username, email, password });

  await user.save();
  res.json(user);
});

router.post("/login", async (req, res, next) => {
  // seperate validation for login
  // const { error } = validateUser(req.body);
  //
  // if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);
  let user = await User.findOne({ email: req.body.email });
  console.log(user);

  if (!user) next(errors.userNotFound);

  const validPassword = bcrypt.compare(req.body.password, user.password);

  if (!validPassword) next(errors.passwordIncorrect);

  const token = user.generateAuthToken();

  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["id", "username", "email", "dateCreated"]));
});

module.exports = router;