const Joi = require("joi");

function validateSocial(social, schema) {
  const schema = Joi.object()
    .keys({
      youtube: Joi.string()
        .min(2)
        .max(50),
      twitter: Joi.string()
        .min(2)
        .max(50),
      facebook: Joi.string()
        .min(2)
        .max(50),
      instagram: Joi.string()
        .min(2)
        .max(50),
      linkedin: Joi.string()
        .min(2)
        .max(50)
    })
    .unknown();

  return Joi.validate(social, schema);
}

module.exports = validateSocial;
