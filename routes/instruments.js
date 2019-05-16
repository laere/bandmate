const express = require("express");
const router = express.Router();
const myAsync = require("../middleware/async");
const validateInstrument = require("../validation/instrumentValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");

router.post(
  "/",
  myAsync(async (req, res, next) => {
    const { error } = validateInstrument(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    profile.instruments.push(req.body);

    await profile.save();

    res.send(profile);
  })
);

router.delete(
  "/:instrumentId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    let instrument = profile.instruments.id(req.params.instrumentId);

    if (!instrument) return next(errors.processReq);

    instrument.remove();

    await profile.save();

    res.send(profile);
  })
);

router.put(
  "/:instrumentId",
  myAsync(async (req, res, next) => {
    console.log(req.body);
    const { error } = validateInstrument(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    let instrument = profile.instruments.id(req.params.instrumentId);

    instrument.set(req.body);

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
