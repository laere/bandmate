import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/common/PrivateRoute";

import LandingPage from "components/common/LandingPage";
import Navbar from "components/common/Navbar";
import Register from "components/auth/Register";
import Login from "components/auth/Login";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
