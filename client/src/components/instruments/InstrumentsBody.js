import React from "react";
import empty from "utils/empty";
import Spinner from "components/common/Spinner";

const EducationBody = ({ isLoading, education }) => {
  console.log("education", education);

  if (isLoading) {
    return <Spinner />;
  }

  if (!education) {
    return <h1>You currently have no education!</h1>;
  }

  const content = education.map(edu => {
    return (
      <React.Fragment key={edu._id}>
        <div>School:</div>
        <span>{empty(edu.school)}</span>
        <div>Degree:</div>
        <span>{empty(edu.degree)}</span>
        <div>Field of Study:</div>
        <span>{empty(edu.fieldofstudy)}</span>
        <div>From:</div>
        <span>{empty(edu.from)}</span>
        <div>To:</div>
        <span>{empty(edu.to)}</span>
        <div>Current:</div>
        <span>{empty(edu.current)}</span>
        <div>Description:</div>
        <span>{empty(edu.description)}</span>
      </React.Fragment>
    );
  });

  return <div className="education-body">{content}</div>;
};

export default EducationBody;
