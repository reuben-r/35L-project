// signin.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import IdHandlerComponent from "./idHandler";  // Update the import path accordingly
import "./signup.css";

const SigninComponent = ({ onSignUpSuccess }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const { setClientID, getClientID } = IdHandlerComponent();

  const [retrieved_ID, setRetrievedID] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const history = useHistory();

  const nameToID = () => {
    axios.get(`http://localhost:8081/user/nameToID/${input1}`)
      .then(response => {
        const [retrievedID] = response.data;
        setRetrievedID(retrievedID);
      })
      .catch(error => {
        console.error(error.response ? error.response.data : error.message);
      });
  };

  const handleSignin = () => {
    axios.post('http://localhost:8081/user/goodSign', {
      username: input1,
      password: input2
    })
      .then(response => {
        const loginSuccess = !response.data;
        setLoginStatus(loginSuccess ? "Login successful" : "Login failed");

        if (loginSuccess) {
          setClientID(retrieved_ID);
          onSignUpSuccess(); 
          history.push("/");
        }

      })
      .catch(error => {
        console.error(error.response ? error.response.data : error.message);
      });
  };

  

  useEffect(() => {
    if (input1) {
      nameToID();
    }
  }, [input1]);

  return (
    <div>
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
          type="password"
          name="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button type="submit" onClick={handleSignin}>Sign In</button>
      </div>
      {loginStatus && (
        <div>
          <p>{loginStatus}</p>
        </div>
      )}
      {getClientID() && (
        <div>
          <p>Client ID: {getClientID()}</p>
        </div>
      )}
    </div>
  );
};

export default SigninComponent;
