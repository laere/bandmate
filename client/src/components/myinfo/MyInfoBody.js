import React from "react";
import empty from "utils/empty";
import Spinner from "components/common/Spinner";

const MyInfoBody = ({ profile, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="myinfo-body">
      <div className="myinfo-content">
        <div className="myinfo-title">Username</div>
        <span>{empty(profile.username)}</span>
      </div>
      <div className="myinfo-content">
        <div className="myinfo-title">Email</div>
        <span>{empty(profile.email)}</span>
      </div>
      <div className="myinfo-content">
        <div className="myinfo-title">Location</div>
        <span>{empty(profile.location)}</span>
      </div>
      <div className="myinfo-content">
        <div className="myinfo-title">Gender</div>
        <span>{empty(profile.gender)}</span>
      </div>
      <div className="myinfo-content">
        <div className="myinfo-title">Bio</div>
        <span>{empty(profile.bio)}</span>
      </div>
    </div>
  );
};

export default MyInfoBody;
