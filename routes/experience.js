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
    if (error) {
      res.status(400).send(error.details[0].message);
      next();
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    profile.experience.push(req.body);

    await profile.save();

    res.send(profile);
  })
);

router.delete(
  "/:experienceId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    let experience = profile.experience.id(req.params.experienceId);

    experience.remove();

    await profile.save();

    res.send(profile);
  })
);

router.put(
  "/:experienceId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id, "experience._id": req.params.experienceId },
      { $set: { "experience.$": req.body } },
      { new: true }
    );
    if (!profile) next(errors.processReq);

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
