const express = require("express");
const router = express.Router();
const myAsync = require("../middleware/async");
const validateEducation = require("../validation/educationValidation");
const errors = require("../errors/errors");
const Profile = require("../models/Profile");

module.exports = router;
