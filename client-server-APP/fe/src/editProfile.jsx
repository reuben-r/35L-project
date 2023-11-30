import React, { useState, useEffect } from "react";
import "./signup.css";
function EditProfile() {
  //Replace with variables from server
  const [user, setUser] = useState("FastestDriver");
  const [address, setAddress] = useState("12345 Far From School");
  const [password, setPassword] = useState("StopSignsRSuggestions");
  const [type, setType] = useState("Driver");
  const types = [
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" },
  ];

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
  const mAUp = () => {
    temp = changeTime(mArr, "+");
    if (temp == 24) {
      return;
    }
    if (temp == mDep) {
      setmDep(changeTime(mDep, "+"));
    }
    setmArr(temp);
    return;
  };
  const mADw = () => {
    temp = changeTime(mArr, "-");
    setmArr(temp);
    return;
  };
  const mDUp = () => {
    temp = changeTime(mDep, "+");
    setmDep(temp);
    return;
  };
  const mDDw = () => {
    temp = changeTime(mDep, "-");
    if (temp == 0) {
      return;
    }
    if (temp == mArr) {
      setmArr(changeTime(mArr, "-"));
    }
    setmDep(temp);
    return;
  };

  const [tArr, settArr] = useState(10);
  const [tDep, settDep] = useState(18);
  const tAUp = () => {
    temp = changeTime(tArr, "+");
    if (temp == 24) {
      return;
    }
    if (temp == tDep) {
      settDep(changeTime(tDep, "+"));
    }
    settArr(temp);
    return;
  };
  const tADw = () => {
    temp = changeTime(tArr, "-");
    settArr(temp);
    return;
  };
  const tDUp = () => {
    temp = changeTime(tDep, "+");
    settDep(temp);
    return;
  };
  const tDDw = () => {
    temp = changeTime(tDep, "-");
    if (temp == 0) {
      return;
    }
    if (temp == tArr) {
      settArr(changeTime(tArr, "-"));
    }
    settDep(temp);
    return;
  };

  const [wArr, setwArr] = useState(12);
  const [wDep, setwDep] = useState(18);
  const wAUp = () => {
    temp = changeTime(wArr, "+");
    if (temp == 24) {
      return;
    }
    if (temp == wDep) {
      setwDep(changeTime(wDep, "+"));
    }
    setwArr(temp);
    return;
  };
  const wADw = () => {
    temp = changeTime(wArr, "-");
    setwArr(temp);
    return;
  };
  const wDUp = () => {
    temp = changeTime(wDep, "+");
    setwDep(temp);
    return;
  };
  const wDDw = () => {
    temp = changeTime(wDep, "-");
    if (temp == 0) {
      return;
    }
    if (temp == wArr) {
      setwArr(changeTime(wArr, "-"));
    }
    setwDep(temp);
    return;
  };

  const [rArr, setrArr] = useState(8);
  const [rDep, setrDep] = useState(14);
  const rAUp = () => {
    temp = changeTime(rArr, "+");
    if (temp == 24) {
      return;
    }
    if (temp == rDep) {
      setrDep(changeTime(rDep, "+"));
    }
    setrArr(temp);
    return;
  };
  const rADw = () => {
    temp = changeTime(rArr, "-");
    setrArr(temp);
    return;
  };
  const rDUp = () => {
    temp = changeTime(rDep, "+");
    setrDep(temp);
    return;
  };
  const rDDw = () => {
    temp = changeTime(rDep, "-");
    if (temp == 0) {
      return;
    }
    if (temp == rArr) {
      setrArr(changeTime(rArr, "-"));
    }
    setrDep(temp);
    return;
  };

  const [fArr, setfArr] = useState(10);
  const [fDep, setfDep] = useState(18);
  const fAUp = () => {
    temp = changeTime(fArr, "+");
    if (temp == 24) {
      return;
    }
    if (temp == fDep) {
      setfDep(changeTime(fDep, "+"));
    }
    setfArr(temp);
    return;
  };
  const fADw = () => {
    temp = changeTime(fArr, "-");
    setfArr(temp);
    return;
  };
  const fDUp = () => {
    temp = changeTime(fDep, "+");
    setfDep(temp);
    return;
  };
  const fDDw = () => {
    temp = changeTime(fDep, "-");
    if (temp == 0) {
      return;
    }
    if (temp == fArr) {
      setfArr(changeTime(fArr, "-"));
    }
    setfDep(temp);
    return;
  };

  return (
    <div>
      <h1>Edit Profile</h1>

      <div>
        <br></br>
        <h2>Username</h2>
        <p>{user}</p>
        <input id="user"></input>
        <button onClick={() => setUser(document.getElementById("user").value)}>
          Change
        </button>
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>Password</h2>
        <p>{password}</p>
        {/*<form action=""> Input Data into backend*/}
        <input id="password"></input>
        <button
          onClick={() => setPassword(document.getElementById("password").value)}
        >
          Change
        </button>
        {/*</form>*/}
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>Home Address</h2>
        <p>{address}</p>
        <input id="address"></input>
        <button
          onClick={() => setAddress(document.getElementById("address").value)}
        >
          Change
        </button>
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>{type}</h2>
        <select id="type">
          {types.map((types) => (
            <option key={types.value} value={types.value}>
              {types.label}
            </option>
          ))}
        </select>
        <button onClick={() => setType(document.getElementById("type").value)}>
          Change
        </button>
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>What day?</h2>
        <select
          id="currentDay"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((days) => (
            <option key={days.value} value={days.value}>
              {days.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>{selectedDay}</h2>
        {selectedDay === "Monday" ? (
          <h2>
            Arrival: {mArr > 12 ? mArr - 12 + " PM " : mArr + " AM "}
            <button onClick={mAUp}>+</button>
            <button onClick={mADw}>-</button>
            <br />
            Departure: {mDep > 12 ? mDep - 12 + " PM " : mDep + " AM "}
            <button onClick={mDUp}>+</button>
            <button onClick={mDDw}>-</button>
          </h2>
        ) : null}
        {selectedDay === "Tuesday" ? (
          <h2>
            Arrival: {tArr > 12 ? tArr - 12 + " PM " : tArr + " AM "}
            <button onClick={tAUp}>+</button>
            <button onClick={tADw}>-</button>
            <br />
            Departure: {tDep > 12 ? tDep - 12 + " PM " : tDep + " AM "}
            <button onClick={tDUp}>+</button>
            <button onClick={tDDw}>-</button>
          </h2>
        ) : null}
        {selectedDay === "Wednesday" ? (
          <h2>
            Arrival: {wArr > 12 ? wArr - 12 + " PM " : wArr + " AM "}
            <button onClick={wAUp}>+</button>
            <button onClick={wADw}>-</button>
            <br />
            Departure: {wDep > 12 ? wDep - 12 + " PM " : wDep + " AM "}
            <button onClick={wDUp}>+</button>
            <button onClick={wDDw}>-</button>
          </h2>
        ) : null}
        {selectedDay === "Thursday" ? (
          <h2>
            Arrival: {rArr > 12 ? rArr - 12 + " PM " : rArr + " AM "}
            <button onClick={rAUp}>+</button>
            <button onClick={rADw}>-</button>
            <br />
            Departure: {rDep > 12 ? rDep - 12 + " PM " : rDep + " AM "}
            <button onClick={rDUp}>+</button>
            <button onClick={rDDw}>-</button>
          </h2>
        ) : null}
        {selectedDay === "Friday" ? (
          <h2>
            Arrival: {fArr > 12 ? fArr - 12 + " PM " : fArr + " AM "}
            <button onClick={fAUp}>+</button>
            <button onClick={fADw}>-</button>
            <br />
            Departure: {fDep > 12 ? fDep - 12 + " PM " : fDep + " AM "}
            <button onClick={fDUp}>+</button>
            <button onClick={fDDw}>-</button>
          </h2>
        ) : null}
      </div>
      <button type="submit">Submit Changes</button>
    </div>
  );
}

function changeTime(time, sign) {
  if (sign == "+") {
    time++;
  } else {
    if (time == 0) {
      return time;
    }
    time--;
  }
  if (time > 24) {
    time = 0;
    return time;
  }
  return time;
}
export default EditProfile;
