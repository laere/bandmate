const express = require("express");
const router = express.Router();
const myAsync = require("../middleware/async");
const validateName = require("../validation/nameSchemaValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");

// @route   POST api/profiles/
// @desc    Add a favorite band
// @access  Private

router.post(
  "/",
  myAsync(async (req, res, next) => {
    const { error } = validateName(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let profile = await Profile.findOne({ user: req.user.id });

    // If that band already exists exit request.
    if (profile.favoriteGenres.includes(req.body)) return;

    profile.favoriteGenres.push(req.body);

    await profile.save();

    res.send(profile);
  })
);

router.delete(
  "/:genreId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    let genre = profile.favoriteGenres.id(req.params.genreId);

    genre.remove();

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
