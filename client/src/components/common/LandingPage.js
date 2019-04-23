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
            <a class="button is-normal">Sign Up</a>
            <a class="button is-normal">Log In</a>
          </div>
        </div>
        <div className="hero-footer" />
      </section>
    );
  }
}

export default LandingPage;
