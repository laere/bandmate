import React from "react";
import empty from "utils/empty";
import Spinner from "components/common/Spinner";

const ExperienceBody = ({ isLoading, experience }) => {
  console.log("experience", experience);

  if (isLoading) {
    return <Spinner />;
  }

  if (!experience) {
    return <h1>You currently have no education!</h1>;
  }

  const content = experience.map(exp => {
    return (
      <React.Fragment key={exp._id}>
        <div>Band Name:</div>
        <span>{empty(exp.bandname)}</span>
        <div>Band Website:</div>
        <span>{empty(exp.bandwebsite)}</span>
        <div>Time with band:</div>
        <span>{empty(exp.timeplayedwith)}</span>
        <div>Instruments Played:</div>
        <span>{empty(exp.instrumentsplayed.join(", "))}</span>
        <div>Description:</div>
        <span>{empty(exp.description)}</span>
        <div>Current:</div>
        <span>{empty(exp.current)}</span>
      </React.Fragment>
    );
  });

  return <div className="experience-body">{content}</div>;
};

export default ExperienceBody;
