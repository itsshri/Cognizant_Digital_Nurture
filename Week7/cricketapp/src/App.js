import React, { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <h1>🏏 Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle Component (Flag: {flag.toString()})
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
