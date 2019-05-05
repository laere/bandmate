import React from "react";
import { connect } from "react-redux";

import ContentHeader from "components/dashboard/ContentHeader";
import MyInfoBody from "components/myinfo/MyInfoBody";

class MyInfo extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader header="My Info" button="Add Info" path="/add-info" />
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
