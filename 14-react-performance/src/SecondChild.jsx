import React from "react";

function SecondChild({ state1 }) {
  console.log("Second child rendered");

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px 5px",
        backgroundColor: state1 ? "green" : "red",
      }}
    >
      <p>container for state 1 </p>
    </div>
  );
}

export default React.memo(SecondChild);
