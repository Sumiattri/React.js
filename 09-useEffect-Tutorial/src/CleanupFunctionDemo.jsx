import { useState, useEffect } from "react";

// Cleanup function is returned from the callback function of useEffect.
// it is called before the component unmounts

//	•	This is used to:
// •	Remove event listeners
// •	Clear intervals/timeouts
// •	Abort fetch requests

//if there is some value inside the dependency array, then  every time our component will render, cleanup function will be called
// before the useEffect callback function is called.

function CleanupFunctionDemo() {
  console.log("component rendered");

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("effect callback");
    return function cleanUp() {
      console.log("cleanup called");
    };
  }, []);

  return (
    <div style={{ padding: "", margin: "1rem", fontSize: "25px" }}>
      <p> Counter : {counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default CleanupFunctionDemo;
