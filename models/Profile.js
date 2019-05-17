const mongoose = require("mongoose");
const { Schema } = mongoose;

const nameSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  }
});

const instrumentSchema = new Schema({
  instrument: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  instrumenttype: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  playingstyle: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  timeplayed: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  datecreated: {
    type: Date,
    default: Date.now
  }
});

const experienceSchema = new Schema({
  bandname: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  bandwebsite: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  timeplayedwith: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  instrumentsplayed: {
    type: [String],
    minlength: 2,
    maxlength: 50
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 255
  },
  current: {
    type: Boolean,
    default: false
  }
});

const educationSchema = new Schema({
  school: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  degree: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  fieldofstudy: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    default: Date.now
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 255
  }
});

const socialSchema = new Schema({
  youtube: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  facebook: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  twitter: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  instagram: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  linkedin: {
    type: String,
    minlength: 2,
    maxlength: 50
  }
});

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  gender: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String,
    minlength: 2,
    maxlength: 255
  },
  favoritebands: [nameSchema],
  favoritegenres: [nameSchema],
  instruments: [instrumentSchema], // schema
  experience: [experienceSchema], // schema
  education: [educationSchema], // schema
  mybands: [{ type: Schema.Types.ObjectId, ref: "Band" }],
  social: socialSchema,
  datecreated: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
