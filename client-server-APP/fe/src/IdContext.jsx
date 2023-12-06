import React, { createContext, useState, useContext } from "react";

const IdContext = createContext();

export const IdProvider = ({ children }) => {
  const [clientID, setID] = useState("2");

  const setClientID = (id) => {
    setID(id);
  };

  const getClientID = () => {
    return clientID;
  };

  return (
    <IdContext.Provider value={{ clientID, setClientID, getClientID }}>
      {children}
    </IdContext.Provider>
  );
};

export const useId = () => {
  return useContext(IdContext);
};
