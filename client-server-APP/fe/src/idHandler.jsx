// idHandler.jsx
import React, { useState } from "react";

const IdHandlerComponent = () => {
  const [clientID, setID] = useState("4");

  const setClientID = (id) => {
    setID(id);
    console.log(clientID)
  };

  const getClientID = () => {
    console.log(clientID)
    return clientID;
  };

  return {
    setClientID,
    getClientID
  };
};

export default IdHandlerComponent;
