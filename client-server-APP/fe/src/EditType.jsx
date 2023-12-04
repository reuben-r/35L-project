import React, { useState, useEffect } from "react";
import "./signup.css";
//import axios from 'axios' <========================================================================================== UnCOMMENT

function EditType() {
  const [password1, setPassword1] = useState("test"); //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const [type1, setType1] = useState("Driver");
  const types = [
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" },
  ];

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

  const fetchType = () => {
    //<====================================================================== UnCOMMENT and make sure function is named properly
    axios
      .get(`http://localhost:8081/user/getType/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
      .then((response) => {
        const [type] = response.data;

        setType1(type);

        setError(null);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : error.message);
      });
  };

  /*
  const handleChangeType = () => {  //<======================================= UnCOMMENT and go to line 93 or "<button onClick={handleChangeType}>Submit Changes</button>"
    axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
      type: type1;
  }).then(res => {
      console.log(res)
  };
  */

  return (
    <div>
      <h1>Edit Type</h1>
      <h2>{type1}</h2>
      <br />
      {pwd != password1 ? (
        <div>
          <label for="pwd">Current Password: </label>
          <input type="password" id="pwd" name="pwd"></input>
          <button
            onClick={() => {
              setPwd(document.getElementById("pwd").value);
              //fetchType(); //<========================================================================= UnCOMMENT and input correct function
              //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
            }}
          >
            Submit
          </button>
        </div>
      ) : (
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
            onClick={() => setType1(document.getElementById("type").value)}
          >
            Set
          </button>
          <br />
          <p />
          <button /*onClick={handleChangeType}*/>Submit Changes</button>
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

export default EditType;
