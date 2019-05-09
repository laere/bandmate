const Joi = require("joi");

function validateInstrument(instrument) {
  const schema = Joi.object()
    .keys({
      instrument: Joi.string()
        .min(2)
        .max(50)
        .required(),
      kindofinstrument: Joi.string()
        .min(2)
        .max(50)
        .required(),
      typeofplaying: Joi.string()
        .min(2)
        .max(50)
        .required(),
      timeplayed: Joi.string()
        .min(2)
        .max(50)
        .required()
    })
    .unknown();

  return Joi.validate(instrument, schema);
}

module.exports = validateInstrument;
