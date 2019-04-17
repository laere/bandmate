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
  const { error } = validateProfile(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const profileFields = { ...req.body };

  let profile = await Profile.findOneAndUpdate(
    { email: req.body.email },
    { $set: profileFields },
    { new: true }
  );

  await profile.save();
  res.send(profile);
});

router.delete("/:profileId", auth, async (req, res, next) => {
  let profile = await Profile.findOneAndRemove({ email: req.body.email });
  res.send(profile);
});

module.exports = router;
