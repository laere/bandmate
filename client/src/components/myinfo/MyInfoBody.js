import React from "react";
import _ from "lodash";
import Spinner from "components/common/Spinner";

const empty = val => {
  return _.isEmpty(val) ? "" : val;
};

const MyInfoBody = ({ profile, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <div>Username: {empty(profile.username)}</div>
      <div>Email: {empty(profile.email)}</div>
      <div>Location: {empty(profile.location)}</div>
      <div>Gender: {empty(profile.gender)}</div>
      <div>Bio: {empty(profile.bio)}</div>
    </React.Fragment>
  );
};

export default MyInfoBody;
