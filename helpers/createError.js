function createError(msg, statusCode = 500) {
  let err = new Error(msg);
  err.statusCode = statusCode;
  return err;
}

module.exports = createError;
