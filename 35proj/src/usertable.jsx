import React, { useState, useEffect } from 'react';
import './signup.css';


function DisplayTable() {
    const [data, setData] = useState([]);
  
    
    useEffect(() => {
      fetch('http://localhost:8081/users')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, []);
    
  
    return (
      <>
    <div>
        <h1>Current Users</h1>
    </div>
    <div style={{padding: "100px"}}>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>mArr</th>
          <th>mDep</th>
          <th>tArr</th>
          <th>tDep</th>
          <th>wArr</th>
          <th>wDep</th>
          <th>rArr</th>
          <th>rDep</th>
          <th>fArr</th>
          <th>fDep</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={d.userID}>
            <td>{d.userID}</td>
            <td>{d.username}</td>
            <td>{d.mArr}</td>
            <td>{d.mDep}</td>
            <td>{d.tArr}</td>
            <td>{d.tDep}</td>
            <td>{d.wArr}</td>
            <td>{d.wDep}</td>
            <td>{d.rArr}</td>
            <td>{d.rDep}</td>
            <td>{d.fArr}</td>
            <td>{d.fDep}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>

      </tfoot>
    </table>
  </div>
    </>
    );
  }
  
  export default DisplayTable;
  