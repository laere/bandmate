const Joi = require("joi");

function validateExperience(experience) {
  const schema = Joi.object()
    .keys({
      bandname: Joi.string()
        .min(2)
        .max(50)
        .required(),
      bandwebsite: Joi.string()
        .min(2)
        .max(50)
        .uri(),
      timeplayedwith: Joi.string()
        .min(2)
        .max(50)
        .required(),
      instrumentsplayed: Joi.string()
        .min(2)
        .max(50)
        .required(),
      description: Joi.string()
        .min(2)
        .max(255),
      current: Joi.boolean()
    })
    .unknown();

  return Joi.validate(experience, schema);
}

module.exports = validateExperience;
