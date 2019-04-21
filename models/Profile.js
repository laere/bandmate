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
    maxlength: 50,
    required: true
  },
  typeOfInstrument: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  typeOfPlaying: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  timePlayed: {
    type: Number,
    required: true
  }
});

const experienceSchema = new Schema({
  bandName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  bandWebsite: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  timePlayedWith: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  instrumentsPlayed: {
    type: [String],
    required: true,
    minlength: 2,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  current: {
    type: Boolean,
    required: true
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
    type: Date
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
  favoriteBands: [nameSchema],
  favoriteGenres: [nameSchema],
  instruments: [instrumentSchema], // schema
  experience: [experienceSchema], // schema
  education: [educationSchema], // schema
  social: socialSchema,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
