import React from "react";
import { connect } from "react-redux";
import ContentHeader from "components/dashboard/ContentHeader";
import MyBandBody from "components/mybands/MyBandBody";

class MyBand extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader
          header="My Bands"
          btn="Add Band"
          path="/mybands/add-band"
        />
        <MyBandBody
          isLoading={this.props.isLoading}
          mybands={this.props.mybands}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  profiles: {
    isLoading,
    profile: { mybands }
  }
}) => {
  return { isLoading, mybands };
};

export default connect(mapStateToProps)(MyBand);
