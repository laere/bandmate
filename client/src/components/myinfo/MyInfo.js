import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import MyInfoHeader from "components/myinfo/MyInfoHeader";
import MyInfoBody from "components/myinfo/MyInfoBody";
import AddInfoBanner from "components/myinfo/AddInfoBanner";

class MyInfo extends React.Component {
  render() {
    console.log(this.props.profile);
    return (
      <div className="content">
        {_.isEmpty(this.props.profile) ? (
          <AddInfoBanner />
        ) : (
          <React.Fragment>
            <MyInfoHeader
              header="My Info"
              btnedit="Edit Info"
              editpath="/edit-info"
            />
            <MyInfoBody
              profile={this.props.profile}
              isLoading={this.props.isLoading}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ profiles: { isLoading, profile } }) => {
  return { isLoading, profile };
};

export default connect(mapStateToProps)(MyInfo);
