import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "actions/profileActions";
import DashboardNav from "components/dashboard/DashboardNav";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <React.Fragment>
        <DashboardNav />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { fetchProfile }
)(Dashboard);
