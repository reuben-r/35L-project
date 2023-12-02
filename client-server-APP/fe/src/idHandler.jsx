// idHandler.jsx
import React, { useState } from "react";

const IdHandlerComponent = () => {
  const [clientID, setID] = useState("");

  const setClientID = (id) => {
    setID(id);
  };

  const getClientID = () => {
    return clientID;
  };

  return {
    setClientID,
    getClientID
  };
};

export default IdHandlerComponent;
