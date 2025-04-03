import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#7EAA92",
        borderRadius: "10px",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>Child</h1>
      <GrandChild />
    </div>
  );
}

export default Child;
