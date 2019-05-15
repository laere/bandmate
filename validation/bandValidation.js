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
        .max(50)
        .required(),
      genre: Joi.string()
        .min(2)
        .max(50)
        .required(),
      description: Joi.string()
        .min(2)
        .max(255)
        .required()
    })
    .unknown();

  return Joi.validate(band, schema);
}

module.exports = validateBand;
