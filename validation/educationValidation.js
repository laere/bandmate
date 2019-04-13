const Joi = require("joi");

function validateEducation(education) {
  const schema = Joi.object()
    .keys({
      school: Joi.string()
        .min(2)
        .max(50)
        .required(),
      degree: Joi.string()
        .min(2)
        .max(50)
        .required(),
      fieldofstudy: Joi.string()
        .min(2)
        .max(50)
        .required(),
      from: Joi.date().required(),
      to: Joi.date(),
      current: Joi.boolean(),
      description: Joi.string()
        .min(2)
        .max(255)
        .required()
    })
    .unknown();

  return Joi.validate(education, schema);
}

module.exports = validateEducation;
