import React, { useState, useEffect } from "react";
import "./signup.css";
//import axios from 'axios' <========================================================================================== UnCOMMENT

function EditPassword() {
  const [password1, setPassword1] = useState("test"); //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const [tempPass1, setTempPass1] = useState(""); //Check new password
  const [tempPass2, setTempPass2] = useState(""); //Check new password

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

  /*
  const handleChangePassword = () => {  //<======================================= UnCOMMENT and go to line 73 or "handleChangePassword();"
    axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
      password: password1;
  }).then(res => {
      console.log(res)
  };
  */

  return (
    <div>
      <h1>Edit Password</h1>
      <br />
      {pwd != password1 ? (
        <div>
          <label for="pwd">Current Password: </label>
          <input type="password" id="pwd" name="pwd"></input>
          <button
            onClick={() => {
              setPwd(document.getElementById("pwd").value);
              //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
            }}
          >
            Submit
          </button>
        </div>
      ) : (
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
              onClick={() => {
                setPassword1(document.getElementById("tempPass2").value);
                //handleChangePassword();
                // <=============================================================== UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked
              }}
            >
              Change
            </button>
          ) : null}
        </div>
      )}
      <br />
      <br />
      {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
      <br />
    </div>
  );
}

export default EditPassword;
