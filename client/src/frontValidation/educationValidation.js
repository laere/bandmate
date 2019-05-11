const educationValidation = values => {
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

  required(values.school, "school", "School", 2);
  required(values.degree, "degree", "Degree", 2);
  required(values.fieldofstudy, "fieldofstudy", "Field of study", 2);
  required(values.description, "description", "Description", 2);
  required(values.from, "from", "From");

  console.log(errors);

  return errors;
};

export default educationValidation;
