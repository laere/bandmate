import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class LandingPage extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard/myinfo");
    }
  }

  render() {
    return (
      <section className="hero is-fullheight landing-page is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Bandmate</h1>
            <h2 className="subtitle is-4">
              Create music with like-minded musicians.
            </h2>
            <Link to="/register" className="button is-normal is-large">
              Sign Up
            </Link>
            <Link to="/login" className="button is-normal is-large">
              Log In
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(withRouter(LandingPage));
