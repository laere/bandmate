const mongoose = require("mongoose");
const { Schema } = mongoose;

const bandSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
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
  lookingfor: {
    type: String,
    minlength: 2,
    maxlength: 255
  },
  currentmembers: [],
  datecreated: {
    type: Date,
    default: Date.now
  }
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
