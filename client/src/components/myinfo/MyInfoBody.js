import React from "react";
import empty from "utils/empty";
import Spinner from "components/common/Spinner";

const MyInfoBody = ({ profile, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="myinfo-body">
      <div>Username:</div>
      <span>{empty(profile.username)}</span>
      <div>Email: </div>
      <span>{empty(profile.email)}</span>
      <div>Location: </div>
      <span>{empty(profile.location)}</span>
      <div>Gender: </div>
      <span>{empty(profile.gender)}</span>
      <div>Bio: </div>
      <span>{empty(profile.bio)}</span>
    </div>
  );
};

export default MyInfoBody;
