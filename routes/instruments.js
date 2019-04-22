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
      res.status(400).send(error.details[0].message);
      next();
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    profile.instruments.push(req.body);

    await profile.save();

    res.send(profile);
  })
);

router.delete(
  "/:instrumentId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    let instrument = profile.instruments.id(req.params.instrumentId);

    if (!instrument) next(errors.processReq);

    instrument.remove();

    await profile.save();

    res.send(profile);
  })
);

router.put(
  "/:instrumentId",
  myAsync(async (req, res, nex) => {
    const { error } = validateInstrument(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      next();
    }

    let profile = await Profile.findOneAndUpdate(
      {
        user: req.user.id,
        "instruments._id": req.params.instrumentId
      },
      {
        $set: {
          "instruments.$": req.body
        }
      },
      {
        new: true
      }
    );

    if (!profile) next(errors.processReq);

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
