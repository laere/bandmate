import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Spinner from "components/common/Spinner";
import ContentHeader from "components/dashboard/ContentHeader";
import MyInfoBody from "components/myinfo/MyInfoBody";
import AddInfoBanner from "components/myinfo/AddInfoBanner";

class MyInfo extends React.Component {
  render() {
    const { profile, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    } else if (_.isEmpty(profile)) {
      return <AddInfoBanner />;
    }

    return (
      <div className="content">
        <ContentHeader header="My Info" btn="Edit Info" path="/edit-info" />
        <MyInfoBody profile={profile} isLoading={isLoading} />
      </div>
    );
  }
}

const mapStateToProps = ({ profiles: { isLoading, profile } }) => {
  return { isLoading, profile };
};

export default connect(mapStateToProps)(MyInfo);
