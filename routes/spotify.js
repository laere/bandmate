const express = require("express");
const router = express.Router();
const passport = require("passport");
// /auth/spotify
router.get("/", passport.authenticate("spotify"), (req, res, next) => {});

router.get(
  "/callback",
  passport.authenticate("spotify", { failureRedirect: "/login" }),
  (req, res, next) => {
    res.redirect("/");
  }
);

module.exports = router;
