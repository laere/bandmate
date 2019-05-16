const express = require("express");
const router = express.Router();
const myAsync = require("../middleware/async");
const validateExperience = require("../validation/experienceValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");

router.post(
  "/",
  myAsync(async (req, res, next) => {
    const { error } = validateExperience(req.body);
    console.log(error);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    const experienceProps = {
      ...req.body,
      instrumentsplayed: req.body.instrumentsplayed.split(",")
    };

    profile.experience.push(experienceProps);

    await profile.save();

    console.log(profile);

    res.send(profile);
  })
);

router.delete(
  "/:experienceId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    let experience = profile.experience.id(req.params.experienceId);

    experience.remove();

    await profile.save();

    res.send(profile);
  })
);

router.put(
  "/:experienceId",
  myAsync(async (req, res, next) => {
    const { error } = validateExperience(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) return next(errors.processReq);

    let experience = profile.experience.id(req.params.experienceId);

    experience.set(req.body);

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
