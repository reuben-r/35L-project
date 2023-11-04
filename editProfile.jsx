import React, { useState, useEffect } from "react";
import "./signup.css";
function EditProfile() {
  //Replace with variables from server
  const [user, setUser] = useState("FastestDriver");
  const [address, setAddress] = useState("12345 Far From School");
  const [password, setPassword] = useState("StopSignsRSuggestions");
  const [type, setType] = useState("Driver");
  const choices = [
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" }
  ];

  return (
    <div>
      <h1>Edit Profile</h1>

      <div>
        <br></br>
        <h2>Username</h2>
        <p>{user}</p>
          <input 
            id="user" >
          </input>
          <button onClick={()=>setUser(document.getElementById("user").value)}>Change</button>
        <br></br><br></br>
      </div>
      <div>
          <h2>Password</h2>
          <p>{password}</p>
          {/*<form action=""> Input Data into backend*/}
            <input 
              id="password"> 
            </input>
            <button onClick={()=>setPassword(document.getElementById("password").value)}>Change</button>
          {/*</form>*/}   
        <br></br><br></br>
        </div>
        <div>
          <h2>Home Address</h2>
          <p>{address}</p>
            <input 
              id="address" >
            </input>
            <button onClick={()=>setAddress(document.getElementById("address").value)}>Change</button>
          <br></br><br></br>
        </div>
        <p>{type}</p>
        <select id="type">
          {choices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}    
        </select>
        <button onClick={()=>setType(document.getElementById("type").value)}>Change</button>

    </div>
  );
}


export default EditProfile;
