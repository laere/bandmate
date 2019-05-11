const experienceValidation = values => {
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

  required(values.bandname, "bandname", "Band name", 2);
  required(values.timeplayedwith, "timeplayedwith", "Time played with", 2);
  required(
    values.instrumentsplayed,
    "instrumentsplayed",
    "Instruments played",
    2
  );

  return errors;
};

export default experienceValidation;
