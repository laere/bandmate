import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { loginUser } from "actions/authActions";
import { withRouter } from "react-router-dom";
import loginValidation from "validation/loginValidation";

class Register extends React.Component {
  render() {
    return (
      <div className="budget-new">
        <h1 className="title is-3">Register to start a band!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => loginValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log("VALUES", values);
            this.props.loginUser(values, this.props.history);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <label className="label">Email:</label>
              <Field
                type="text"
                name="email"
                value={values.email}
                className="input"
              />
              <ErrorMessage
                className="help is-danger"
                name="email"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Password:</label>
              <Field
                type="text"
                name="password"
                value={values.password}
                className="input"
              />
              <ErrorMessage
                className="help is-danger"
                name="password"
                component="div"
                style={{ fontSize: "24px" }}
              />

              <button
                type="submit"
                className="button is-primary is-large"
                style={{ marginTop: "20px" }}
                disabled={isSubmitting}
                onSubmit={this.onSubmit}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(withRouter(Register));
