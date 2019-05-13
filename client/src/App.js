import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/common/PrivateRoute";

import LandingPage from "components/common/LandingPage";
import Navbar from "components/common/Navbar";
import Dashboard from "components/dashboard/Dashboard";

import Register from "components/auth/Register";
import Login from "components/auth/Login";

import MyInfo from "components/myinfo/MyInfo";
import AddInfoForm from "components/myinfo/AddInfoForm";
import EditInfo from "components/myinfo/EditInfo";

import Education from "components/education/Education";
import AddEducationForm from "components/education/AddEducationForm";
import DeleteEducation from "components/education/DeleteEducation";

import Experience from "components/experience/Experience";
import AddExperienceForm from "components/experience/AddExperienceForm";
import DeleteExperience from "components/experience/DeleteExperience";

import Instruments from "components/instruments/Instruments";
import AddInstrumentsForm from "components/instruments/AddInstrumentsForm";
import DeleteInstrument from "components/instruments/DeleteInstrument";

import Search from "components/search/Search";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="dashboard">
            {this.props.auth.isAuthenticated ? <Dashboard /> : false}
            <PrivateRoute exact path="/myinfo" component={MyInfo} />
            <PrivateRoute exact path="/add-info" component={AddInfoForm} />
            <PrivateRoute exact path="/edit-info" component={EditInfo} />

            <PrivateRoute exact path="/education" component={Education} />
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducationForm}
            />
            <PrivateRoute
              exact
              path="/education/:id"
              component={DeleteEducation}
            />

            <PrivateRoute exact path="/experience" component={Experience} />
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperienceForm}
            />
            <PrivateRoute
              exact
              path="/experience/:id"
              component={DeleteExperience}
            />

            <PrivateRoute exact path="/instruments" component={Instruments} />
            <PrivateRoute
              exact
              path="/add-instruments"
              component={AddInstrumentsForm}
            />
            <PrivateRoute
              exact
              path="/instruments/:id"
              component={DeleteInstrument}
            />
          </div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search" component={Search} />
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
