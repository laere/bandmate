import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

class AddInfo extends React.Component {
  render() {
    const { username } = this.props.auth.user;
    return (
      <div>
        <div>** is required</div>
        <Formik
          initialValues={{ username: username }}
          onSubmit={({ setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="label">**Username:</label>
              <Field type="text" name="username" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="username"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Email:</label>
              <Field type="text" name="email" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="email"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Location:</label>
              <Field type="text" name="location" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="location"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Gender:</label>
              <Field component="select" name="gender" className="input">
                <option value="male">male</option>
                <option value="female">female</option>
              </Field>
              <ErrorMessage
                className="help is-danger"
                name="gender"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Bio:</label>
              <Field
                component="textarea"
                name="bio"
                className="input"
                style={{ height: "200px" }}
              />
              <ErrorMessage
                className="help is-danger"
                name="bio"
                component="div"
                style={{ fontSize: "24px" }}
              />

              <button
                type="submit"
                className="button is-primary is-large button-auth"
                style={{ marginTop: "20px" }}
                disabled={isSubmitting}
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

export default connect(mapStateToProps)(AddInfo);
