import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./signup.css";
const ClassScheduleInput = ({ onSignUpSuccess }) => {
    const history = useHistory();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

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
      <br></br>
      <div>
              <button type="submit" onClick={() => { onSignUpSuccess(); history.push("/"); }}>Sign In</button>
      </div>
    </div>
  );
}

export default ClassScheduleInput;
