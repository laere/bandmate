import validateURL from "frontValidation/validateURL";

const experienceValidation = values => {
  let errors = {};

  const required = (val, key, name, valLen) => {
    // If no val length and no val
    if (!valLen && !val) {
      errors[key] = `${name} is required.`;
    }

    // No val
    if (!val) {
      errors[key] = `${name} is required.`;
      // val length less than given val length.
    } else if (val.length < valLen) {
      errors[key] = `${name} must be at least ${valLen} characters long.`;
      // if val includes website, must be validating a uri
    } else if (name.includes("website")) {
      // if uri doesn't pass validation check
      if (!validateURL(val)) {
        errors[key] = `${name} must be a valid URL.`;
      }
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
  required(values.bandwebsite, "bandwebsite", "Band website", 2);

  return errors;
};

export default experienceValidation;
