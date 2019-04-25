const SpotifyStrategy = require("passport-spotify").Strategy;
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");
const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clienSecret: keys.spotifyClientSecret,
      callbackURL: "http://localhost:3000/auth/spotify/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ spotifyId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({ spotifyId: profile.id }).save();

        done(null, user);
      } catch (e) {
        console.log(e);
      }
    }
  )
);
