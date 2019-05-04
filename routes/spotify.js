const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/auth/spotify",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private"]
  })
);

router.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify"),
  (req, res, next) => {
    res.redirect("/");
  }
);

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
