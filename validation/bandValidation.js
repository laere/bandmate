const Joi = require("joi");

function validateBand(band) {
  const schema = Joi.object()
    .keys({
      bandname: Joi.string()
        .min(2)
        .max(50)
        .required(),
      bandwebsite: Joi.string()
        .min(2)
        .max(50),
      genre: Joi.string()
        .min(2)
        .max(50)
        .required(),
      description: Joi.string()
        .min(2)
        .max(255)
        .required(),
      lookingfor: Joi.string()
        .min(2)
        .max(255)
    })
    .unknown();

  return Joi.validate(band, schema);
}

module.exports = validateBand;
