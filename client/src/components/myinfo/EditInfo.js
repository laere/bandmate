import React from "react";
import { connect } from "react-redux";
import { editProfile } from "actions/profileActions";
import { Link, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import myinfoValidation from "frontValidation/myinfoValidation";

class EditInfo extends React.Component {
  render() {
    // const { username } = this.props.auth.user;
    const { profile } = this.props;
    return (
      <div className="form">
        <h1 className="">Your information:</h1>
        <div>** is required field</div>
        <Formik
          initialValues={{
            username: profile.username,
            email: profile.email,
            location: profile.location,
            bio: profile.bio,
            gender: profile.gender
          }}
          enableReintialize={true}
          validate={values => myinfoValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            this.props.editProfile(values, this.props.history);
          }}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              <label className="label">**Username:</label>
              <Field
                type="text"
                name="username"
                className="input"
                value={values.username}
              />
              <ErrorMessage
                className="help is-danger"
                name="username"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Email:</label>
              <Field
                type="text"
                name="email"
                className="input"
                value={values.email}
              />
              <ErrorMessage
                className="help is-danger"
                name="email"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Location:</label>
              <Field
                type="text"
                name="location"
                className="input"
                value={values.location}
              />
              <ErrorMessage
                className="help is-danger"
                name="location"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Gender:</label>
              <Field
                component="select"
                name="gender"
                className="input"
                onChange={handleChange}
                placeholder="Gender"
                value={values.gender}
              >
                <option value="" label="Select a gender" />
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage
                className="help is-danger"
                name="gender"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Bio:</label>
              <Field
                component="textarea"
                name="bio"
                className="input"
                style={{ height: "200px" }}
                value={values.bio}
              />
              <ErrorMessage
                className="help is-danger"
                name="bio"
                component="div"
                style={{ fontSize: "16px" }}
              />
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

const mapStateToProps = ({ auth, profiles: { profile } }) => {
  return { auth, profile };
};

export default connect(
  mapStateToProps,
  { editProfile }
)(withRouter(EditInfo));
