import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "actions/authActions";

class Navbar extends React.Component {
  renderGuestLinks() {
    return (
      <React.Fragment>
        <Link to="/register" className="navbar-item">
          Sign Up
        </Link>
        <Link to="/login" className="navbar-item">
          Log In
        </Link>
      </React.Fragment>
    );
  }

  renderAuthLinks() {
    const { user } = this.props.auth;
    return (
      <React.Fragment>
        <figure className="image is-48x48">
          <img
            className="is-rounded"
            src={user.avatar}
            alt={user.name}
            title="You must have a gravatar connected to your email to display an image"
          />
        </figure>
        <Link to="/" onClick={this.props.logoutUser} className="navbar-item">
          Log Out
        </Link>
      </React.Fragment>
    );
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <nav className="navbar is-dark">
        <div className="navbar-start">
          <div className="navbar-item">Bandmate</div>
        </div>
        <div className="navbar-end">
          {isAuthenticated ? this.renderAuthLinks() : this.renderGuestLinks()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
