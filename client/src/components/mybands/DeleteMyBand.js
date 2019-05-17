import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteBand } from "actions/profileActions";

class DeleteMyBand extends React.Component {
  renderActions() {
    // console.log(this.props.match.params);
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="button is-danger"
          onClick={() => this.props.deleteBand(id, this.props.history)}
        >
          Delete
        </button>
        <Link to={`/mybands`} className="button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Band"
          content="Are you sure you want to delete this band?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteBand }
)(withRouter(DeleteMyBand));
