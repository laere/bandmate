import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteInstrument } from "actions/profileActions";

class InstrumentsDelete extends React.Component {
  renderActions() {
    // console.log(this.props.match.params);
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="button is-danger"
          onClick={() => this.props.deleteInstrument(id, this.props.history)}
        >
          Delete
        </button>
        <Link to={`/instruments`} className="button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Instrument"
          content="Are you sure you want to delete this instrument?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteInstrument }
)(withRouter(InstrumentsDelete));
