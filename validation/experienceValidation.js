const Joi = require("joi");

function validateExperience(experience) {
  const schema = Joi.object()
    .keys({
      bandName: Joi.string()
        .min(2)
        .max(50)
        .required(),
      bandWebsite: Joi.string()
        .min(2)
        .max(50),
      timePlayedWith: Joi.string()
        .min(2)
        .max(50)
        .required(),
      instrumentsPlayed: Joi.string()
        .min(2)
        .max(50)
        .required(),
      description: Joi.string()
        .min(2)
        .max(255),
      current: Joi.boolean().required()
    })
    .unknown();

  return Joi.validate(experience, schema);
}

module.exports = validateExperience;
