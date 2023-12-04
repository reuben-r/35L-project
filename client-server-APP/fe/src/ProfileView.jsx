import React, { useState, useEffect } from "react";
import "./signup.css";
//import axios from 'axios' <========================================================================================== UnCOMMENT

function ProfileView() {
  //Replace with variables from server
  const [username1, setUsername1] = useState("FastestDriver");
  const [address1, setAddress1] = useState("12345 Far From School");
  const [password1, setPassword1] = useState("tests"); //User password
  const [pwd, setPwd] = useState(""); //Password Check
  const [type1, setType1] = useState("Driver");

  const [selectedDay, setSelectedDay] = useState("Monday");
  const days = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];

  //Replace all of these with user info of schedule
  const [mArr, setmArr] = useState(6);
  const [mDep, setmDep] = useState(15);

  const [tArr, settArr] = useState(10);
  const [tDep, settDep] = useState(18);

  const [wArr, setwArr] = useState(12);
  const [wDep, setwDep] = useState(18);

  const [rArr, setrArr] = useState(8);
  const [rDep, setrDep] = useState(14);

  const [fArr, setfArr] = useState(10);
  const [fDep, setfDep] = useState(18);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function

  const fetchAllData = () => {
    //<====================================================================== UnCOMMENT and make sure variables work
    axios
      .get(`http://localhost:8081/user/getAllData/${id}`)
      .then((response) => {
        const [
          name,
          password,
          address,
          type,
          mon_A,
          mon_D,
          tue_A,
          tue_D,
          wed_A,
          wed_D,
          thu_A,
          thu_D,
          fri_A,
          fri_D,
        ] = response.data;

        setUsername1(name);
        setPassword1(password);
        setAddress1(address);
        setType1(type);

        setmArr(mon_A);
        settArr(tue_A);
        setwArr(wed_A);
        setrArr(thu_A);
        setfArr(fri_A);

        setmDep(mon_D);
        settDep(tue_D);
        setwDep(wed_D);
        setrDep(thu_D);
        setfDep(fri_D);

        setError(null);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : error.message);
      });
  };

  return (
    <div>
      <h1>View Profile</h1>
      <h2></h2>
      <br />
      {pwd != password1 ? (
        <div>
          <label for="pwd">Current Password: </label>
          <input type="password" id="pwd" name="pwd"></input>
          <button
            onClick={() => {
              setPwd(document.getElementById("pwd").value);
              //fetchAllData(); //<========================================================================= UnCOMMENT
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <div>
            <br></br>
            <h2>Username</h2>
            <p>{username1}</p>
            <br></br>
          </div>
          <div>
            <h2>Password</h2>
            <p type="password">{password1}</p>
            <br></br>
          </div>
          <div>
            <h2>Home Address</h2>
            <p>{address1}</p>
            <br></br>
          </div>
          <div>
            <h2>Account Type</h2>
            <p>{type1}</p>
            <br></br>
          </div>
          <div>
            <h2>Class Schedule</h2>
          </div>
          <div class="column">
            <h2>Monday</h2>
            <h2 class="bold-text">
              Arrival:{" "}
              {mArr > 12
                ? mArr - 12 + " PM "
                : mArr == 12
                ? mArr + " PM "
                : mArr + " AM "}
              <br />
              Departure:{" "}
              {mDep > 12
                ? mDep - 12 + " PM "
                : mDep == 12
                ? mDep + " PM "
                : mDep + " AM "}
            </h2>
          </div>
          <div class="column">
            <h2>Tuesday</h2>
            <h2 class="bold-text">
              Arrival:{" "}
              {tArr > 12
                ? tArr - 12 + " PM "
                : tArr == 12
                ? tArr + " PM "
                : tArr + " AM "}
              <br />
              Departure:{" "}
              {tDep > 12
                ? tDep - 12 + " PM "
                : tDep == 12
                ? tDep + " PM "
                : tDep + " AM "}
            </h2>
          </div>
          <div class="column">
            <h2>Wednesday</h2>
            <h2 class="bold-text">
              Arrival:{" "}
              {wArr > 12
                ? wArr - 12 + " PM "
                : wArr == 12
                ? wArr + " PM "
                : wArr + " AM "}
              <br />
              Departure:{" "}
              {wDep > 12
                ? wDep - 12 + " PM "
                : wDep == 12
                ? wDep + " PM "
                : wDep + " AM "}
            </h2>
          </div>
          <div class="column">
            <h2>Thursday</h2>
            <h2 class="bold-text">
              Arrival:{" "}
              {rArr > 12
                ? rArr - 12 + " PM "
                : rArr == 12
                ? rArr + " PM "
                : rArr + " AM "}
              <br />
              Departure:{" "}
              {rDep > 12
                ? rDep - 12 + " PM "
                : rDep == 12
                ? rDep + " PM "
                : rDep + " AM "}
            </h2>
          </div>
          <div class="column">
            <h2>Friday</h2>
            <h2 class="bold-text">
              Arrival:{" "}
              {fArr > 12
                ? fArr - 12 + " PM "
                : fArr == 12
                ? fArr + " PM "
                : fArr + " AM "}
              <br />
              Departure:{" "}
              {fDep > 12
                ? fDep - 12 + " PM "
                : fDep == 12
                ? fDep + " PM "
                : fDep + " AM "}
            </h2>
          </div>
        </div>
      )}
      <br />
      {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
    </div>
  );
}

export default ProfileView;
