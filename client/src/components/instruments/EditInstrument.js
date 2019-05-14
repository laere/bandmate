import React from "react";
import { connect } from "react-redux";
import { editInstrument } from "actions/profileActions";
import { withRouter } from "react-router-dom";
import Spinner from "components/common/Spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import instrumentsValidation from "frontValidation/instrumentsValidation";

class EditInstrument extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { instruments } = this.props.profile;

    if (!instruments) {
      return <Spinner />;
    }

    const currentInst = instruments.find(inst => inst._id === id);

    const {
      instrument,
      instrumenttype,
      playingstyle,
      timeplayed
    } = currentInst;

    return (
      <div className="form">
        <h1 className="">Your instruments:</h1>
        <div>* is required field</div>
        <Formik
          initialValues={{
            instrument,
            instrumenttype,
            playingstyle,
            timeplayed
          }}
          validate={values => instrumentsValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            this.props.editInstrument(values, id, this.props.history);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="label">*Instrument:</label>
              <Field type="text" name="instrument" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="instrument"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Instrument Type:</label>
              <Field type="text" name="instrumenttype" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="instrumenttype"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Playing Style:</label>
              <Field type="text" name="playingstyle" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="playingstyle"
                component="div"
                style={{ fontSize: "16px" }}
              />
              <label className="label">*Time Played:</label>
              <Field type="text" name="timeplayed" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="timeplayed"
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

const mapStateToProps = ({ profiles: { profile } }) => {
  return { profile };
};

export default connect(
  mapStateToProps,
  { editInstrument }
)(withRouter(EditInstrument));
