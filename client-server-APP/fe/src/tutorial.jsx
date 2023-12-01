import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useHistory,
    Switch,
} from "react-router-dom";
import "./signup.css";

const PageOne = () => (
    <div>
        <h1 style={{ fontSize: "3em" }}>
            Welcome to the Schedule tutorial, please click the arrow below to learn
            how to get your UCLA schedule into UCLA Carpool Connect!
        </h1>
        <Link to="/tutorial/page-two">
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
                <span onClick={() => history.push("/tutorial/")} style={{ cursor: "pointer" }}>
                    &#8592;{" "}
                </span>
                <Link to="/tutorial/page-three">&#8594; </Link>
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
                <span onClick={() => history.push("/tutorial/page-two")} style={{ cursor: "pointer" }}>
                    &#8592;{" "}
                </span>
                <Link to="/tutorial/page-four">&#8594; </Link>
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
                    onClick={() => history.push("/tutorial/page-three")}
                    style={{ cursor: "pointer" }}
                >
                    &#8592;{" "}
                </span>
                <Link to="/tutorial/page-five">&#8594; </Link>
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
            <Link to="/tutorial/page-four">
                
                    &#8592;
            </Link>
        </div>
    );
};

const Tutorial = () => (
    <div>
        <Router>
            <Switch>
                <Route exact path="/tutorial/" exact component={PageOne}>
                    <PageOne />
            </Route>
            <Route exact path="/tutorial/page-two" component={PageTwo}>
                    <PageTwo />
                </Route>
                <Route exact path="/tutorial/page-three" component={PageThree}>
                    <PageThree />
                </Route>
                <Route exact path="/tutorial/page-four" component={PageFour}>
                    <PageFour />
                </Route>
                <Route exact path="/tutorial/page-five" component={PageFive}>
                    <PageFive />
                </Route>
                </Switch>
        </Router>
    </div>
);

export default Tutorial;
