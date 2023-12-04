import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import './signup.css'
const ClassScheduleInput = ({ onSignUpSuccess }) => {

    const history = useHistory();
    const [username_input, setUsername_input] = useState('');
    const [password_input, setPassword_input] = useState('');
    const [address_input, setAddress_input] = useState('');
    const [schedule_input, setSchedule_input] = useState('');
    const [selectedChoice, setSelectedChoice] = useState('Driver');
    const [m1, setM1] = useState("");
    const [t1, setT1] = useState("");
    const [w1, setW1] = useState("");
    const [r1, setR1] = useState("");
    const [f1, setF1] = useState("");
    const [m2, setM2] = useState("");
    const [t2, setT2] = useState("");
    const [w2, setW2] = useState("");
    const [r2, setR2] = useState("");
    const [f2, setF2] = useState("");

    useEffect(() => {
        calculateSched(schedule_input);
    }, [schedule_input]);


    //This function will add the specified ride to the rider
    //The input must be a valid rider name, the day, and the arrival or departure
    //The day must have the first 3 letters spelled correctly, day and arr/dep are case insensitive, rider is case sensitive
    const [rider_input, setRider_input] = useState('');
    const [day_input, setDay_input] = useState('');
    const [time_input, setTime_input] = useState('');
    const [a_or_d, setA_or_D] = useState('');
    const handleAddRide = () => {
        axios.post("http://localhost:8081/user/addRide", {
            rider: rider_input,
            day: day_input,
            time: time_input,
            AorD: a_or_d
        }).then(res => {
            console.log(res)
        })
    }

    const handleSubmit = () => {

        calculateSched(schedule_input);

        axios.post("http://localhost:8081/user/create", {
            username: username_input,
            password: password_input,
            address: address_input,
            type: selectedChoice,
            mon_A: m1,
            mon_D: m2,
            tue_A: t1,
            tue_D: t2,
            wed_A: w1,
            wed_D: w2,
            thu_A: r1,
            thu_D: r2,
            fri_A: f1, 
            fri_D: f2
        }).then(res => {
            console.log(res)
        })
        onSignUpSuccess(); 
        history.push("/");
    }


    function calculateSched(i) {
        const regexM1 = /(?:Monday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/; //<======================= Separated Regex into three parts (first digits of time)(":" two minute digits)(AM or PM)
        const regexT1 = /(?:Tuesday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
        const regexW1 = /(?:Wednesday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
        const regexR1 = /(?:Thursday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
        const regexF1 = /(?:Friday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
        const regexM2 =
          /(?:Monday .*?) - (\b\d{1,2}\b)(:\d{2}\s)([APap][Mm]) - ([\w\d\s]+?)(Tuesday|Wednesday|Thursday|Friday|$)/;
        const regexT2 =
          /(?:Tuesday .*?) - (\b\d{1,2}\b)(:\d{2}\s)([APap][Mm]) - ([\w\d\s]+?)(Wednesday|Thursday|Friday|$)/;
        const regexW2 =
          /(?:Wednesday .*?) - (\b\d{1,2}\b)(:\d{2}\s)([APap][Mm]) - ([\w\d\s]+?)(Thursday|Friday|$)/;
        const regexR2 =
          /(?:Thursday .*?) - (\b\d{1,2}\b)(:\d{2}\s)([APap][Mm]) - ([\w\d\s]+?)(Friday|$)/;
        const regexF2 = /(?:Friday .*?) .* - (\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
    
        const matchM1 = regexM1.exec(i);
        const matchT1 = regexT1.exec(i);
        const matchW1 = regexW1.exec(i);
        const matchR1 = regexR1.exec(i);
        const matchF1 = regexF1.exec(i);
        const matchM2 = regexM2.exec(i);
        const matchT2 = regexT2.exec(i);
        const matchW2 = regexW2.exec(i);
        const matchR2 = regexR2.exec(i);
        const matchF2 = regexF2.exec(i);
    
        if (matchM1) {
          if (matchM1[3] == "AM" || matchM1[1] == 12) { // <=========================================== Checks if time is "AM" or "PM" and sets value accordingly. 2PM = 14 or 10AM = 10
            setM1(parseInt(matchM1[1]));
          } else {
            setM1(parseInt(matchM1[1]) + 12);
          }
        } else {
          setM1("");
        }
    
        if (matchT1) {
          if (matchT1[3] == "AM" || matchT1[1] == 12) {
            setT1(parseInt(matchT1[1]));
          } else {
            setT1(parseInt(matchT1[1]) + 12);
          }
        } else {
          setT1("");
        }
    
        if (matchW1) {
          if (matchW1[3] == "AM" || matchW1[1] == 12) {
            setW1(parseInt(matchW1[1]));
          } else {
            setW1(parseInt(matchW1[1]) + 12);
          }
        } else {
          setW1("");
        }
    
        if (matchR1) {
          if (matchR1[3] == "AM" || matchR1[1] == 12) {
            setR1(parseInt(matchR1[1]));
          } else {
            setR1(parseInt(matchR1[1]) + 12);
          }
        } else {
          setR1("");
        }
    
        if (matchF1) {
          if (matchF1[3] == "AM" || matchF1[1] == 12) {
            setF1(parseInt(matchF1[1]));
          } else {
            setF1(parseInt(matchF1[1]) + 12);
          }
        } else {
          setF1("");
        }
    
        if (matchM2) {
          if (matchM2[3] == "AM" || matchM2[1] == 12) {
            setM2(parseInt(matchM2[1]) + 1); // <========================== Adds an extra hour to the first value of time to round up. i.e. 9:50AM = 9 + 1 = 10AM || 8:50PM = 20 + 1 = 21 = 9PM
          } else {
            setM2(parseInt(matchM2[1]) + 13);
          }
        } else {
          setM2("");
        }
    
        if (matchT2) {
          if (matchT2[3] == "AM" || matchT2[1] == 12) {
            setT2(parseInt(matchT2[1]) + 1);
          } else {
            setT2(parseInt(matchT2[1]) + 13);
          }
        } else {
          setT2("");
        }
    
        if (matchW2) {
          if (matchW2[3] == "AM" || matchW2[1] == 12) {
            setW2(parseInt(matchW2[1]) + 1);
          } else {
            setW2(parseInt(matchW2[1]) + 13);
          }
        } else {
          setW2("");
        }
    
        if (matchR2) {
          if (matchR2[3] == "AM" || matchR2[1] == 12) {
            setR2(parseInt(matchR2[1]) + 1);
          } else {
            setR2(parseInt(matchR2[1]) + 13);
          }
        } else {
          setR2("");
        }
    
        if (matchF2) {
          if (matchF2[3] == "AM" || matchF2[1] == 12) {
            setF2(parseInt(matchF2[1]) + 1);
          } else {
            setF2(parseInt(matchF2[1]) + 13);
          }
        } else {
          setF2("");
        }
      }

    const choices = [
        { value: 'Driver', label: 'Driver' },
        { value: 'Rider', label: 'Rider' },
    ];

    return (
        <div>
            <h1>UCLA Carpool Connect</h1>
            <div>
                <h3>Username</h3>
                <input
                    type="text"
                    name="username_input"
                    value={username_input}
                    onChange={(e) => setUsername_input(e.target.value)}
                />
            </div>
            <div>
                <h3>Password</h3>
                <input
                    type="text"
                    name="password_input"
                    value={password_input}
                    onChange={(e) => setPassword_input(e.target.value)}
                />
            </div>
            <div>
                <h3>Your Home Address</h3>
                <input
                    type="text"
                    name="address_input"
                    value={address_input}
                    onChange={(e) => setAddress_input(e.target.value)}
                />
            </div>
            <div>
                <h3>Your Class Schedule</h3>
                <input
                    type="text"
                    name="schedule_input"
                    value={schedule_input}
                    onChange={(e) => setSchedule_input(e.target.value)}
                />
            </div>
            <div>
                <h3>Driver or Rider</h3>
                <select
                    value={selectedChoice}
                    onChange={(e) => setSelectedChoice(e.target.value)}
                >
                    {choices.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                            {choice.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <br></br>
                <h2>Account Overview</h2>
                <p>Username: {username_input}</p>
                <p>Home Address: {address_input}</p>
                <p>Account Type: {selectedChoice}</p>
                <br></br>
                <h3>Ride Schedule</h3>
            <p>
              Monday Arrival:{" "}
              {m1 > 12 ? m1 - 12 + " PM " : m1 == 12 ? m1 + " PM " : m1 + " AM "}{" "/* All of this helps display the integer times as formatted times i.e. 18 = 6 PM*/}
              Departure:{" "}
              {m2 > 12 ? m2 - 12 + " PM " : m2 == 12 ? m2 + " PM " : m2 + " AM "}
            </p>
            <p>
              Tuesday Arrival:{" "}
              {t1 > 12 ? t1 - 12 + " PM " : t1 == 12 ? t1 + " PM " : t1 + " AM "}{" "}
              Departure:{" "}
              {t2 > 12 ? t2 - 12 + " PM " : t2 == 12 ? t2 + " PM " : t2 + " AM "}
            </p>
            <p>
              Wednesday Arrival:{" "}
              {w1 > 12 ? w1 - 12 + " PM " : w1 == 12 ? w1 + " PM " : w1 + " AM "}{" "}
              Departure:{" "}
              {w2 > 12 ? w2 - 12 + " PM " : w2 == 12 ? w2 + " PM " : w2 + " AM "}
            </p>
            <p>
              Thursday Arrival:{" "}
              {r1 > 12 ? r1 - 12 + " PM " : r1 == 12 ? r1 + " PM " : r1 + " AM "}{" "}
              Departure:{" "}
              {r2 > 12 ? r2 - 12 + " PM " : r2 == 12 ? r2 + " PM " : r2 + " AM "}
            </p>
            <p>
              Friday Arrival:{" "}
              {f1 > 12 ? f1 - 12 + " PM " : f1 == 12 ? f1 + " PM " : f1 + " AM "}{" "}
              Departure:{" "}
              {f2 > 12 ? f2 - 12 + " PM " : f2 == 12 ? f2 + " PM " : f2 + " AM "}
            </p>
            </div>
            <div>
                <button onClick={handleSubmit} type="submit">Sign Up</button>
            </div>

            {/* add ride button 
            Extremely ugly but only so that frontend team can see it*/}
            <div>
                <label htmlFor="riderInput">Rider:</label>
                <input type="text" id="riderInput" value={rider_input} onChange={(e) => setRider_input(e.target.value)} />

                <label htmlFor="dayInput">Day:</label>
                <input type="text" id="dayInput" value={day_input} onChange={(e) => setDay_input(e.target.value)} />

                <label htmlFor="timeInput">Time:</label>
                <input type="text" id="timeInput" value={time_input} onChange={(e) => setTime_input(e.target.value)} />

                <label htmlFor="AorDInput">Arrival or Departure:</label>
                <input type="text" id="AorDInput" value={a_or_d} onChange={(e) => setA_or_D(e.target.value)} />

                <button onClick={handleAddRide}>Add Ride</button>
            </div>
        </div>
    );
}

export default ClassScheduleInput;
