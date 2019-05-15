import React from "react";
import empty from "utils/empty";
import capitalize from "utils/capitalize";
import { Link } from "react-router-dom";
import Spinner from "components/common/Spinner";

const MyBandBody = ({ isLoading, mybands }) => {
  if (!mybands) {
    return <Spinner />;
  }

  const content = mybands.map(exp => {
    return (
      <section className="section" key={exp._id}>
        <div>
          <h1 className="title">{empty(exp.bandname)}</h1>
          <div className="content-info">
            <div>Band Website:</div>
            <a href={empty(exp.bandwebsite)} style={{ marginLeft: "15px" }}>
              {empty(exp.bandwebsite)}
            </a>
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
            <span>{empty(exp.current.toString())}</span>
          </div>
        </div>
        <Link
          to={`/mybands/delete/${exp._id}`}
          className="button is-danger is-small button-delete"
        >
          Delete
        </Link>
        <Link
          to={`/mybands/edit/${exp._id}`}
          className="button is-info is-small"
        >
          Edit
        </Link>
      </section>
    );
  });

  return <div className="mybands-body">{content}</div>;
};

export default MyBandBody;
