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
router.get("/test", (req, res, next) => res.send({ msg: "Test successful!" }));

// @route   POST api/profiles/
// @desc    Create a profile
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), myAsync(async (req, res, next) => {
  const { error } = validateProfile(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // See if this profile already exists for the user
  console.log(req.user);
  let profile = await Profile.findOne({ user: req.user.id });
  //console.log(profile.user);

  // If exists send error
  if (profile) {
    next(errors.processReq);
  } else {
    // Create new profile
    profile = new Profile({ ...req.body, user: req.user._id });
  }
  // save and send
  await profile.save();

  res.json(profile);
}));

// @route   EDIT api/profiles/
// @desc    Edit a profile
// @access  Private

router.put("/", async (req, res, next) => {
  // IF user edits their email in their profile
  // How can we update that information to reflect in their user object
  const { error } = validateProfile(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const profileFields = { ...req.body };

  let profile = await Profile.findOneAndUpdate(
    { email: req.body.email },
    { $set: profileFields },
    { new: true }
  );

  console.log("PROFILE", profile);

  await profile.save();
  res.send(profile);
});

module.exports = router;
