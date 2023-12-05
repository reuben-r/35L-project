import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useHistory,
    Switch,
} from "react-router-dom";

import "./signup.css";





const View = () => {


    const [username1, setUsername1] = useState("FastestDriver");
    const [address1, setAddress1] = useState("12345 Far From School");
    const [password1, setPassword1] = useState("tests"); //User password
    const [pwd, setPwd] = useState(""); //Password Check
    const [type1, setType1] = useState("Driver");

    const [selectedDay, setSelectedDay] = useState("Monday");
    const days = [
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
    ];

    //Replace all of these with user info of schedule
    const [mArr, setmArr] = useState(6);
    const [mDep, setmDep] = useState(15);

    const [tArr, settArr] = useState(10);
    const [tDep, settDep] = useState(18);

    const [wArr, setwArr] = useState(12);
    const [wDep, setwDep] = useState(18);

    const [rArr, setrArr] = useState(8);
    const [rDep, setrDep] = useState(14);

    const [fArr, setfArr] = useState(10);
    const [fDep, setfDep] = useState(18);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function
    /*
    const fetchAllData = () => {
        //<====================================================================== UnCOMMENT and make sure variables work
        axios
            .get(`http://localhost:8081/user/getAllData/${id}`)
            .then((response) => {
                const [
                    name,
                    password,
                    address,
                    type,
                    mon_A,
                    mon_D,
                    tue_A,
                    tue_D,
                    wed_A,
                    wed_D,
                    thu_A,
                    thu_D,
                    fri_A,
                    fri_D,
                ] = response.data;

                setUsername1(name);
                setPassword1(password);
                setAddress1(address);
                setType1(type);

                setmArr(mon_A);
                settArr(tue_A);
                setwArr(wed_A);
                setrArr(thu_A);
                setfArr(fri_A);

                setmDep(mon_D);
                settDep(tue_D);
                setwDep(wed_D);
                setrDep(thu_D);
                setfDep(fri_D);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };
    */
    return (
        <div>
            <h1>View Profile</h1>
            <h2></h2>
            <br />
            {pwd != password1 ? (
                <div>
                    <label for="pwd">Current Password: </label>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button
                        onClick={() => {
                            setPwd(document.getElementById("pwd").value);
                            //fetchAllData(); //<========================================================================= UnCOMMENT
                        }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div>
                    <div>
                        <br></br>
                        <h2>Username</h2>
                        <p>{username1}</p>
                        <br></br>
                    </div>
                    <div>
                        <h2>Password</h2>
                        <p type="password">{password1}</p>
                        <br></br>
                    </div>
                    <div>
                        <h2>Home Address</h2>
                        <p>{address1}</p>
                        <br></br>
                    </div>
                    <div>
                        <h2>Account Type</h2>
                        <p>{type1}</p>
                        <br></br>
                    </div>
                    <div>
                        <h2>Class Schedule</h2>
                    </div>
                    <div class="column">
                        <h2>Monday</h2>
                        <h2 class="bold-text">
                            Arrival:{" "}
                            {mArr > 12
                                ? mArr - 12 + " PM "
                                : mArr == 12
                                    ? mArr + " PM "
                                    : mArr + " AM "}
                            <br />
                            Departure:{" "}
                            {mDep > 12
                                ? mDep - 12 + " PM "
                                : mDep == 12
                                    ? mDep + " PM "
                                    : mDep + " AM "}
                        </h2>
                    </div>
                    <div class="column">
                        <h2>Tuesday</h2>
                        <h2 class="bold-text">
                            Arrival:{" "}
                            {tArr > 12
                                ? tArr - 12 + " PM "
                                : tArr == 12
                                    ? tArr + " PM "
                                    : tArr + " AM "}
                            <br />
                            Departure:{" "}
                            {tDep > 12
                                ? tDep - 12 + " PM "
                                : tDep == 12
                                    ? tDep + " PM "
                                    : tDep + " AM "}
                        </h2>
                    </div>
                    <div class="column">
                        <h2>Wednesday</h2>
                        <h2 class="bold-text">
                            Arrival:{" "}
                            {wArr > 12
                                ? wArr - 12 + " PM "
                                : wArr == 12
                                    ? wArr + " PM "
                                    : wArr + " AM "}
                            <br />
                            Departure:{" "}
                            {wDep > 12
                                ? wDep - 12 + " PM "
                                : wDep == 12
                                    ? wDep + " PM "
                                    : wDep + " AM "}
                        </h2>
                    </div>
                    <div class="column">
                        <h2>Thursday</h2>
                        <h2 class="bold-text">
                            Arrival:{" "}
                            {rArr > 12
                                ? rArr - 12 + " PM "
                                : rArr == 12
                                    ? rArr + " PM "
                                    : rArr + " AM "}
                            <br />
                            Departure:{" "}
                            {rDep > 12
                                ? rDep - 12 + " PM "
                                : rDep == 12
                                    ? rDep + " PM "
                                    : rDep + " AM "}
                        </h2>
                    </div>
                    <div class="column">
                        <h2>Friday</h2>
                        <h2 class="bold-text">
                            Arrival:{" "}
                            {fArr > 12
                                ? fArr - 12 + " PM "
                                : fArr == 12
                                    ? fArr + " PM "
                                    : fArr + " AM "}
                            <br />
                            Departure:{" "}
                            {fDep > 12
                                ? fDep - 12 + " PM "
                                : fDep == 12
                                    ? fDep + " PM "
                                    : fDep + " AM "}
                        </h2>
                    </div>
                </div>
            )}
            <br />
            {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
        </div>
    );


};

const Username = () => {
    const [password1, setPassword1] = useState("tests"); //User Password
    const [pwd, setPwd] = useState(""); //Password Check
    const [username1, setUsername1] = useState("BestDriver");

    //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function
    /*
    const fetchPassword = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getPassword/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [password] = response.data;

                setPassword1(password);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    const fetchUsername = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getUsername/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [username] = response.data;

                setUsername1(username);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    
    const handleChangeUsername = () => {  //<======================================= UnCOMMENT and go to line 85 or "<button onClick={handleChangeUsername}>Submit Changes</button>"
      axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
        username: username1;
    }).then(res => {
        console.log(res)
    };
    */

    return (
        <div>
            <h1>Edit Username</h1>
            <h2>{username1}</h2>
            <br />
            {pwd != password1 ? (
                <div>
                    <label for="pwd">Current Password: </label>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button
                        onClick={() => {
                            setPwd(document.getElementById("pwd").value);
                            //fetchUsername(); //<========================================================================= UnCOMMENT and input correct function
                            //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
                        }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div>
                    <label for="username1">New Username: </label>
                    <input id="username1"></input>
                    <button
                        onClick={() =>
                            setUsername1(document.getElementById("username1").value)
                        }
                    >
                        Set
                    </button>
                    <br />
                    <p />
                    <button /*onClick={handleChangeUsername}*/>Submit Changes</button>
                </div>
                /* UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked */
            )}
            <br />
            <br />
            {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
            <br />
        </div>
    );
};

const Type = () => {
    const [password1, setPassword1] = useState("tests"); //User Password
    const [pwd, setPwd] = useState(""); //Password Check
    const [type1, setType1] = useState("Driver");
    const types = [
        { value: "Driver", label: "Driver" },
        { value: "Rider", label: "Rider" },
    ];

    //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function
    /*
    const fetchPassword = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getPassword/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [password] = response.data;

                setPassword1(password);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    const fetchType = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getType/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [type] = response.data;

                setType1(type);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    
    const handleChangeType = () => {  //<======================================= UnCOMMENT and go to line 93 or "<button onClick={handleChangeType}>Submit Changes</button>"
      axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
        type: type1;
    }).then(res => {
        console.log(res)
    };
    */

    return (
        <div>
            <h1>Edit Type</h1>
            <h2>{type1}</h2>
            <br />
            {pwd != password1 ? (
                <div>
                    <label for="pwd">Current Password: </label>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button
                        onClick={() => {
                            setPwd(document.getElementById("pwd").value);
                            //fetchType(); //<========================================================================= UnCOMMENT and input correct function
                            //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
                        }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div>
                    <select id="type">
                        {types.map((types) => (
                            <option key={types.value} value={types.value}>
                                {types.label}
                            </option>
                        ))}
                    </select>
                    {"     "}
                    <button
                        onClick={() => setType1(document.getElementById("type").value)}
                    >
                        Set
                    </button>
                    <br />
                    <p />
                    <button /*onClick={handleChangeType}*/>Submit Changes</button>
                </div>
                /* UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked */
            )}
            <br />
            <br />
            {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
            <br />
        </div>
    );
};

const Schedule = () => {
    const [password1, setPassword1] = useState("tests"); //User Password
    const [pwd, setPwd] = useState(""); //Password Check

    const [selectedInput, setSelectedInput] = useState("Automatic");
    const inputs = [
        { value: "Automatic", label: "Automatic" },
        { value: "Manual", label: "Manual" },
    ];

    const [schedule_input, setSchedule_input] = useState("");

    function calculateSched(i) {
        const regexM1 = /(?:Monday).*?(\b\d{1,2}\b)(:\d{2}\s)([APap][Mm])/;
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
            if (matchM1[3] == "AM" || matchM1[1] == 12) {
                setmArr(parseInt(matchM1[1]));
            } else {
                setmArr(parseInt(matchM1[1]) + 12);
            }
        } else {
            setmArr("");
        }

        if (matchT1) {
            if (matchT1[3] == "AM" || matchT1[1] == 12) {
                settArr(parseInt(matchT1[1]));
            } else {
                settArr(parseInt(matchT1[1]) + 12);
            }
        } else {
            settArr("");
        }

        if (matchW1) {
            if (matchW1[3] == "AM" || matchW1[1] == 12) {
                setwArr(parseInt(matchW1[1]));
            } else {
                setwArr(parseInt(matchW1[1]) + 12);
            }
        } else {
            setwArr("");
        }

        if (matchR1) {
            if (matchR1[3] == "AM" || matchR1[1] == 12) {
                setrArr(parseInt(matchR1[1]));
            } else {
                setrArr(parseInt(matchR1[1]) + 12);
            }
        } else {
            setrArr("");
        }

        if (matchF1) {
            if (matchF1[3] == "AM" || matchF1[1] == 12) {
                setfArr(parseInt(matchF1[1]));
            } else {
                setfArr(parseInt(matchF1[1]) + 12);
            }
        } else {
            setfArr("");
        }

        if (matchM2) {
            if (matchM2[3] == "AM" || matchM2[1] == 12) {
                setmDep(parseInt(matchM2[1]) + 1);
            } else {
                setmDep(parseInt(matchM2[1]) + 13);
            }
        } else {
            setmDep("");
        }

        if (matchT2) {
            if (matchT2[3] == "AM" || matchT2[1] == 12) {
                settDep(parseInt(matchT2[1]) + 1);
            } else {
                settDep(parseInt(matchT2[1]) + 13);
            }
        } else {
            settDep("");
        }

        if (matchW2) {
            if (matchW2[3] == "AM" || matchW2[1] == 12) {
                setwDep(parseInt(matchW2[1]) + 1);
            } else {
                setwDep(parseInt(matchW2[1]) + 13);
            }
        } else {
            setwDep("");
        }

        if (matchR2) {
            if (matchR2[3] == "AM" || matchR2[1] == 12) {
                setrDep(parseInt(matchR2[1]) + 1);
            } else {
                setrDep(parseInt(matchR2[1]) + 13);
            }
        } else {
            setrDep("");
        }

        if (matchF2) {
            if (matchF2[3] == "AM" || matchF2[1] == 12) {
                setfDep(parseInt(matchF2[1]) + 1);
            } else {
                setfDep(parseInt(matchF2[1]) + 13);
            }
        } else {
            setfDep("");
        }
    }

    const [mArr, setmArr] = useState(6);
    const [mDep, setmDep] = useState(15);
    const mAUp = () => {
        temp = changeTime(mArr, "+");
        if (temp == 24) {
            return;
        }
        if (temp == mDep) {
            setmDep(changeTime(mDep, "+"));
        }
        setmArr(temp);
        return;
    };
    const mADw = () => {
        temp = changeTime(mArr, "-");
        setmArr(temp);
        return;
    };
    const mDUp = () => {
        temp = changeTime(mDep, "+");
        setmDep(temp);
        return;
    };
    const mDDw = () => {
        temp = changeTime(mDep, "-");
        if (temp == 0) {
            return;
        }
        if (temp == mArr) {
            setmArr(changeTime(mArr, "-"));
        }
        setmDep(temp);
        return;
    };

    const [tArr, settArr] = useState(10);
    const [tDep, settDep] = useState(18);
    const tAUp = () => {
        temp = changeTime(tArr, "+");
        if (temp == 24) {
            return;
        }
        if (temp == tDep) {
            settDep(changeTime(tDep, "+"));
        }
        settArr(temp);
        return;
    };
    const tADw = () => {
        temp = changeTime(tArr, "-");
        settArr(temp);
        return;
    };
    const tDUp = () => {
        temp = changeTime(tDep, "+");
        settDep(temp);
        return;
    };
    const tDDw = () => {
        temp = changeTime(tDep, "-");
        if (temp == 0) {
            return;
        }
        if (temp == tArr) {
            settArr(changeTime(tArr, "-"));
        }
        settDep(temp);
        return;
    };

    const [wArr, setwArr] = useState(12);
    const [wDep, setwDep] = useState(18);
    const wAUp = () => {
        temp = changeTime(wArr, "+");
        if (temp == 24) {
            return;
        }
        if (temp == wDep) {
            setwDep(changeTime(wDep, "+"));
        }
        setwArr(temp);
        return;
    };
    const wADw = () => {
        temp = changeTime(wArr, "-");
        setwArr(temp);
        return;
    };
    const wDUp = () => {
        temp = changeTime(wDep, "+");
        setwDep(temp);
        return;
    };
    const wDDw = () => {
        temp = changeTime(wDep, "-");
        if (temp == 0) {
            return;
        }
        if (temp == wArr) {
            setwArr(changeTime(wArr, "-"));
        }
        setwDep(temp);
        return;
    };

    const [rArr, setrArr] = useState(8);
    const [rDep, setrDep] = useState(14);
    const rAUp = () => {
        temp = changeTime(rArr, "+");
        if (temp == 24) {
            return;
        }
        if (temp == rDep) {
            setrDep(changeTime(rDep, "+"));
        }
        setrArr(temp);
        return;
    };
    const rADw = () => {
        temp = changeTime(rArr, "-");
        setrArr(temp);
        return;
    };
    const rDUp = () => {
        temp = changeTime(rDep, "+");
        setrDep(temp);
        return;
    };
    const rDDw = () => {
        temp = changeTime(rDep, "-");
        if (temp == 0) {
            return;
        }
        if (temp == rArr) {
            setrArr(changeTime(rArr, "-"));
        }
        setrDep(temp);
        return;
    };

    const [fArr, setfArr] = useState(10);
    const [fDep, setfDep] = useState(18);
    const fAUp = () => {
        temp = changeTime(fArr, "+");
        if (temp == 24) {
            return;
        }
        if (temp == fDep) {
            setfDep(changeTime(fDep, "+"));
        }
        setfArr(temp);
        return;
    };
    const fADw = () => {
        temp = changeTime(fArr, "-");
        setfArr(temp);
        return;
    };
    const fDUp = () => {
        temp = changeTime(fDep, "+");
        setfDep(temp);
        return;
    };
    const fDDw = () => {
        temp = changeTime(fDep, "-");
        if (temp == 0) {
            return;
        }
        if (temp == fArr) {
            setfArr(changeTime(fArr, "-"));
        }
        setfDep(temp);
        return;
    };

    //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function
    /*
    const fetchPassword = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getPassword/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [password] = response.data;

                setPassword1(password);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = () => {
        //<====================================================================== UnCOMMENT and make sure variables work
        axios
            .get(`http://localhost:8081/user/getSched/${id}`)
            .then((response) => {
                const [
                    mon_A,
                    mon_D,
                    tue_A,
                    tue_D,
                    wed_A,
                    wed_D,
                    thu_A,
                    thu_D,
                    fri_A,
                    fri_D,
                    Pmon_A,
                    Pmon_D,
                    Ptue_A,
                    Ptue_D,
                    Pwed_A,
                    Pwed_D,
                    Pthu_A,
                    Pthu_D,
                    Pfri_A,
                    Pfri_D,
                ] = response.data;

                setmArr(mon_A);
                settArr(tue_A);
                setwArr(wed_A);
                setrArr(thu_A);
                setfArr(fri_A);

                setmDep(mon_D);
                settDep(tue_D);
                setwDep(wed_D);
                setrDep(thu_D);
                setfDep(fri_D);

                setPM1(Pmon_A);
                setPT1(Ptue_A);
                setPW1(Pwed_A);
                setPR1(Pthu_A);
                setPF1(Pfri_A);

                setPM2(Pmon_D);
                setPT2(Ptue_D);
                setPW2(Pwed_D);
                setPR2(Pthu_D);
                setPF2(Pfri_D);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    
    const handleChangeSchedule = () => {  //<======================================= UnCOMMENT and go to line 664 or "<button onClick={handleChangeSchedule}>Submit Changes</button>"
      axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
        mon_A: mArr,
        mon_D: mDep,
        tue_A: tArr,
        tue_D: tDep,
        wed_A: wArr,
        wed_D: wDep,
        thu_A: rArr,
        thu_D: rDep,
        fri_A: fArr, 
        fri_D: fDep
    }).then(res => {
        console.log(res)
    };
    */

    return (
        <div>
            <h1>Edit Schedule</h1>
            <h2></h2>
            <br />
            {pwd != password1 ? (
                <div>
                    <label for="pwd">Current Password: </label>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button
                        onClick={() => {
                            setPwd(document.getElementById("pwd").value);
                            //fetchData(); //<========================================================================= UnCOMMENT
                            //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
                        }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div>
                    {error && (
                        <div>
                            <h2>Error:</h2>
                            <pre>{JSON.stringify(error, null, 2)}</pre>
                        </div>
                    )}
                    <select
                        id="currentInput"
                        value={selectedInput}
                        onChange={(e) => setSelectedInput(e.target.value)}
                    >
                        {inputs.map((inputs) => (
                            <option key={inputs.value} value={inputs.value}>
                                {inputs.label}
                            </option>
                        ))}
                    </select>
                    <br />
                    {selectedInput === "Automatic" ? (
                        <div>
                            <h2>Your Class Schedule</h2>
                            <input
                                type="text"
                                name="schedule_input"
                                value={schedule_input}
                                onChange={(e) => setSchedule_input(e.target.value)}
                            />
                            <br />
                            <button onClick={() => calculateSched(schedule_input)}>
                                Set
                            </button>
                            <h3>Monday</h3>
                            <p>
                                Arrival:{" "}
                                {mArr > 12
                                    ? mArr - 12 + " PM "
                                    : mArr == 12
                                        ? mArr + " PM "
                                        : mArr + " AM "}
                                Departure:{" "}
                                {mDep > 12
                                    ? mDep - 12 + " PM "
                                    : mDep == 12
                                        ? mDep + " PM "
                                        : mDep + " AM "}
                            </p>
                            <br />
                            <h3>Tuesday</h3>
                            <p>
                                Arrival:{" "}
                                {tArr > 12
                                    ? tArr - 12 + " PM "
                                    : tArr == 12
                                        ? tArr + " PM "
                                        : tArr + " AM "}
                                Departure:{" "}
                                {tDep > 12
                                    ? tDep - 12 + " PM "
                                    : tDep == 12
                                        ? tDep + " PM "
                                        : tDep + " AM "}
                            </p>
                            <br />
                            <h3>Wednesday</h3>
                            <p>
                                Arrival:{" "}
                                {wArr > 12
                                    ? wArr - 12 + " PM "
                                    : wArr == 12
                                        ? wArr + " PM "
                                        : wArr + " AM "}
                                Departure:{" "}
                                {wDep > 12
                                    ? wDep - 12 + " PM "
                                    : wDep == 12
                                        ? wDep + " PM "
                                        : wDep + " AM "}
                            </p>
                            <br />
                            <h3>Thursday</h3>
                            <p>
                                Arrival:{" "}
                                {rArr > 12
                                    ? rArr - 12 + " PM "
                                    : rArr == 12
                                        ? rArr + " PM "
                                        : rArr + " AM "}
                                Departure:{" "}
                                {rDep > 12
                                    ? rDep - 12 + " PM "
                                    : rDep == 12
                                        ? rDep + " PM "
                                        : rDep + " AM "}
                            </p>
                            <br />
                            <h3>Friday</h3>
                            <p>
                                Arrival:{" "}
                                {fArr > 12
                                    ? fArr - 12 + " PM "
                                    : fArr == 12
                                        ? fArr + " PM "
                                        : fArr + " AM "}
                                Departure:{" "}
                                {fDep > 12
                                    ? fDep - 12 + " PM "
                                    : fDep == 12
                                        ? fDep + " PM "
                                        : fDep + " AM "}
                            </p>
                            <br />
                        </div>
                    ) : (
                        <div>
                            <h2>Monday</h2>
                            <h2>
                                Arrival:{" "}
                                {mArr > 12
                                    ? mArr - 12 + " PM "
                                    : mArr == 12
                                        ? mArr + " PM "
                                        : mArr + " AM "}
                                <button onClick={mAUp}>+</button>
                                <button onClick={mADw}>-</button>
                                <br />
                                Departure:{" "}
                                {mDep > 12
                                    ? mDep - 12 + " PM "
                                    : mDep == 12
                                        ? mDep + " PM "
                                        : mDep + " AM "}
                                <button onClick={mDUp}>+</button>
                                <button onClick={mDDw}>-</button>
                            </h2>
                            <br />

                            <h2>Tuesday</h2>
                            <h2>
                                Arrival:{" "}
                                {tArr > 12
                                    ? tArr - 12 + " PM "
                                    : tArr == 12
                                        ? tArr + " PM "
                                        : tArr + " AM "}
                                <button onClick={tAUp}>+</button>
                                <button onClick={tADw}>-</button>
                                <br />
                                Departure:{" "}
                                {tDep > 12
                                    ? tDep - 12 + " PM "
                                    : tDep == 12
                                        ? tDep + " PM "
                                        : tDep + " AM "}
                                <button onClick={tDUp}>+</button>
                                <button onClick={tDDw}>-</button>
                            </h2>
                            <br />

                            <h2>Wednesday</h2>
                            <h2>
                                Arrival:{" "}
                                {wArr > 12
                                    ? wArr - 12 + " PM "
                                    : wArr == 12
                                        ? wArr + " PM "
                                        : wArr + " AM "}
                                <button onClick={wAUp}>+</button>
                                <button onClick={wADw}>-</button>
                                <br />
                                Departure:{" "}
                                {wDep > 12
                                    ? wDep - 12 + " PM "
                                    : wDep == 12
                                        ? wDep + " PM "
                                        : wDep + " AM "}
                                <button onClick={wDUp}>+</button>
                                <button onClick={wDDw}>-</button>
                            </h2>
                            <br />

                            <h2>Thursday</h2>
                            <h2>
                                Arrival:{" "}
                                {rArr > 12
                                    ? rArr - 12 + " PM "
                                    : rArr == 12
                                        ? rArr + " PM "
                                        : rArr + " AM "}
                                <button onClick={rAUp}>+</button>
                                <button onClick={rADw}>-</button>
                                <br />
                                Departure:{" "}
                                {rDep > 12
                                    ? rDep - 12 + " PM "
                                    : rDep == 12
                                        ? rDep + " PM "
                                        : rDep + " AM "}
                                <button onClick={rDUp}>+</button>
                                <button onClick={rDDw}>-</button>
                            </h2>
                            <br />

                            <h2>Friday</h2>
                            <h2>
                                Arrival:{" "}
                                {fArr > 12
                                    ? fArr - 12 + " PM "
                                    : fArr == 12
                                        ? fArr + "PM"
                                        : fArr + " AM "}
                                <button onClick={fAUp}>+</button>
                                <button onClick={fADw}>-</button>
                                <br />
                                Departure:{" "}
                                {fDep > 12
                                    ? fDep - 12 + " PM "
                                    : fDep == 12
                                        ? fDep + "PM"
                                        : fDep + " AM "}
                                <button onClick={fDUp}>+</button>
                                <button onClick={fDDw}>-</button>
                            </h2>
                            <br />
                        </div>
                    )}
                    <br />
                    <button /*onClick={handleChangeSchedule}*/>Submit Changes</button>
                </div>
                /* UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked */
            )}
            <br />
            <br />
            {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
            <br />
        </div>
    );


function changeTime(time, sign) {
    if (sign == "+") {
        if (time == 24) {
            return time;
        }
        time++;
    } else {
        if (time == 0) {
            return time;
        }
        time--;
    }
    return time;
}

};

const Password = () => {
    const [password1, setPassword1] = useState("tests"); //User Password
    const [pwd, setPwd] = useState(""); //Password Check
    const [tempPass1, setTempPass1] = useState(""); //Check new password
    const [tempPass2, setTempPass2] = useState(""); //Check new password

    //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function
    /*
    const fetchPassword = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getPassword/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [password] = response.data;

                setPassword1(password);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    
    const handleChangePassword = () => {  //<======================================= UnCOMMENT and go to line 73 or "handleChangePassword();"
      axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
        password: password1;
    }).then(res => {
        console.log(res)
    };
    */

    return (
        <div>
            <h1>Edit Password</h1>
            <br />
            {pwd != password1 ? (
                <div>
                    <label for="pwd">Current Password: </label>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button
                        onClick={() => {
                            setPwd(document.getElementById("pwd").value);
                            //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
                        }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div>
                    <label for="tempPass1">New Password: </label>
                    <input
                        id="tempPass1"
                        onChange={(e) => setTempPass1(e.target.value)}
                    ></input>
                    <br />
                    <label for="tempPass2">Re-input Password: </label>
                    <input
                        id="tempPass2"
                        onChange={(e) => setTempPass2(e.target.value)}
                    ></input>
                    <br />
                    {tempPass1 === tempPass2 && tempPass1 != "" ? (
                        <button
                            onClick={() => {
                                setPassword1(document.getElementById("tempPass2").value);
                                //handleChangePassword();
                                // <=============================================================== UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked
                            }}
                        >
                            Change
                        </button>
                    ) : null}
                </div>
            )}
            <br />
            <br />
            {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
            <br />
        </div>
    );
};

const Address = () => {
    const [password1, setPassword1] = useState("tests"); //User Password
    const [pwd, setPwd] = useState(""); //Password Check
    const [address1, setAddress1] = useState("12345 Fast Lane");

    //const id = getClientID(); <=========================================================================================== UnCOMMENT and put correct function
    /*
    const fetchPassword = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getPassword/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [password] = response.data;

                setPassword1(password);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    const fetchAddress = () => {
        //<====================================================================== UnCOMMENT and make sure function is named properly
        axios
            .get(`http://localhost:8081/user/getAddress/${id}`) //<====================================================================== UnCOMMENT and make sure function is named properly
            .then((response) => {
                const [address] = response.data;

                setAddress1(address);

                setError(null);
            })
            .catch((error) => {
                setError(error.response ? error.response.data : error.message);
            });
    };

    
    const handleChangeAddress = () => {  //<======================================= UnCOMMENT and go to line 83 or "<button onClick={handleChangeAddress}>Submit Changes</button>"
      axios.post("http://localhost:8081/user/create", {   //<======================================= UnCOMMENT and replace with correct axios function
        address: address1;
    }).then(res => {
        console.log(res)
    };
    */

    return (
        <div>
            <h1>Edit Address</h1>
            <h2>{address1}</h2>
            <br />
            {pwd != password1 ? (
                <div>
                    <label for="pwd">Current Password: </label>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button
                        onClick={() => {
                            setPwd(document.getElementById("pwd").value);
                            //fetchAddress(); //<========================================================================= UnCOMMENT and input correct function
                            //fetchPassword(); //<========================================================================= UnCOMMENT and input correct function
                        }}
                    ></button>
                </div>
            ) : (
                <div>
                    <label for="address1">New Address: </label>
                    <input id="address1"></input>
                    <button
                        onClick={() =>
                            setAddress1(document.getElementById("address1").value)
                        }
                    >
                        Set
                    </button>
                    <br />
                    <p />
                    <button /*onClick={handleChangeAddress}*/>Submit Changes</button>
                </div>
                /* UnCOMMENT and change button to correct format if needed. Also add going back to View Profile when clicked */
            )}
            <br />
            <br />
            {pwd != password1 && pwd != "" ? "Incorrect Password" : null}
            <br />
        </div>
    );
};

const Profile = () => (
    
    <div>
    <br></br>
        <Router>
        <>

            <div className="navBar">

                <Link to="/Profile/">
                    <button>View Profile</button>
                </Link>
                <Link to="/Profile/username">
                    <button>Edit Username</button>
                </Link>
                <Link to="/Profile/yype">
                    <button>Change Profile Type</button>
                </Link>
                <Link to="/Profile/schedule">
                    <button>Edit Schedule</button>
                </Link>
                <Link to="/Profile/password">
                    <button>Edit Password</button>
                </Link>
                <Link to="/Profile/address">
                    <button>Edit Address</button>
                </Link>
            </div>


            <div className="LinkPage">
            <Switch>
                <Route exact path="/Profile/" component={View}>
                    <View />
                </Route>
                <Route exact path="/Profile/username" component={Username}>
                    <Username />
                </Route>
                <Route exact path="/Profile/type" component={Type}>
                    <Type />
                </Route>
                <Route exact path="/Profile/schedule" component={Schedule}>
                    <Schedule />
                </Route>
                <Route exact path="/Profile/password" component={Password}>
                    <Password />
                </Route>
                <Route exact path="/Profile/address" component={Address}>
                    <Address />
                </Route>
            </Switch>
                </div>
            </>
        </Router>
    </div>

);

export default Profile;
