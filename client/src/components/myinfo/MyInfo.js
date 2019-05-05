import React from "react";
import { connect } from "react-redux";

import MyInfoHeader from "components/myinfo/MyInfoHeader";
import MyInfoBody from "components/myinfo/MyInfoBody";

class MyInfo extends React.Component {
  render() {
    return (
      <div className="content">
        <MyInfoHeader
          header="My Info"
          btnadd="Add Info"
          btnedit="Edit Info"
          addpath="/add-info"
          editpath="/edit-info"
        />
        <MyInfoBody
          profile={this.props.profile}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profiles: { isLoading, profile } }) => {
  return { isLoading, profile };
};

export default connect(mapStateToProps)(MyInfo);
