import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/common/PrivateRoute";

import LandingPage from "components/common/LandingPage";
import Navbar from "components/common/Navbar";
import Dashboard from "components/common/Dashboard";

import Register from "components/auth/Register";
import Login from "components/auth/Login";

import Education from "components/education/Education";

import "./App.css";

class App extends React.Component {
  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="dashboard">
            {this.props.auth.isAuthenticated ? <Dashboard /> : false}
            <PrivateRoute exact path="/education" component={Education} />
          </div>
          <Route exact path="/" component={LandingPage} />

          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(App);
