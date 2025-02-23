import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleDecrease() {
    // setCounter(counter - 1);
    // we can also pass a callback function inside setCounter like below
    setCounter((previousCounter) => previousCounter - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Deacrease</button>
      <button onClick={handleReset}>Reset</button>
      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Multiply by 2
      </button>
    </>
  );
}

export default Counter;
