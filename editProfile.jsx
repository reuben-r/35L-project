import React, { useState, useEffect } from "react";
import "./signup.css";
function EditProfile() {
  //Replace with variables from server
  const [user, setUser] = useState("FastestDriver");
  const [address, setAddress] = useState("12345 Far From School");
  const [password, setPassword] = useState("StopSignsRSuggestions");
  const [type, setType] = useState("Driver");
  const types = [
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" }
  ];
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedArrival, setSelectedArrival] = useState("9:30AM");
  const [selectedDepart, setSelectedDepart] = useState("5:30PM");

  const days = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" }
  ];

  const [monday, setMonday] = useState({
    day: "Monday",
    arrival: "9:30AM",
    depart: "5:00PM"
  });
  const [tuesday, setTuesday] = useState({
    day: "Tuesday",
    arrival: "8:30AM",
    depart: "6:00PM"
  });
  const [wednesday, setWednesday] = useState({
    day: "Wednesday",
    arrival: "10:30AM",
    depart: "4:00PM"
  });
  const [thursday, setThursday] = useState({
    day: "Thursday",
    arrival: "11:30AM",
    depart: "3:00PM"
  });
  const [friday, setFriday] = useState({
    day: "Friday",
    arrival: "10:30AM",
    depart: "7:00PM"
  });

  return (
    <div>
      <h1>Edit Profile</h1>

      <div>
        <br></br>
        <h2>Username</h2>
        <p>{user}</p>
        <input id="user"></input>
        <button onClick={() => setUser(document.getElementById("user").value)}>
          Change
        </button>
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>Password</h2>
        <p>{password}</p>
        {/*<form action=""> Input Data into backend*/}
        <input id="password"></input>
        <button
          onClick={() => setPassword(document.getElementById("password").value)}
        >
          Change
        </button>
        {/*</form>*/}
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>Home Address</h2>
        <p>{address}</p>
        <input id="address"></input>
        <button
          onClick={() => setAddress(document.getElementById("address").value)}
        >
          Change
        </button>
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>{type}</h2>
        <select id="type">
          {types.map((types) => (
            <option key={types.value} value={types.value}>
              {types.label}
            </option>
          ))}
        </select>
        <button onClick={() => setType(document.getElementById("type").value)}>
          Change
        </button>
        <br></br>
        <br></br>
      </div>
      <div>
        <h2>What day?</h2>
        <select
          id="currentDay"
          value = {selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((days) => (
            <option key={days.value} value={days.value}>
              {days.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>{selectedDay}</h2>
        { selectedDay === "Monday" ?
          <h2>Arrival: {monday.arrival} <br/> Departure: {monday.depart}</h2>
          : null 
        }
        { selectedDay === "Tuesday" ?
          <h2>Arrival: {tuesday.arrival} <br/> Departure: {tuesday.depart}</h2>
          : null 
        }
        { selectedDay === "Wednesday" ?
          <h2>Arrival: {wednesday.arrival} <br/> Departure: {wednesday.depart}</h2>
          : null 
        }
        { selectedDay === "Thursday" ?
          <h2>Arrival: {thursday.arrival} <br/> Departure: {thursday.depart}</h2>
          : null 
        }
        { selectedDay === "Friday" ?
          <h2>Arrival: {friday.arrival} <br/> Departure: {friday.depart}</h2>
          : null 
        }

      </div>
    </div>
  );
}

export default EditProfile;
