import React from "react";
import empty from "utils/empty";
import { Link } from "react-router-dom";
import Spinner from "components/common/Spinner";
import Moment from "react-moment";

const EducationBody = ({ isLoading, education }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!education) {
    return <h1>You currently have no education!</h1>;
  }

  const content = education.map(edu => {
    return (
      <section className="section" key={edu._key}>
        <div>
          <div className="content-info">
            <div>School:</div>
            <span>{empty(edu.school)}</span>
          </div>
          <div className="content-info">
            <div>Degree:</div>
            <span>{empty(edu.degree)}</span>
          </div>
          <div className="content-info">
            <div>Field of Study:</div>
            <span>{empty(edu.fieldofstudy)}</span>
          </div>
          <div className="content-info">
            <div>From:</div>
            <span>
              <Moment format="MM/DD/YYYY">{empty(edu.from)}</Moment>
            </span>
          </div>
          <div className="content-info">
            <div>To:</div>
            <span>
              <Moment format="MM/DD/YYYY">{empty(edu.to)}</Moment>
            </span>
          </div>
          <div className="content-info">
            <div>Current:</div>
            <span>{empty(edu.current)}</span>
          </div>
          <div className="content-info">
            <div>Description:</div>
            <span>{empty(edu.description)}</span>
          </div>
        </div>
        <Link
          to={`/education/${edu._id}`}
          className="button is-danger is-small"
          style={{ margin: 0 }}
        >
          Delete
        </Link>
        <Link
          to={`/education/${edu._id}`}
          className="button is-info is-small"
          style={{ margin: 0 }}
        >
          Edit
        </Link>
      </section>
    );
  });

  return <div className="education-body">{content}</div>;
};

export default EducationBody;
