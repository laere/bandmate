const createError = require("../helpers/createError");

const errors = {
  processReq: createError("We couldn’t process your request."),
  userNotFound: createError("User not found!"),
  passwordIncorrect: createError("Password is incorrect!")
};

module.exports = errors;
