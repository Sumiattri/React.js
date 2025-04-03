// step 1: import useContext hook from react
// step 2: import the  context that we created in parent component(but first it should be exported in parent component)
// call the useContext hook and pass the created context as a parameter
// the useContext will return the value that we passed in the created context in parent component
// store the returned value in some variable and use it where nedded

import { useContext } from "react";
import { MyAppContext } from "./App";
function GrandChild() {
  const { someFunc, key1 } = useContext(MyAppContext); // object destructuring
  //   console.log(key1);

  return (
    <div
      style={{
        padding: "2rem",
        margin: "0rem",
        backgroundColor: "#FFD9B7",
        borderRadius: "10px",
        boxShadow: "4px 4px 30px rgba(42, 29, 29, 0.2)",
      }}
    >
      <h3>GrandChild</h3>
      <button onClick={someFunc}> Call my function</button>
    </div>
  );
}

export default GrandChild;
