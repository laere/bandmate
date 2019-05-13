import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteExperience } from "actions/profileActions";

class DeleteExperience extends React.Component {
  renderActions() {
    // console.log(this.props.match.params);
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="button is-danger"
          onClick={() => this.props.deleteExperience(id, this.props.history)}
        >
          Delete
        </button>
        <Link to={`/experience`} className="button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Experience"
          content="Are you sure you want to delete this experience?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteExperience }
)(withRouter(DeleteExperience));
