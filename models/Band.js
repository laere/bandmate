const mongoose = require("mongoose");
const { Schema } = mongoose;

const bandSchema = new Schema({
  bandname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  }
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
