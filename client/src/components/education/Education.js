import React from "react";
import ContentHeader from "components/dashboard/ContentHeader";

class Education extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader
          header="My Education"
          btnadd="Add Education"
          addpath="/add-education"
        />
      </div>
    );
  }
}

export default Education;
