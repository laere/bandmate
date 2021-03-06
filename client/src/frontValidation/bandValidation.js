import validateURL from "frontValidation/validateURL";

const bandValidation = values => {
  let errors = {};

  const required = (val, key, name, valLen) => {
    if (!valLen && !val) {
      errors[key] = `${name} is required.`;
    }

    if (!val) {
      errors[key] = `${name} is required.`;
    } else if (val.length < valLen) {
      errors[key] = `${name} must be at least ${valLen} characters long.`;
    } else if (name.includes("website")) {
      if (!validateURL(val)) {
        errors[key] = `${name} must be a valid URL.`;
      }
    }
  };

  required(values.bandname, "bandname", "Band name", 2);
  required(values.genre, "genre", "Genre", 2);
  required(values.description, "description", "Description", 2);
  required(values.lookingfor, "lookingfor", "Looking for", 2);

  return errors;
};

export default bandValidation;
