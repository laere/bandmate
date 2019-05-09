import React from "react";
import { connect } from "react-redux";
import ContentHeader from "components/dashboard/ContentHeader";
import ExperienceBody from "components/experience/ExperienceBody";

class Experience extends React.Component {
  render() {
    console.log("EXPERIENCE", this.props.experience);
    return (
      <div className="content">
        <ContentHeader
          header="My Experience"
          btn="Add Experience"
          path="/add-experience"
        />
        <ExperienceBody
          experience={this.props.experience}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  profiles: {
    isLoading,
    profile: { experience }
  }
}) => {
  return { isLoading, experience };
};

export default connect(mapStateToProps)(Experience);
