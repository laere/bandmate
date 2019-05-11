import React from "react";
import { connect } from "react-redux";
import { createInstrument } from "actions/profileActions";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import instrumentsValidation from "frontValidation/instrumentsValidation";

class AddInstrumentsForm extends React.Component {
  render() {
    return (
      <div className="form">
        <h1 className="">Your instruments:</h1>
        <Formik
          initialValues={{
            instrument: "",
            instrumenttype: "",
            playingstyle: "",
            timeplayed: ""
          }}
          validate={values => instrumentsValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            this.props.createInstrument(values, this.props.history);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="label">Instrument:</label>
              <Field type="text" name="instrument" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="instrument"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Instrument Type:</label>
              <Field type="text" name="instrumenttype" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="instrumenttype"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Playing Style:</label>
              <Field type="text" name="playingstyle" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="playingstyle"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Time Played:</label>
              <Field type="text" name="timeplayed" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="timeplayed"
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

export default connect(
  null,
  { createInstrument }
)(withRouter(AddInstrumentsForm));
