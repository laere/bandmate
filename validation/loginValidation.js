const Joi = require("joi");

function validateLogin(user) {
  const schema = Joi.object()
    .keys({
      email: Joi.string()
        .min(2)
        .max(50)
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string()
        .min(6)
        .max(24)
        .required()
    })
    .unknown();

  return Joi.validate(user, schema);
}

module.exports = validateLogin;
