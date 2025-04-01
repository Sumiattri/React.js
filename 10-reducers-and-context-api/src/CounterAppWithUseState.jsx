import React from "react";
import { useState } from "react";

function CounterAppWithUseState() {
  const [state, setState] = useState({ counter: 0 });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Counter Application</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <h1>{state.counter}</h1>
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              counter: prevState.counter + 1,
            }));
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              counter: 0,
            }));
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              counter: prevState.counter - 1,
            }));
          }}
        >
          Decrease
        </button>
      </form>
    </div>
  );
}

export default CounterAppWithUseState;
