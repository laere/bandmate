import React from "react";
import { Link } from "react-router-dom";

const ContentHeader = props => {
  return (
    <React.Fragment>
      <h1>{props.header}</h1>
      <div className="add">
        <Link to={props.addpath} className="button is-info">
          {props.btnadd}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ContentHeader;
