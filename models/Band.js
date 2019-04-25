const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({});

const lookingforSchema = new Schema({});

const bandSchema = new Schema({
  bandname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  currentmembers: [memberSchema],
  genre: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  lookingfor: [lookingforSchema],
  datecreated: {
    type: Date,
    default: Date.now
  }
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
