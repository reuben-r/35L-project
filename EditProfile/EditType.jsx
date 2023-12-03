import React, { useState, useEffect } from "react";
import "./signup.css";

function EditType() {
  const password = "test"; //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const id = 123456789;
  const [type, setType] = useState("Driver");
  const types = [
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" },
  ];

  return (
    <div>
      <h1>Edit Type</h1>
      <h2>{type}</h2>
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
          <select id="type">
            {types.map((types) => (
              <option key={types.value} value={types.value}>
                {types.label}
              </option>
            ))}
          </select>
          {"     "}
          <button
            onClick={() => setType(document.getElementById("type").value)}
          >
            Set
          </button>
          <br />
          <p />
          <button type="Submit">Submit Changes</button>
        </div>
      )}
      <br />
      <br />
      {pwd != password && pwd != "" ? "Incorrect Password" : null}
      <br />
    </div>
  );
}

export default EditType;
