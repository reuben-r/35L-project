import React, { useState, useEffect } from "react";
import "./signup.css";
//import axios from 'axios' <========================================================================================== UnCOMMENT

function EditUsername() {
  const [password1, setPassword1] = useState("test"); //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const [username1, setUsername1] = useState("BestDriver");

  //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function

  const fetchPassword = () => {
    //<====================================================================== UnCOMMENT and make sure function is named properly
    axios
      .get(`http://localhost:8081/user/getPassword/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
      .then((response) => {
        const [password] = response.data;

        setPassword1(password);

        setError(null);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : error.message);
      });
  };

  const fetchUsername = () => {
    //<====================================================================== UnCOMMENT and make sure function is named properly
    axios
      .get(`http://localhost:8081/user/getUsername/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
      .then((response) => {
        const [username] = response.data;

        setUsername1(username);

        setError(null);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : error.message);
      });
  };

  /*
  const handleChangeUsername = () => {  //<======================================= UnCOMMENT and go to line 85 or "<button onClick={handleChangeUsername}>Submit Changes</button>"
    axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
      username: username1;
  }).then(res => {
      console.log(res)
  };
  */

  return (
    <div>
      <h1>Edit Username</h1>
      <h2>{username1}</h2>
      <br />
      {pwd != password1 ? (
        <div>
          <label for="pwd">Current Password: </label>
          <input type="password" id="pwd" name="pwd"></input>
          <button
            onClick={() => {
              setPwd(document.getElementById("pwd").value);
              //fetchUsername(); //<========================================================================= UnCOMMENT and input correct function
              //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <label for="username1">New Username: </label>
          <input id="username1"></input>
          <button
            onClick={() =>
              setUsername1(document.getElementById("username1").value)
            }
          >
            Set
          </button>
          <br />
          <p />
          <button /*onClick={handleChangeUsername}*/>Submit Changes</button>
        </div>
        /* UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked */
      )}
      <br />
      <br />
      {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
      <br />
    </div>
  );
}

export default EditUsername;
