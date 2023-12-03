import React, { useState, useEffect } from "react";
import "./signup.css";

function EditPassword() {
  const [password, setPassword] = useState("test"); //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const [tempPass1, setTempPass1] = useState(""); //Check new password
  const [tempPass2, setTempPass2] = useState(""); //Check new password
  const id = 123456789;

  return (
    <div>
      <h1>Edit Password</h1>
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
          <label for="tempPass1">New Password: </label>
          <input
            id="tempPass1"
            onChange={(e) => setTempPass1(e.target.value)}
          ></input>
          <br />
          <label for="tempPass2">Re-input Password: </label>
          <input
            id="tempPass2"
            onChange={(e) => setTempPass2(e.target.value)}
          ></input>
          <br />
          {tempPass1 === tempPass2 && tempPass1 != "" ? (
            <button
              onClick={() =>
                setPassword(document.getElementById("tempPass2").value)
              }
            >
              Change
            </button>
          ) : null}
        </div>
      )}
      <br />
      <br />
      {pwd != password && pwd != "" ? "Incorrect Password" : null}
      <br />
    </div>
  );
}

export default EditPassword;
