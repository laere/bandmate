import React from "react";
import { connect } from "react-redux";
import { createExperience } from "actions/profileActions";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import experienceValidation from "frontValidation/experienceValidation";

class AddExperienceForm extends React.Component {
  render() {
    return (
      <div className="form">
        <Formik
          initialValues={{
            bandname: "",
            bandwebsite: "",
            timeplayedwith: "",
            instrumentsplayed: "",
            description: "",
            current: false
          }}
          validate={values => experienceValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            this.props.createExperience(values, this.props.history);
          }}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              <label className="label">Band Name:</label>
              <Field type="text" name="bandname" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="bandname"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Band Website:</label>
              <Field type="text" name="bandwebsite" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="bandwebsite"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">
                How long did you play with this band?
              </label>
              <Field type="text" name="timeplayedwith" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="timeplayedwith"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Instruments Played:</label>
              <Field type="text" name="instrumentsplayed" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="instrumentsplayed"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Current:</label>
              <Field
                component="select"
                name="current"
                className="input"
                onChange={handleChange}
                value={values.current}
              >
                <option value={false}>false</option>
                <option value={true}>true</option>
              </Field>
              <ErrorMessage
                className="help is-danger"
                name="current"
                component="div"
                style={{ fontSize: "24px" }}
              />

              <label className="label">Description:</label>
              <Field
                component="textarea"
                name="description"
                className="input"
                style={{ height: "200px" }}
              />
              <ErrorMessage
                className="help is-danger"
                name="description"
                component="div"
                style={{ fontSize: "24px" }}
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
  { createExperience }
)(withRouter(AddExperienceForm));
