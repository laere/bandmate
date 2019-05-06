import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Spinner from "components/common/Spinner";
import MyInfoHeader from "components/myinfo/MyInfoHeader";
import MyInfoBody from "components/myinfo/MyInfoBody";
import AddInfoBanner from "components/myinfo/AddInfoBanner";

class MyInfo extends React.Component {
  render() {
    if (this.props.isLoading && _.isEmpty(this.props.profile)) {
      return <Spinner />;
    } else if (_.isEmpty(this.props.profile)) {
      return <AddInfoBanner />;
    }

    return (
      <div className="content">
        <MyInfoHeader
          header="My Info"
          btnedit="Edit Info"
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
