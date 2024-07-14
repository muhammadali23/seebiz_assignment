import React, { useState, useEffect } from "react";

function Test() {
  const [number, setNumber] = useState(0);
  const [shouldAlert, setShouldAlert] = useState(false);

  useEffect(() => {
    if (shouldAlert) {
      const timeout = setTimeout(() => {
        alert(number);
        setShouldAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [shouldAlert, number]);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prevNumber) => prevNumber + 5);
          setShouldAlert(true);
        }}
      >
        +5
      </button>
    </div>
  );
}

export default Test;
