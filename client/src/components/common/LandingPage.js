import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-head" />
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Bandmate</h1>
            <h2 className="subtitle">
              Create music with like-minded musicians.
            </h2>
            <Link to="/register" class="button is-normal">
              Sign Up
            </Link>
            <Link to="/login" class="button is-normal">
              Log In
            </Link>
          </div>
        </div>
        <div className="hero-footer" />
      </section>
    );
  }
}

export default LandingPage;
