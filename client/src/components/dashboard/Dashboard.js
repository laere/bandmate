import React from "react";
import { connect } from "react-redux";
import { fetchProfile, createProfile } from "actions/profileActions";
import Sidebar from "components/dashboard/Sidebar";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { fetchProfile, createProfile }
)(Dashboard);
