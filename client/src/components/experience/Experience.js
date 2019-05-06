import React from "react";
import ContentHeader from "components/dashboard/ContentHeader";

class Experience extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader
          header="My Experience"
          btn="Add Experience"
          path="/add-experience"
        />
      </div>
    );
  }
}

export default Experience;
