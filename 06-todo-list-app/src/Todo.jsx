import React from "react";

function Todo({ title, completed, id }) {
  return (
    <div
      style={{
        border: "1px solid #292929",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <p>Title : {title}</p>
      <p>completed : {completed ? "true" : "false"}</p>
      <p></p>
    </div>
  );
}

export default Todo;
