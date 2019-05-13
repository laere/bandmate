import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteEducation } from "actions/profileActions";

class DeleteEducation extends React.Component {
  renderActions() {
    // console.log(this.props.match.params);
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="button is-danger"
          onClick={() => this.props.deleteEducation(id, this.props.history)}
        >
          Delete
        </button>
        <Link to={`/education`} className="button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Education"
          content="Are you sure you want to delete this education?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteEducation }
)(withRouter(DeleteEducation));
