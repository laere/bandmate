const Joi = require("joi");

function validateName(name) {
  const schema = Joi.object()
    .keys({
      name: Joi.string()
        .min(2)
        .max(50)
        .required()
    })
    .unknown();

  return Joi.validate(name, schema);
}

module.exports = validateName;
