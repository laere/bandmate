import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { loginUser } from "actions/authActions";
import { withRouter } from "react-router-dom";
import loginValidation from "frontValidation/loginValidation";

class Login extends React.Component {
  componentDidUpdate() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated) {
      this.props.history.push("/myinfo");
    }
  }

  render() {
    return (
      <div className="auth-form">
        <h1 className="title is-3 auth-form-title">Login to start a band!</h1>
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
              <div className="auth-form-inputwrapper">
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
                  style={{ fontSize: "16px" }}
                />
              </div>
              <div className="auth-form-inputwrapper">
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
                  style={{ fontSize: "16px" }}
                />
              </div>
              <button
                type="submit"
                className="button is-primary is-large button-auth"
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
