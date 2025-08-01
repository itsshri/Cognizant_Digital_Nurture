import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if (isLoggedIn) {
    message = <h1>Welcome back</h1>;
  } else {
    message = <h1>Please sign up.</h1>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
