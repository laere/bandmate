import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
