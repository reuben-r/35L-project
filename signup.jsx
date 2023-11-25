import React, { useState, useEffect } from "react";
import "./signup.css";
function ClassScheduleInput() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("choice1");
  const [m1, setM1] = useState("");
  const [t1, setT1] = useState("");
  const [w1, setW1] = useState("");
  const [r1, setR1] = useState("");
  const [f1, setF1] = useState("");
  const [m2, setM2] = useState("");
  const [t2, setT2] = useState("");
  const [w2, setW2] = useState("");
  const [r2, setR2] = useState("");
  const [f2, setF2] = useState("");

  useEffect(() => {
    calculateSched(input4);
  }, [input4]);

  function calculateSched(i) {
    const regexM1 = /(?:Monday).*?(\b\d{1,2}:\d{2}\s[APap][Mm]\b)/;
    const regexT1 = /(?:Tuesday).*?(\b\d{1,2}:\d{2}\s[APap][Mm]\b)/;
    const regexW1 = /(?:Wednesday).*?(\b\d{1,2}:\d{2}\s[APap][Mm]\b)/;
    const regexR1 = /(?:Thursday).*?(\b\d{1,2}:\d{2}\s[APap][Mm]\b)/;
    const regexF1 = /(?:Friday).*?(\b\d{1,2}:\d{2}\s[APap][Mm]\b)/;
    const regexM2 = /(?:Monday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Tuesday|Wednesday|Thursday|Friday|$)/;
    const regexT2 = /(?:Tuesday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Wednesday|Thursday|Friday|$)/;
    const regexW2 = /(?:Wednesday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Thursday|Friday|$)/;
    const regexR2 = /(?:Thursday .*?) - (\b\d{1,2}:\d{2}\s[APap][Mm]\b) - ([\w\d\s]+?)(Friday|$)/;
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
      setM1(matchM1[1]);
    } else {
      setM1("");
    }

    if (matchT1) {
      setT1(matchT1[1]);
    } else {
      setT1("");
    }

    if (matchW1) {
      setW1(matchW1[1]);
    } else {
      setW1("");
    }

    if (matchR1) {
      setR1(matchR1[1]);
    } else {
      setR1("");
    }

    if (matchF1) {
      setF1(matchF1[1]);
    } else {
      setF1("");
    }

    if (matchM2) {
      setM2(matchM2[1]);
    } else {
      setM2("");
    }

    if (matchT2) {
      setT2(matchT2[1]);
    } else {
      setT2("");
    }

    if (matchW2) {
      setW2(matchW2[1]);
    } else {
      setW2("");
    }

    if (matchR2) {
      setR2(matchR2[1]);
    } else {
      setR2("");
    }

    if (matchF2) {
      setF2(matchF2[1]);
    } else {
      setF2("");
    }
  }

  const choices = [
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" }
  ];

  return (
    <div>
      <h1>UCLA Carpool Connect</h1>
      <div>
        <h3>Username</h3>
        <input
          type="text"
          name="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <h3>Password</h3>
        <input
          type="text"
          name="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div>
        <h3>Your Home Address</h3>
        <input
          type="text"
          name="input3"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
      </div>
      <div>
        <h3>Your Class Schedule</h3>
        <input
          type="text"
          name="input4"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
      </div>
      <div>
        <h3>Driver or Rider</h3>
        <select
          value={selectedChoice}
          onChange={(e) => setSelectedChoice(e.target.value)}
        >
          {choices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <br></br>
        <h2>Account Overview</h2>
        <p>Username: {input1}</p>
        <p>Home Address: {input3}</p>
        <p>Account Type: {selectedChoice}</p>
        <br></br>
        <h3>Ride Schedule</h3>
        <p>
          Monday Arrival: {m1} Departure: {m2}
        </p>
        <p>
          Tuesday Arrival: {t1} Departure: {t2}
        </p>
        <p>
          Wednesday Arrival: {w1} Departure: {w2}
        </p>
        <p>
          Thursday Arrival: {r1} Departure: {r2}
        </p>
        <p>
          Friday Arrival: {f1} Departure: {f2}
        </p>
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
}

export default ClassScheduleInput;
