import React, { useState, useEffect } from "react";
import "./signup.css";
import axios from 'axios'


function TestPage(){
    const [error, setError] = useState(null);


    //NAME TO ID
    const [name, setName] = useState("");
    const [retrieved_ID, setRetrievedID] = useState("")
    const nameToID = () => {
        axios.get(`http://localhost:8081/user/nameToID/${name}`)
        .then(response => {
          const [retrieved_ID] = response.data;
          setRetrievedID(retrieved_ID);
          setError(null);
        })
        .catch(error => {
          setError(error.response ? error.response.data : error.message);
        });
      };



      //ID TO ADDRESS
      const [id, setID] = useState("")
      const [retrieved_address, setRetrieved_address] = useState("")
      const idToAddress = () => {
        axios.get(`http://localhost:8081/user/idToAddress/${id}`)
        .then(response => {
          const [retrieved_address] = response.data;
          setRetrieved_address(retrieved_address);
          setError(null);
        })
        .catch(error => {
          setError(error.response ? error.response.data : error.message);
        });
      };

    return (
        <div>
        <div>
            Here is a page with test implementations for all the backend functions<br/>
            The only point of this is so that the frontent team can look at it
        </div>
        {/*test nameToID*/}
        <div>
            <label htmlFor="nameInput">Enter Name:</label>
            <input
                type="text"
                name="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={nameToID}>Name to ID</button>
            <div>Retrieved ID: {retrieved_ID}</div>
        </div>

        {/*test idToAddress*/}
        <div>
            <label htmlFor="idInput">Enter ID:</label>
            <input
                type="text"
                id="idInput"
                value={id}
                onChange={(e) => setID(e.target.value)}
            />
            <button onClick={idToAddress}>ID to Address</button>
            <div>Retrieved Address: {retrieved_address}</div>
        </div>
        </div>
    );


}


export default TestPage