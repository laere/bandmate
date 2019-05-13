import React from "react";
import empty from "utils/empty";
import capitalize from "utils/capitalize";
import { Link } from "react-router-dom";
import Spinner from "components/common/Spinner";

const ExperienceBody = ({ isLoading, experience }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!experience) {
    return <h1>You currently have no education!</h1>;
  }

  const content = experience.map(exp => {
    return (
      <section className="section" key={exp._key}>
        <div>
          <div className="content-info">
            <div>Band Name:</div>
            <span>{empty(exp.bandname)}</span>
          </div>
          <div className="content-info">
            <div>Band Website:</div>
            <span>{empty(exp.bandwebsite)}</span>
          </div>
          <div className="content-info">
            <div>Time with band:</div>
            <span>{empty(exp.timeplayedwith)}</span>
          </div>
          <div className="content-info">
            <div>Instruments Played:</div>
            <span>
              {empty(
                exp.instrumentsplayed.map(ins => capitalize(ins)).join(", ")
              )}
            </span>
          </div>
          <div className="content-info">
            <div>Description:</div>
            <span>{empty(exp.description)}</span>
          </div>
          <div className="content-info">
            <div>Current:</div>
            <span>{empty(exp.current)}</span>
          </div>
        </div>
        <Link
          to={`/experience/${exp._id}`}
          className="button is-danger is-small"
          style={{ margin: 0 }}
        >
          Delete
        </Link>
        <Link
          to={`/experience/${exp._id}`}
          className="button is-info is-small"
          style={{ margin: 0 }}
        >
          Edit
        </Link>
      </section>
    );
  });

  return <div className="experience-body">{content}</div>;
};

export default ExperienceBody;
