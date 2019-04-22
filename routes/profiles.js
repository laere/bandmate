const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const myAsync = require("../middleware/async");
const validateProfile = require("../validation/profileValidation");
const errors = require("../errors/errors");
const passport = require("passport");

// @route   GET api/profiles/test
// @desc    Tests profiles route
// @access  Public
router.get(
  "/test",
  myAsync(async (req, res, next) => res.send({ msg: "Test successful!" }))
);

// @route   GET api/profiles/
// @desc    Get current user profile
// @access  Private
router.get(
  "/",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    res.send(profile);
  })
);

// @route   POST api/profiles/
// @desc    Create a profile
// @access  Private
router.post(
  "/",
  myAsync(async (req, res, next) => {
    const { error } = validateProfile(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // See if this profile already exists for the user
    let profile = await Profile.findOne({ user: req.user.id });
    // If exists send error
    if (profile) {
      next(errors.processReq);
    } else {
      // Create new profile
      profile = new Profile({
        ...req.body,
        email: req.user.email,
        user: req.user._id
      });
    }
    // save and send
    await profile.save();

    res.json(profile);
  })
);

// @route   EDIT api/profiles/
// @desc    Edit a profile
// @access  Private
router.put(
  "/",
  myAsync(async (req, res, next) => {
    const { error } = validateProfile(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: req.body },
      { new: true }
    );

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
