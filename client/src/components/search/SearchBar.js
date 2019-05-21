import React from "react";
import { connect } from "react-redux";
import { fetchBands } from "actions/bands/bandActions";
import { Formik, Form, Field, ErrorMessage } from "formik";

class SearchBar extends React.Component {
  componentDidMount() {
    this.props.fetchBands();
  }

  render() {
    return (
      <div>
        <h3 className="title is-4 is-spaced search-title">
          Find a like-minded band!
        </h3>
        <Formik
          onSubmit={({ setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="search-form">
              <Field type="text" name="search" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="search"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <button
                type="submit"
                className="button is-primary is-medium "
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

export default connect(
  null,
  { fetchBands }
)(SearchBar);
