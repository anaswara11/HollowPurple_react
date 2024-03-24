// Chat.js
import React, { useState } from 'react';

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (userInput.trim().length > 0) {
      const newUserMessage = {
        text: userInput,
        position: 'left',
      };

      const newAssistantMessage = {
        text: 'AI: This is a placeholder for the API response. Replace this with your API response.',
        position: 'right',
      };

      setMessages([...messages, newUserMessage, newAssistantMessage]);
      setUserInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.position === 'left'
                ? 'chat-message user'
                : 'chat-message assistant'
            }
          >
            <div className="chat-message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          placeholder="Type a message here..."
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;