const express = require("express");
const router = express.Router();
const myAsync = require("../middleware/async");
const validateBand = require("../validation/bandValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");
const Band = require("../models/Band");

router.post(
  "/",
  myAsync(async (req, res, next) => {
    console.log(req.body);
    const { error } = validateBand(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let profile = await Profile.findOne({ user: req.user.id }).populate(
      "mybands"
    );

    if (!profile) return next(errors.processReq);

    let band = new Band({
      ...req.body,
      creator: profile._id
    });

    await band.save();

    profile.mybands.push(band);

    await profile.save();

    res.send(profile);
  })
);

router.delete(
  "/:bandId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $pull: { mybands: req.params.bandId } },
      { new: true }
    );

    await Band.findByIdAndRemove(req.params.bandId);
    await profile.save();

    res.send(profile);
  })
);

router.put(
  "/:bandId",
  myAsync(async (req, res, next) => {
    const { error } = validateBand(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    let experience = profile.experience.id(req.params.bandId);

    experience.set(req.body);

    await profile.save();

    res.send(profile);
  })
);

router.get(
  "/",
  myAsync(async (req, res, next) => {
    let bands = await Band.find({});

    if (!bands) return next(errors.processReq);

    res.send(bands);
  })
);

// Search query
router.post(
  "/search",
  myAsync(async (req, res, next) => {
    // req.body will have user search query data
    console.log(req.body);
    let bands = await Band.find({ bandname: req.body.bandname });

    if (!bands) return next(errors.processReq);

    res.send(bands);
  })
);

module.exports = router;
