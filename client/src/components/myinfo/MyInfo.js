import React from "react";
import { connect } from "react-redux";

import ContentHeader from "components/dashboard/ContentHeader";
import ContentBody from "components/dashboard/ContentBody";

class MyInfo extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader header="My Info" button="Add Info" path="/add-info" />
        <ContentBody />
      </div>
    );
  }
}

export default MyInfo;
