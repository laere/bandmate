const Joi = require("joi");

function validateProfile(profile) {
  const schema = Joi.object()
    .keys({
      username: Joi.string()
        .min(2)
        .max(50)
        .required(),
      email: Joi.string()
        .min(2)
        .max(50)
        .email()
        .required(),
      gender: Joi.string(),
      location: Joi.string(),
      bio: Joi.string()
        .min(2)
        .max(255)
    })
    .unknown();

  return Joi.validate(profile, schema);
}

module.exports = validateProfile;
