import React, { useState, useEffect } from 'react';
import './signup.css'
function ClassScheduleInput() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    

    return (
        <div>
            <h1>UCLA Carpool Connect</h1>
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
                    type="text" {/*You can put type="password" if you want to display dots their input*/}
                    name="input2"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />
            </div>
           <br></br>
            <div>
                <button type="submit">Sign In</button>
            </div>
        </div>
    );
}

export default ClassScheduleInput;
