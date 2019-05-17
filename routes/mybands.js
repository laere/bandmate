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
    let profile = await Profile.findOne({ user: req.user.id });
    console.log(profile);

    let band = await Band.findById(req.params.bandId);

    band.remove();

    console.log(band);

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

router.get("/", myAsync(async (req, res, next) => {}));

module.exports = router;
