const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
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
  genre: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },

  description: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true
  },
  lookingfor: [lookingforSchema],
  currentmembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  datecreated: {
    type: Date,
    default: Date.now
  }
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
