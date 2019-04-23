const express = require("express");
const router = express.Router();
const myAsync = require("../middleware/async");
const validateEducation = require("../validation/educationValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");

router.post(
  "/",
  myAsync(async (req, res, next) => {
    const { error } = validateEducation(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      next();
    }

    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    profile.education.push(req.body);

    await profile.save();

    res.send(profile);
  })
);

router.delete(
  "/:educationId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) next(errors.processReq);

    let education = profile.education.id(req.params.educationId);

    if (!education) next(errors.processReq);

    education.remove();

    await profile.save();

    res.send(profile);
  })
);

router.put(
  "/:educationId",
  myAsync(async (req, res, next) => {
    let profile = await Profile.findOneAndUpdate({ user: req.user.id });

    if (!profile) next(errors.processReq);

    let education = profile.education.id(req.params.educationId);

    education.set(req.body);

    await profile.save();

    res.send(profile);
  })
);

module.exports = router;
