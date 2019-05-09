import React from "react";

import { Link } from "react-router-dom";

class AddInfoBanner extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>Looks like you need to create a profile!</h1>
        <div className="add">
          <Link to="/add-info" className="button is-info">
            Add your infortmation here
          </Link>
        </div>
      </div>
    );
  }
}

export default AddInfoBanner;
