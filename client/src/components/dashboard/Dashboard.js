import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProfile, createProfile } from "actions/profileActions";
import Sidebar from "components/dashboard/Sidebar";

class Dashboard extends React.Component {
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
