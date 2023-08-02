import React, { useState} from "react";
import quotes from "./Quotes";

const App = () => {
  const [message, setMessage] = useState({quote: "", author: ""});

const crackCookie = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setMessage(quotes[randomIndex]);
  };

  return (
    <div className="grid-container">
      <h1>Quote Cookie</h1>
      <button onClick={crackCookie}>Crack the Cookie</button>
        {message.quote && (<div className="grid-item"><p>{message.quote}</p><p>- {message.author}</p>
        </div>
        )}
    </div>
  );
};

export default App;
