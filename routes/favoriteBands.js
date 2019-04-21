const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const validateName = require("../validation/nameSchemaValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");

// @route   POST api/profiles/
// @desc    Add a favorite band
// @access  Private

router.post("/", auth, (req, res, next) => {
  const { error } = validateName(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let profile = Profile.findOne();
});

module.exports = router;
