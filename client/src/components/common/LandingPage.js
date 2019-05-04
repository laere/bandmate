import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight landing-page is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Bandmate</h1>
            <h2 className="subtitle">
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

export default LandingPage;
