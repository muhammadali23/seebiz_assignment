import { useState } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrementInput = () => {
    setCount(count + 1);
  };
  const handledecrementInput = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <Child
        onIncrement={handleIncrementInput}
        onDecrement={handledecrementInput}
      />
    </>
  );
}

export default App;
