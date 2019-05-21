import React from "react";
import { connect } from "react-redux";
import { fetchBands } from "actions/bands/bandActions";
import SearchBar from "components/search/SearchBar";
import List from "components/search/List";
import { Formik, Form, Field, ErrorMessage } from "formik";

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchBands();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <List bands={this.props.bands} />
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => {
  return { bands };
};

export default connect(
  mapStateToProps,
  { fetchBands }
)(Search);
