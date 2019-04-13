const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
  // If document is new or we're changing the password
  if (userSchema.isNew || userSchema.isModified("password")) {
    // ref this because we're changing scope
    const document = this;

    bcrypt.hash(document.password, 10, function(err, hashedPassword) {
      if (err) next(err);

      document.password = hashedPassword;
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
