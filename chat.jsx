import React, { useState } from "react";
import "./signup.css";

const Chat = () => {
  const userName = "Jonah";
  const otherUser = "Simulated";

  const [conversation, setConversation] = useState([]);
  const [userReal, setUserReal] = useState("");
  const [userSim, setUserSim] = useState("");

  const sendMessage = (text, user) => {
    setConversation([...conversation, { text, user }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleRealMessage();
    }
  };

  const handleRealMessage = () => {
    sendMessage(userReal, userName);
    setUserReal("");
  };

  const handleSimMessage = () => {
    sendMessage(userSim, otherUser);
    setUserSim("");
  };

  return (
    <div>
      <h1>UCLA Carpool Connect Chat</h1>
      <div classname="chat-display">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={msg.user === userName ? 'Real' : 'Sim' }
          >

            {`${msg.text}`}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={userReal}
          onChange={(e) => setUserReal(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type Chat Here"
        />
        <button onClick={handleRealMessage}>Send</button>
      </div>
      <div>
        <input
          type="text"
          value={userSim}
          onChange={(e) => setUserSim(e.target.value)}
          placeholder="Simulate Response Here"
        />
        <button onClick={handleSimMessage}>Simulate Response</button>
      </div>
    </div>
  );
};

export default Chat;
