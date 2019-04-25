import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  renderGuestLinks() {
    return (
      <React.Fragment>
        <Link to="/signup" className="navbar-item">
          Sign Up
        </Link>
        <Link to="/login" className="navbar-item">
          Log In
        </Link>
      </React.Fragment>
    );
  }

  renderAuthLinks() {
    return (
      <React.Fragment>
        <img
          className="navbar-item"
          src={this.props.auth.user.avatar}
          alt="user avatar"
        />
        <button className="navbar-item">Log Out</button>
      </React.Fragment>
    );
  }

  render() {
    const { auth } = this.props.auth;
    return (
      <nav className="navbar is-info">
        <div className="navbar-start">
          <div className="navbar-item">Bandmate</div>
        </div>
        <div className="navbar-end">
          {auth ? this.renderAuthLinks() : this.renderGuestLinks()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Navbar);
