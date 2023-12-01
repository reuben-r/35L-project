import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./signup.css";

const PageOne = () => (
  <div>
    <h1 style={{ fontSize: "3em" }}>
      Welcome to the Schedule tutorial, please click the arrow below to learn
      how to get your UCLA schedule into UCLA Carpool Connect!
    </h1>
    <Link to="/page-two">
      <div style={{ fontSize: "2em", textAlign: "center" }}>&#8594;</div>
    </Link>
  </div>
);

const PageTwo = () => {
  const history = useHistory();

  return (
    <div>
      <h1 style={{ fontSize: "3em" }}>Step 1</h1>
      <h2>
        Click{" "}
        <a href="https://be.my.ucla.edu/ClassPlanner/ClassPlan.aspx">here</a> to
        go to your class planner, and then choose the current quarter.
      </h2>
      <div style={{ fontSize: "2em", textAlign: "center" }}>
        <span onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
          &#8592;{" "}
        </span>
        <Link to="/page-three">&#8594; </Link>
      </div>
    </div>
  );
};

const PageThree = () => {
  const history = useHistory();

  return (
    <div>
      <h1 style={{ fontSize: "3em" }}>Step 2</h1>
      <h2>
        Now, underneath "weekly schedule" choose the last option option that
        says "Agenda View"{" "}
      </h2>
      <div style={{ fontSize: "2em", textAlign: "center" }}>
        <span onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
          &#8592;{" "}
        </span>
        <Link to="/page-four">&#8594; </Link>
      </div>
    </div>
  );
};
const PageFour = () => {
  const history = useHistory();

  return (
    <div>
      <h1 style={{ fontSize: "3em" }}>Step 3</h1>
      <h2 style={{ fontSize: "1.25em" }}>
        Scroll down to underneath your schedule where you will see an agenda
        view of your schedule that looks like this:
      </h2>
      <div>
        <br />
        <h2
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            display: "block",
            textRendering: "optimizeLegibility",
            textAlign: "left",
          }}
        >
          Monday
        </h2>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li style={{ color: "purple" }}>
            CLASS 1 Lec 1 [Enrolled] 8:00 AM - 9:50 AM - Classroom
          </li>
          <li style={{ color: "green" }}>
            CLASS 2 Lec 1 [Enrolled] 11:00 AM - 1:50 AM - Classroom
          </li>
          <li style={{ color: "navy" }}>
            CLASS 3 Lec 1 [Enrolled] 4:00 PM - 5:50 PM - Classroom
          </li>
        </ul>
        <h2
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            display: "block",
            textRendering: "optimizeLegibility",
            textAlign: "left",
          }}
        >
          Tuesday
        </h2>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li style={{ color: "purple" }}>
            CLASS 1 Lec 1 [Enrolled] 8:00 AM - 9:50 AM - Classroom
          </li>
          <li style={{ color: "green" }}>
            CLASS 2 Lec 1 [Enrolled] 11:00 AM - 1:50 AM - Classroom
          </li>
        </ul>
        <h2
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            display: "block",
            textRendering: "optimizeLegibility",
            textAlign: "left",
          }}
        >
          Wednesday
        </h2>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li style={{ color: "purple" }}>
            CLASS 1 Lec 1 [Enrolled] 8:00 AM - 9:50 AM - Classroom
          </li>
          <li style={{ color: "green" }}>
            CLASS 2 Lec 1 [Enrolled] 11:00 AM - 1:50 AM - Classroom
          </li>
          <li style={{ color: "navy" }}>
            CLASS 3 Lec 1 [Enrolled] 4:00 PM - 5:50 PM - Classroom
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            display: "block",
            textRendering: "optimizeLegibility",
            textAlign: "left",
          }}
        >
          Thursday
        </h2>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li style={{ color: "purple" }}>
            CLASS 1 Lec 1 [Enrolled] 8:00 AM - 9:50 AM - Classroom
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            display: "block",
            textRendering: "optimizeLegibility",
            textAlign: "left",
          }}
        >
          Friday
        </h2>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li style={{ color: "purple" }}>
            CLASS 1 Lec 1 [Enrolled] 8:00 AM - 9:50 AM - Classroom
          </li>
          <li style={{ color: "green" }}>
            CLASS 2 Lec 1 [Enrolled] 11:00 AM - 1:50 AM - Classroom
          </li>
          <li style={{ color: "navy" }}>
            CLASS 3 Dis 1E [Enrolled] 4:00 PM - 5:50 PM - Classroom
          </li>
        </ul>
      </div>
      <h1>
        Copy this entire schedule, make sure to include all of it including the
        days of the week
      </h1>
      <div style={{ fontSize: "2em", textAlign: "center" }}>
        <span
          onClick={() => history.push("/page-three")}
          style={{ cursor: "pointer" }}
        >
          &#8592;{" "}
        </span>
        <Link to="/page-five">&#8594; </Link>
      </div>
    </div>
  );
};

const PageFive = () => {
  const history = useHistory();

  return (
    <div>
      <h1 style={{ fontSize: "3em" }}>Step 4</h1>
      <h2 style={{ fontSize: "2em" }}>
        On the sign in page, paste this schedule into the "Schedule" box.
      </h2>
      <h2 style={{ fontSize: "2em" }}>
        Congrtulations, you just added your class schedule to UCLA carpool
        connect! Feel free to edit arrival and departure times in your profile
        edit page
      </h2>
      <Link to="/page-four">
        <div
          style={{ fontSize: "2em", textAlign: "center" }}
          onClick={() => history.goBack()}
        >
          &#8592;
        </div>
      </Link>
    </div>
  );
};

const App = () => (
  <Router>
    <Route path="/" exact component={PageOne} />
    <Route path="/page-two" component={PageTwo} />
    <Route path="/page-three" component={PageThree} />
    <Route path="/page-four" component={PageFour} />
    <Route path="/page-five" component={PageFive} />
  </Router>
);

export default App;
