import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Increment logic
  const increment = () => setCount(count + 1);

  // Multiple functions on Increment
  const handleIncrement = () => {
    increment();
    alert("Hello! Member1");
  };

  // Decrement logic
  const decrement = () => setCount(count - 1);

  // Say Welcome
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>

      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <CurrencyConvertor />
    </div>
  );
}

export default App;
