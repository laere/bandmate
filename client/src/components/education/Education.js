import React from "react";
import { connect } from "react-redux";
import ContentHeader from "components/dashboard/ContentHeader";
import EducationBody from "components/education/EducationBody";

class Education extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader
          header="My Education"
          btn="Add Education"
          path="/add-education"
        />
        <EducationBody
          isLoading={this.props.isLoading}
          education={this.props.education}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  profiles: {
    isLoading,
    profile: { education }
  }
}) => {
  return { isLoading, education };
};

export default connect(mapStateToProps)(Education);
