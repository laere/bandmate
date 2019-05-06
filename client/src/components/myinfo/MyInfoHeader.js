import React from "react";
import { Link } from "react-router-dom";

const MyInfoHeader = props => {
  return (
    <React.Fragment>
      <h1>{props.header}</h1>
      <div className="add">
        <Link to={props.editpath} className="button is-info">
          {props.btnedit}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default MyInfoHeader;
