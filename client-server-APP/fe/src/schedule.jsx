import React, { useState, useEffect } from "react";
import "./signup.css";
import axios from 'axios'

function ClassScheduleInput() {
  const [mon_A, setM1] = useState("");
  const [tue_A, setT1] = useState("");
  const [wed_A, setW1] = useState("");
  const [thu_a, setR1] = useState("");
  const [fri_A, setF1] = useState("");
  const [mon_D, setM2] = useState("");
  const [tue_D, setT2] = useState("");
  const [wed_D, setW2] = useState("");
  const [thu_D, setR2] = useState("");
  const [fri_D, setF2] = useState("");


  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = () => {
    axios.get(`http://localhost:8081/user/getData/${id}`)
      .then(response => {
        setData(response.data);
        setError(null);
      })
      .catch(error => {
        setError(error.response ? error.response.data : error.message);
        setData(null);
      });
  };


  const m8 = "Ride with Reuben to UCLA";
  const m9 = "";
  const m10 = "";
  const m11 = "";
  const m12 = "";
  const m1 = "";
  const m2 = "";
  const m3 = "";
  const m4 = "";
  const m5 = "Ride Home with Jonah";
  const m6 = "";
  const m7 = "";
  const m8p = "";

  const t8 = "";
  const t9 = "";
  const t10 = "";
  const t11 = "";
  const t12 = "";
  const t1 = "";
  const t2 = "";
  const t3 = "";
  const t4 = "Ride Home with Jacob";
  const t5 = "";
  const t6 = "";
  const t7 = "Ride with Jonah To UCLA";
  const t8p = "";

  const w8 = "";
  const w9 = "";
  const w10 = "";
  const w11 = "";
  const w12 = "";
  const w1 = "";
  const w2 = "Ride with Jacob to UCLA";
  const w3 = "Ride Home with Ray";
  const w4 = "";
  const w5 = "";
  const w6 = "";
  const w7 = "";
  const w8p = "";

  const r8 = "";
  const r9 = "";
  const r10 = "";
  const r11 = "Ride with Ray to UCLA";
  const r12 = "";
  const r1 = "";
  const r2 = "";
  const r3 = "";
  const r4 = "";
  const r5 = "";
  const r6 = "Ride Home with Reuben";
  const r7 = "";
  const r8p = "";

  const f8 = "";
  const f9 = "";
  const f10 = "";
  const f11 = "";
  const f12 = "";
  const f1 = "Ride with Joshua to UCLA";
  const f2 = "";
  const f3 = "";
  const f4 = "";
  const f5 = "";
  const f6 = "";
  const f7 = "";
  const f8p = "Ride Home with Joshua";

  return (
    <div>
      <div>
      <label htmlFor="idInput">Enter ID:</label>
      <input
        type="text"
        id="idInput"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>


      <h1>Schedule View Page</h1>
      <table border="22">
        <tr>
          <td></td>
          <th> Monday </th>
          <th> Tuesday </th>
          <th> Wednesday </th>
          <th> Thursday </th>
          <th> Friday </th>
        </tr>
        <tr>
          <th>7:00-8:00</th>
          <td>{m7}</td>
          <td>{t7}</td>
          <td>{w7}</td>
          <td>{r7}</td>
          <td>{f7}</td>
        </tr>
        <tr>
          <th>8:00-9:00</th>
          <td>{m8}</td>
          <td>{t8}</td>
          <td>{w8}</td>
          <td>{r8}</td>
          <td>{f8}</td>
        </tr>
        <tr>
          <th>9:00-10:00</th>
          <td>{m9}</td>
          <td>{t9}</td>
          <td>{w9}</td>
          <td>{r9}</td>
          <td>{f9}</td>
        </tr>
        <tr>
          <th>10:00-11:00</th>
          <td>{m10}</td>
          <td>{t10}</td>
          <td>{w10}</td>
          <td>{r10}</td>
          <td>{f10}</td>
        </tr>
        <tr>
          <th>11:00-12:00</th>
          <td>{m11}</td>
          <td>{t11}</td>
          <td>{w11}</td>
          <td>{r11}</td>
          <td>{f11}</td>
        </tr>
        <tr>
          <th>12:00-1:00</th>
          <td>{m12}</td>
          <td>{t12}</td>
          <td>{w12}</td>
          <td>{r12}</td>
          <td>{f12}</td>
        </tr>
        <tr>
          <th>1:00-2:00</th>
          <td>{m1}</td>
          <td>{t1}</td>
          <td>{w1}</td>
          <td>{r1}</td>
          <td>{f1}</td>
        </tr>
        <tr>
          <th>2:00-3:00</th>
          <td>{m2}</td>
          <td>{t2}</td>
          <td>{w2}</td>
          <td>{r2}</td>
          <td>{f2}</td>
        </tr>
        <tr>
          <th>3:00-4:00</th>
          <td>{m3}</td>
          <td>{t3}</td>
          <td>{w3}</td>
          <td>{r3}</td>
          <td>{f3}</td>
        </tr>
        <tr>
          <th>4:00-5:00</th>
          <td>{m4}</td>
          <td>{t4}</td>
          <td>{w4}</td>
          <td>{r4}</td>
          <td>{f4}</td>
        </tr>
        <tr>
          <th>5:00-6:00</th>
          <td>{m5}</td>
          <td>{t5}</td>
          <td>{w5}</td>
          <td>{r5}</td>
          <td>{f5}</td>
        </tr>
        <tr>
          <th>6:00-7:00</th>
          <td>{m6}</td>
          <td>{t6}</td>
          <td>{w6}</td>
          <td>{r6}</td>
          <td>{f6}</td>
        </tr>
        <tr>
          <th>7:00-8:00</th>
          <td>{m8p}</td>
          <td>{t8p}</td>
          <td>{w8p}</td>
          <td>{r8p}</td>
          <td>{f8p}</td>
        </tr>
      </table>
    </div>
  );
}

export default ClassScheduleInput;
