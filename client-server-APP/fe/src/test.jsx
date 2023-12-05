import React, { useState } from "react";
import axios from 'axios';

function TestPage() {
    const [error, setError] = useState(null);

    // NAME TO ID
    const [name, setName] = useState("");
    const [retrieved_ID, setRetrievedID] = useState("");
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

    // ID TO ADDRESS
    const [id, setID] = useState("");
    const [retrieved_address, setRetrieved_address] = useState("");
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

    // GET USERS BY TIME AND COLUMN WITH RANGE
    const [timeParameter, setTimeParameter] = useState("");
    const [columnName, setColumnName] = useState("mon_A"); // Default column name, change as needed
    const [rangeParameter, setRangeParameter] = useState("to"); // Default range parameter, change as needed
    const [usersByTimeAndColumn, setUsersByTimeAndColumn] = useState([]);

    const getUsersByTimeAndColumn = () => {
        axios.get(`http://localhost:8081/user/getUsersByTimeAndColumnWithRange?timeParameter=${timeParameter}&columnName=${columnName}&rangeParameter=${rangeParameter}`)
            .then(response => {
                const data = response.data;
                setUsersByTimeAndColumn(data);
                setError(null);
            })
            .catch(error => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    return (
        <div>
            <div>
                Here is a page with test implementations for all the backend functions<br />
                The only point of this is so that the frontend team can look at it
            </div>

            {/* Test nameToID */}
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

            {/* Test idToAddress */}
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

            {/* Test getUsersByTimeAndColumnWithRange */}
            <div>
                <label htmlFor="timeParameterInput">Enter Time Parameter:</label>
                <input
                    type="text"
                    id="timeParameterInput"
                    value={timeParameter}
                    onChange={(e) => setTimeParameter(e.target.value)}
                />
                <label htmlFor="columnNameInput">Enter Column Name:</label>
                <input
                    type="text"
                    id="columnNameInput"
                    value={columnName}
                    onChange={(e) => setColumnName(e.target.value)}
                />
                <label>
                    Range Parameter:
                    <select value={rangeParameter} onChange={(e) => setRangeParameter(e.target.value)}>
                        <option value="to">To</option>
                        <option value="from">From</option>
                    </select>
                </label>
                <button onClick={getUsersByTimeAndColumn}>Get Users By Time and Column</button>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                {/* Add more columns based on your user data structure */}
                            </tr>
                        </thead>
                        <tbody>
                            {usersByTimeAndColumn.map((user, index) => (
                                <tr key={index}>
                                    {Object.values(user).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TestPage;
