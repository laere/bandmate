const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// const errorHandler = require("./middleware/error");
const app = express();

// ROUTE CONSTS
const users = require("./routes/users");
const profiles = require("./routes/profiles");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  () => console.log("MongoDB connected")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/profiles", profiles);

app.use(function(err, req, res, next) {
  console.error(err.statusCode, err.message);
  res.status(err.statusCode).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
