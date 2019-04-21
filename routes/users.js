const _ = require("lodash");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateUser = require("../validation/userValidation");
const validateLogin = require("../validation/loginValidation");
const errors = require("../errors/errors");
const myAsync = require("../middleware/async");
const passport = require("passport");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res, next) =>
  res.send({ msg: "Hello this is a test" })
);

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post(
  "/register",
  myAsync(async (req, res, next) => {
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

    res.send(_.pick(user, ["_id", "username", "email", "avatar"]));
  })
);

router.post(
  "/login",
  myAsync(async (req, res, next) => {
    // seperate validation for login
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) next(errors.userNotFound);

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) next(errors.passwordIncorrect);

    const token = user.generateAuthToken();
    
    res.send(`Bearer ${token}`)
  })
);

router.get(
  "/current_user",
  myAsync(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) next(errors.userNotFound);

    res.send(user);
  })
);

router.delete("/", passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  // find and delete profile first
  let profile = Profile.findOneAndRemove({ email: req.body.email });

  if (!profile) next(errors.processReq);
  // find and delete user afterwards
  let user = User.findOneAndRemove({ email: req.body.email });

  await Promise.all([profile, user]);
  res.send([profile, user]);
});

module.exports = router;
