const Joi = require("joi");

function validateInstrument(instrument) {
  const schema = Joi.object()
    .keys({
      instrument: Joi.string()
        .min(2)
        .max(50)
        .required(),
      kindOfInstrument: Joi.string()
        .min(2)
        .max(50)
        .required(),
      typeOfPlaying: Joi.string()
        .min(2)
        .max(50)
        .required(),
      timePlayed: Joi.string()
        .min(2)
        .max(50)
        .required()
    })
    .unknown();

  return Joi.validate(instrument, schema);
}

module.exports = validateInstrument;
