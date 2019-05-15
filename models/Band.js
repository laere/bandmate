const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
});

const genreSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  }
});

const lookingforSchema = new Schema({
  instrumentplayer: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  experience: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  genresplayed: [genreSchema]
});

const bandSchema = new Schema({
  bandname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  bandwebsite: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  currentmembers: [memberSchema],
  genre: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  lookingfor: [lookingforSchema],
  description: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true
  },
  datecreated: {
    type: Date,
    default: Date.now
  }
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
