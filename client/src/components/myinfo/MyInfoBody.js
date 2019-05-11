import React from "react";
import empty from "utils/empty";
import Spinner from "components/common/Spinner";

const MyInfoBody = ({ profile, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="myinfo-body">
      <div className="dashboard-content">
        <div className="title is-3">Username:</div>
        <span>{empty(profile.username)}</span>
      </div>
      <div className="dashboard-content">
        <div className="title is-3">Email: </div>
        <span>{empty(profile.email)}</span>
      </div>
      <div className="dashboard-content">
        <div className="title is-3">Location: </div>
        <span>{empty(profile.location)}</span>
      </div>
      <div className="dashboard-content">
        <div className="title is-3 title-color">Gender: </div>
        <span>{empty(profile.gender)}</span>
      </div>
      <div className="dashboard-content">
        <div className="title is-3">Bio: </div>
        <span>{empty(profile.bio)}</span>
      </div>
    </div>
  );
};

export default MyInfoBody;
