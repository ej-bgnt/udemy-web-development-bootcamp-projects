import React, { useState } from "react";

function App() {
  const start = 0;
  const [count, updateCount] = useState(start);

  function minusCount() {
    updateCount(count - 1);
  }

  function addCount() {
    updateCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={minusCount}>-</button>
      <button onClick={addCount}>+</button>
    </div>
  );
}

export default App;
