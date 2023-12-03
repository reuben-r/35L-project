import React, { useState, useEffect } from "react";
import "./signup.css";

function EditSchedule() {
  const password = "test"; //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const id = 123456789;

  const [selectedInput, setSelectedInput] = useState("Automatic");
  const inputs = [
    { value: "Automatic", label: "Automatic" },
    { value: "Manual", label: "Manual" },
  ];

  const [schedule_input, setSchedule_input] = useState("");

  
  function calculateSched(i) {
    const regexM1 = /(?:Monday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
    const regexT1 = /(?:Tuesday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
    const regexW1 = /(?:Wednesday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
    const regexR1 = /(?:Thursday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
    const regexF1 = /(?:Friday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
    const regexM2 =
      /(?:Monday .*?) - (\b\d{1,2}\b)(:\d{2}\s)([APap][Mm]) - ([\w\d\s]+?)(Tuesday|Wednesday|Thursday|Friday|$)/;
    const regexT2 =
      /(?:Tuesday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Wednesday|Thursday|Friday|$)/;
    const regexW2 =
      /(?:Wednesday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Thursday|Friday|$)/;
    const regexR2 =
      /(?:Thursday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Friday|$)/;
    const regexF2 = /(?:Friday .*?) .* - (\b\d{1,2}:\d{2}\s[APap][Mm]\b)/;

    const matchM1 = regexM1.exec(i);
    const matchT1 = regexT1.exec(i);
    const matchW1 = regexW1.exec(i);
    const matchR1 = regexR1.exec(i);
    const matchF1 = regexF1.exec(i);
    const matchM2 = regexM2.exec(i);
    const matchT2 = regexT2.exec(i);
    const matchW2 = regexW2.exec(i);
    const matchR2 = regexR2.exec(i);
    const matchF2 = regexF2.exec(i);



    if (matchM1) {
      if( matchM1[3] == "AM"  || matchM1[1] == 12 ) {
        setmArr(matchM1[1]);
      } else {
        setmArr(parseInt(matchM1[1]) + 12);
      }
    } else {
      setmArr("");
    }

    if (matchT1) {
      if( matchT1[3] == "AM" || matchT1[1] == 12 ) {
        settArr(matchT1[1]);
      } else {
        settArr(parseInt(matchT1[1]) + 12);
      }
    } else {
      settArr("");
    }

    if (matchW1) {
      if( matchW1[3] == "AM" || matchW1[1] == 12 ) {
        setwArr(matchW1[1]);
      } else {
        setwArr(parseInt(matchW1[1]) + 12);
      }
    } else {
      setwArr("");
    }

    if (matchR1) {
      if( matchR1[3] == "AM" || matchR1[1] == 12 ) {
        setrArr(matchR1[1]);
      } else {
        setrArr(parseInt(matchR1[1]) + 12);
      }
    } else {
      setrArr("");
    }

    if (matchF1) {
      if( matchF1[3] == "AM" || matchF1[1] == 12 ) {
        setfArr(matchF1[1]);
      } else {
        setfArr(parseInt(matchF1[1]) + 12);
      }
    } else {
      setfArr("");
    }

    if (matchM2) {
      if( matchM2[3] == "AM"  || matchM2[1] == 12 ) {
        setmDep(matchM2[1]);
      } else {
        setmDep(parseInt(matchM2[1]) + 12);
      }
    } else {
      setmDep("");
    }

    if (matchT2) {
      if( matchT2[3] == "AM"  || matchT2[1] == 12 ) {
        settDep(matchT2[1]);
      } else {
        settDep(parseInt(matchT2[1]) + 12);
      }
    } else {
      settDep("");
    }

    if (matchW2) {
      if( matchW2[3] == "AM"  || matchW2[1] == 12 ) {
        setwDep(matchW2[1]);
      } else {
        setwDep(parseInt(matchW2[1]) + 12);
      }
    } else {
      setwDep("");
    }

    if (matchR2) {
      if( matchR2[3] == "AM"  || matchR2[1] == 12 ) {
        setrDep(matchR2[1]);
      } else {
        setrDep(parseInt(matchR2[1]) + 12);
      }
    } else {
      setrDep("");
    }

    if (matchF2) {
      if( matchF2[3] == "AM"  || matchF2[1] == 12 ) {
        setfDep(matchF2[1]);
      } else {
        setfDep(parseInt(matchF2[1]) + 12);
      }
    } else {
      setfDep("");
    }
  }

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
    if (mDep == 24) {
      return;
    }
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
    if (tDep == 24) {
      return;
    }
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
    if (wDep == 24) {
      return;
    }
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
    if (rDep == 24) {
      return;
    }
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
    if (fDep == 24) {
      return;
    }
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
      <h1>Edit Schedule</h1>
      <h2></h2>
      <br />
      {pwd != password ? (
        <div>
          <label for="pwd">Current Password: </label>
          <input type="password" id="pwd" name="pwd"></input>
          <button onClick={() => setPwd(document.getElementById("pwd").value)}>
            Submit
          </button>
        </div>
      ) : (
        /* Replace this with a submit form action for submitting to backend.
                    Example:
                    <form action="/backend.php"> <= the action to send to backend or using axios functions
                    <label for="password">New Password: </label>
                    <input type="text" id="password" name="password"><br>
                    <input type="submit" value="Submit">
                    </form>
        */
        <div>
          <select
            id="currentInput"
            value={selectedInput}
            onChange={(e) => setSelectedInput(e.target.value)}
          >
            {inputs.map((inputs) => (
              <option key={inputs.value} value={inputs.value}>
                {inputs.label}
              </option>
            ))}
          </select>
          <br />
          {selectedInput === "Automatic" ? (
            <div>
              <h2>Your Class Schedule</h2>
              <input
                type="text"
                name="schedule_input"
                value={schedule_input}
                onChange={(e) => setSchedule_input(e.target.value)}
              />
              <br/>
              <button onClick = {() => calculateSched(schedule_input)}>Set</button>
              <h3>Monday</h3>
              <p>Arrival: {mArr > 12 ? mArr - 12 + " PM " : mArr == 12 ? mArr + " PM " : mArr + " AM "} 
                 Departure: {mDep > 12 ? mDep - 12 + " PM " : mDep == 12 ? mDep + " PM " : mDep + " AM "}</p>
              <br/>
              <h3>Tuesday</h3>
              <p>Arrival: {tArr > 12 ? tArr - 12 + " PM " : tArr == 12 ? tArr + " PM " : tArr + " AM "} 
                 Departure: {tDep > 12 ? tDep - 12 + " PM " : tDep == 12 ? tDep + " PM " : tDep + " AM "}</p>
              <br/>
              <h3>Wednesday</h3>
              <p>Arrival: {wArr > 12 ? wArr - 12 + " PM " : wArr == 12 ? wArr + " PM " : wArr + " AM "} 
                 Departure: {wDep > 12 ? wDep - 12 + " PM " : wDep == 12 ? wDep + " PM " : wDep + " AM "}</p>
              <br/>
              <h3>Thursday</h3>
              <p>Arrival: {rArr > 12 ? rArr - 12 + " PM " : rArr == 12 ? rArr + " PM " : rArr + " AM "} 
                 Departure: {rDep > 12 ? rDep - 12 + " PM " : rDep == 12 ? rDep + " PM " : rDep + " AM "}</p>
              <br/>
              <h3>Friday</h3>
              <p>Arrival: {fArr > 12 ? fArr - 12 + " PM " : fArr == 12 ? fArr + " PM " : fArr + " AM "} 
                 Departure: {fDep > 12 ? fDep - 12 + " PM " : fDep == 12 ? fDep + " PM " : fDep + " AM "}</p>
              <br/>
            </div>
          ) : (
            <div>
              <h2>Monday</h2>
              <h2>
                Arrival: {mArr > 12 ? mArr - 12 + " PM " : mArr == 12 ? mArr + " PM " : mArr + " AM "}
                <button onClick={mAUp}>+</button>
                <button onClick={mADw}>-</button>
                <br />
                Departure: {mDep > 12 ? mDep - 12 + " PM " : mDep == 12 ? mDep + " PM " : mDep + " AM "}
                <button onClick={mDUp}>+</button>
                <button onClick={mDDw}>-</button>
              </h2>
              <br />

              <h2>Tuesday</h2>
              <h2>
                Arrival: {tArr > 12 ? tArr - 12 + " PM " : tArr == 12 ? tArr + " PM " : tArr + " AM "}
                <button onClick={tAUp}>+</button>
                <button onClick={tADw}>-</button>
                <br />
                Departure: {tDep > 12 ? tDep - 12 + " PM " : tDep == 12 ? tDep + " PM " : tDep + " AM "}
                <button onClick={tDUp}>+</button>
                <button onClick={tDDw}>-</button>
              </h2>
              <br />

              <h2>Wednesday</h2>
              <h2>
                Arrival: {wArr > 12 ? wArr - 12 + " PM " : wArr == 12 ? wArr + " PM " : wArr + " AM "}
                <button onClick={wAUp}>+</button>
                <button onClick={wADw}>-</button>
                <br />
                Departure: {wDep > 12 ? wDep - 12 + " PM " : wDep == 12 ? wDep + " PM " : wDep + " AM "}
                <button onClick={wDUp}>+</button>
                <button onClick={wDDw}>-</button>
              </h2>
              <br />

              <h2>Thursday</h2>
              <h2>
                Arrival: {rArr > 12 ? rArr - 12 + " PM " : rArr == 12 ? rArr + " PM " : rArr + " AM "}
                <button onClick={rAUp}>+</button>
                <button onClick={rADw}>-</button>
                <br />
                Departure: {rDep > 12 ? rDep - 12 + " PM " : rDep == 12 ? rDep + " PM " : rDep + " AM "}
                <button onClick={rDUp}>+</button>
                <button onClick={rDDw}>-</button>
              </h2>
              <br />

              <h2>Friday</h2>
              <h2>
                Arrival: {fArr > 12 ? fArr - 12 + " PM " : fArr == 12 ? fArr + "PM" : fArr + " AM "}
                <button onClick={fAUp}>+</button>
                <button onClick={fADw}>-</button>
                <br />
                Departure: {fDep > 12 ? fDep - 12 + " PM " : fDep == 12 ? fDep + "PM" : fDep + " AM "}
                <button onClick={fDUp}>+</button>
                <button onClick={fDDw}>-</button>
              </h2>
              <br />
            </div>
          )}
          <br />
          <button type="submit">Submit Changes</button>
        </div>
      )}
      <br />
      <br />
      {pwd != password && pwd != "" ? "Incorrect Password" : null}
      <br />
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

export default EditSchedule;
