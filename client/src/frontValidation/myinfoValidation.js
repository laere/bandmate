const myinfoValidation = values => {
  let errors = {};

  if (!values.username) {
    errors.username = "Name is required.";
  } else if (values.username.length < 2) {
    errors.username = "Name must be more than 2 characters long!";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default myinfoValidation;
