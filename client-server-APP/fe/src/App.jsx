import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Signup from "./signup";
import Schedule from "./schedule";
import EditProfile from "./editProfile";
import Signin from "./signin";
import Tutorial from "./tutorial";
import Profiles_Driver from "./profilesAPI_Driver";
import Profiles_Rider from "./profilesAPI_Rider";
import Test from "./test"

function App() {
  return (
    <div>
      <Router>
        <>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n}\n\n.header {\n  text-align: center;\n  padding: 32px;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n  max-width: 25%;\n  padding: 0 4px;;\n}\n\n.column img {\n  margin-top: 8px;\n  vertical-align: middle;\n  width: 100%;\n}\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n  .column {\n    -ms-flex: 50%;\n    flex: 50%;\n    max-width: 50%;\n    position: relative;\n  text-align: center;\n  }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    -ms-flex: 100%;\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n",
            }}
          />
          {/* Header */}
          <div className="header">
            <h1>Carpoolers</h1>
          </div>

          <div className="navBar">
            <Link to="/Signin">
              <button>Sign In</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/tutorial">
              <button>Schedule Import Tutorial</button>
            </Link>
            <Link to="/schedule">
              <button>Schedule</button>
            </Link>
            <Link to="/editProfile">
              <button>Edit Profile</button>
            </Link>
            <Link to="/profilesAPI_Rider">
              <button>Request Rides</button>
            </Link>
            <Link to="/profilesAPI_Driver">
              <button>Book Rides</button>
            </Link>
            <Link to="/test">
              <button>Test</button>
            </Link>
          </div>

          <div className="LinkPage">
            <Switch>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/schedule">
                <Schedule />
              </Route>
              <Route exact path="/editProfile">
                <EditProfile />
              </Route>
              <Route exact path="/profilesAPI_Rider">
                <Profiles_Rider />
              </Route>
              <Route exact path="/profilesAPI_Driver">
                <Profiles_Driver />
              </Route>
              <Route exact path="/tutorial">
                <Tutorial />
              </Route>
              <Route exact path="/test">
                <Test />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
