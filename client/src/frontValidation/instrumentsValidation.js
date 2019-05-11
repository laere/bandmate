const instrumentsValidation = values => {
  let errors = {};

  const required = (val, key, name, valLen) => {
    if (!valLen) {
      if (!val) {
        errors[key] = `${name} is required.`;
      }
    }

    if (!val) {
      errors[key] = `${name} is required.`;
    } else if (val.length < valLen) {
      errors[key] = `${name} must be at least ${valLen} characters long.`;
    }
  };

  required(values.instrument, "instrument", "Instrument", 2);
  required(values.instrumenttype, "instrumenttype", "Type of instrument", 2);
  required(values.playingstyle, "playingstyle", "Playing style", 2);
  required(values.timeplayed, "timeplayed", "Time played", 2);

  return errors;
};

export default instrumentsValidation;
