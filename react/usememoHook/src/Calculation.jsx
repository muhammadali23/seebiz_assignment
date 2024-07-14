import { useState } from "react";

export default function Calculation() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    console.log("increment called");
    setCount(count + 1);
  };
  const decrementCount = () => {
    console.log("decrement called");
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}
