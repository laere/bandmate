const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const passportAuth = passport.authenticate("jwt", { session: false });
const app = express();

// ROUTE CONSTS
const auth = require("./routes/spotify");
const users = require("./routes/users");
const profiles = require("./routes/profiles");
const favoriteBands = require("./routes/favoriteBands");
const favoriteGenres = require("./routes/favoriteGenres");
const instruments = require("./routes/instruments");
const education = require("./routes/education");
const experience = require("./routes/experience");
const mybands = require("./routes/mybands");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  () => console.log("MongoDB connected")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/profiles", passportAuth, profiles);
app.use("/api/profiles/favorites/bands", passportAuth, favoriteBands);
app.use("/api/profiles/favorites/genres", passportAuth, favoriteGenres);
app.use("/api/profiles/instruments", passportAuth, instruments);
app.use("/api/profiles/education", passportAuth, education);
app.use("/api/profiles/experience", passportAuth, experience);
app.use("/api/profiles/mybands", passportAuth, mybands);

// app.use(function(err, req, res, next) {
//   console.error(err.statusCode, err.message);
//   res.status(err.statusCode).send(err.message);
// });

// Only ran inside production (in heroku)
if (process.env.NODE_ENV === "production") {
  // Express will server up prod assets
  // like main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  // if it does not recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3111;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
