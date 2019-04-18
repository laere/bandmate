const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const auth = require("../middleware/auth");
const validateProfile = require("../validation/profileValidation");
const errors = require("../errors/errors");

// @route   GET api/profiles/test
// @desc    Tests profiles route
// @access  Public
router.get("/test", (req, res, next) => res.send({ msg: "Test successful!" }));

// @route   POST api/profiles/
// @desc    Create a profile
// @access  Public
router.post("/", auth, async (req, res, next) => {
  const { error } = validateProfile(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // See if this profile already exists for the user
  let profile = await Profile.findOne({ email: req.body.email });

  // If exists send error
  if (profile) {
    next(errors.processReq);
  } else {
    // Create new profile
    profile = new Profile({ ...req.body });
  }
  // save and send
  await profile.save();

  res.json(profile);
});

router.put("/:profileId", auth, async (req, res, next) => {
  // IF user edits their email in their profile
  // How can we update that information to reflect in their user object
  const { error } = validateProfile(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.params.profileId);

  const profileFields = { ...req.body };

  let profile = await Profile.findOneAndUpdate(
    { _id: req.params.profileId },
    { $set: profileFields },
    { new: true }
  );

  console.log("PROFILE", profile);

  await profile.save();
  res.send(profile);
});

router.delete("/:profileId", auth, async (req, res, next) => {
  let profile = await Profile.findOneAndRemove({ _id: req.params.profileId });
  res.send(profile);
});

module.exports = router;
