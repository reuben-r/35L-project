import React, { useState, useEffect } from "react";
import "./signup.css";
//import axios from 'axios' <========================================================================================== UnCOMMENT

function EditAddress() {
  const [password1, setPassword1] = useState("test"); //User Password
  const [pwd, setPwd] = useState(""); //Password Check
  const [address1, setAddress1] = useState("12345 Fast Lane");

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

  const fetchAddress = () => {
    //<====================================================================== UnCOMMENT and make sure function is named properly
    axios
      .get(`http://localhost:8081/user/getAddress/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
      .then((response) => {
        const [address] = response.data;

        setAddress1(address);

        setError(null);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : error.message);
      });
  };

  /*
  const handleChangeAddress = () => {  //<======================================= UnCOMMENT and go to line 83 or "<button onClick={handleChangeAddress}>Submit Changes</button>"
    axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
      address: address1;
  }).then(res => {
      console.log(res)
  };
  */

  return (
    <div>
      <h1>Edit Address</h1>
      <h2>{address1}</h2>
      <br />
      {pwd != password1 ? (
        <div>
          <label for="pwd">Current Password: </label>
          <input type="password" id="pwd" name="pwd"></input>
          <button
            onClick={() => {
              setPwd(document.getElementById("pwd").value);
              //fetchAddress(); //<========================================================================= UnCOMMENT and input correct function
              //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
            }}
          ></button>
        </div>
      ) : (
        <div>
          <label for="address1">New Address: </label>
          <input id="address1"></input>
          <button
            onClick={() =>
              setAddress1(document.getElementById("address1").value)
            }
          >
            Set
          </button>
          <br />
          <p />
          <button /*onClick={handleChangeAddress}*/>Submit Changes</button>
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

export default EditAddress;
