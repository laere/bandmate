import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-info">
        <div className="navbar-start">
          <div className="navbar-item">Bandmate</div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">Links</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
