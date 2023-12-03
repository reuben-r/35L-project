import React, { useState, useEffect } from "react";
import "./signup.css";

function EditUsername() {
  const password = "test"; //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const id = 123456789;
  const [username, setUsername] = useState("BestDriver");

  return (
    <div>
      <h1>Edit Username</h1>
      <h2>{username}</h2>
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
          <label for="username">New Username: </label>
          <input id="username"></input>
          <button
            onClick={() =>
              setUsername(document.getElementById("username").value)
            }
          >
            Change
          </button>
        </div>
      )}
      <br />
      <br />
      {pwd != password && pwd != "" ? "Incorrect Password" : null}
      <br />
    </div>
  );
}

export default EditUsername;
