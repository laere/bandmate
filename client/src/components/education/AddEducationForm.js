import React from "react";
import { connect } from "react-redux";
import { createEducation } from "actions/profileActions";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Moment from "react-moment";
import educationValidation from "frontValidation/educationValidation";

class AddEducationForm extends React.Component {
  render() {
    const { username } = this.props.auth.user;
    return (
      <div className="form">
        <h1 className="">Your education:</h1>
        <div>* is required field</div>
        <Formik
          initialValues={{
            school: "",
            degree: "",
            fieldofstudy: "",
            from: "",
            to: Date.now(),
            current: "",
            description: ""
          }}
          validate={values => educationValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            this.props.createEducation(values, this.props.history);
          }}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              <label className="label">*School:</label>
              <Field
                type="text"
                name="school"
                className="input"
                value={values.school}
              />
              <ErrorMessage
                className="help is-danger"
                name="school"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Degree:</label>
              <Field
                type="text"
                name="degree"
                className="input"
                value={values.degree}
              />
              <ErrorMessage
                className="help is-danger"
                name="degree"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Field of Study:</label>
              <Field
                type="text"
                name="fieldofstudy"
                className="input"
                value={values.fieldofstudy}
              />
              <ErrorMessage
                className="help is-danger"
                name="fieldofstudy"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*From:</label>
              <Field
                name="from"
                type="date"
                className="input"
                value={values.from}
              />
              <ErrorMessage
                className="help is-danger"
                name="from"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">To:</label>
              <Field
                name="to"
                type="date"
                className="input"
                disabled={values.current ? "disabled" : false}
                value={values.to}
              />
              <ErrorMessage
                className="help is-danger"
                name="to"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Current:</label>
              <Field
                component="select"
                name="current"
                className="input"
                onChange={handleChange}
                value={values.current}
              >
                <option value="false">false</option>
                <option value="true">true</option>
              </Field>
              <ErrorMessage
                className="help is-danger"
                name="current"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Description:</label>
              <Field
                component="textarea"
                name="description"
                className="input"
                value={values.description}
                style={{ height: "200px" }}
              />
              <ErrorMessage
                className="help is-danger"
                name="description"
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { createEducation }
)(withRouter(AddEducationForm));
