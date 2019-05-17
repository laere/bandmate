import React from "react";
import { connect } from "react-redux";
import { createBand } from "actions/profileActions";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import bandValidation from "frontValidation/bandValidation";

class AddMyBandForm extends React.Component {
  render() {
    return (
      <div className="form">
        <h1 className="">Your bands:</h1>
        <div>* is required field</div>
        <Formik
          initialValues={{
            bandname: "",
            bandwebsite: "",
            genre: "",
            description: "",
            lookingfor: ""
          }}
          validate={values => bandValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            this.props.createBand(values, this.props.history);
          }}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              <label className="label">*Band Name:</label>
              <Field type="text" name="bandname" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="bandname"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">Band Website:</label>
              <Field type="text" name="bandwebsite" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="bandwebsite"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Genre</label>
              <Field type="text" name="genre" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="genre"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Description:</label>
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
                style={{ fontSize: "16px" }}
              />
              <label className="label">Looking For:</label>
              <Field
                component="textarea"
                name="lookingfor"
                className="input"
                style={{ height: "100px" }}
              />
              <ErrorMessage
                className="help is-danger"
                name="lookingfor"
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
  { createBand }
)(withRouter(AddMyBandForm));
