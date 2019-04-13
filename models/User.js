const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 24
  },
  avatar: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre("save", function(next) {
  //console.log(this);
  bcrypt.hash(
    this.password,
    10,
    function hashPassword(err, hashedPassword) {
      if (err) next(err);
      this.password = hashedPassword;
      next();
      // binding the user obj as context to hashPassword func
    }.bind(this)
  );
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, keys.secretOrKey);

  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
