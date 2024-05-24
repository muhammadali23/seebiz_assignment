import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="parent">
        <div className="child">{count}</div>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  );
}

export default App;
