import React from "react";
import empty from "utils/empty";
import capitalize from "utils/capitalize";
import { Link } from "react-router-dom";
import Spinner from "components/common/Spinner";

const MyBandBody = ({ isLoading, mybands }) => {
  console.log(mybands);
  if (!mybands) {
    return <Spinner />;
  }

  const content = mybands.map(band => {
    return (
      <section className="section" key={band._id}>
        <div>
          <h1 className="title">{empty(band.bandname)}</h1>
          <div className="content-info">
            <div>Band Website:</div>
            <a href={empty(band.bandwebsite)} style={{ marginLeft: "15px" }}>
              {empty(band.bandwebsite)}
            </a>
          </div>
          <div className="content-info">
            <div>Genre:</div>
            <span>{empty(band.genre)}</span>
          </div>
          <div className="content-info">
            <div>Description:</div>
            <span>{empty(band.description)}</span>
          </div>
          <div className="content-info">
            <div>Current Members:</div>
            <span>{empty(band.currentmembers)}</span>
          </div>
          <div className="content-info">
            <div>Looking for:</div>
            <span>{empty(band.lookingfor)}</span>
          </div>
        </div>
        <Link
          to={`/mybands/delete/${band._id}`}
          className="button is-danger is-small button-delete"
        >
          Delete
        </Link>
        <Link
          to={`/mybands/edit/${band._id}`}
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
