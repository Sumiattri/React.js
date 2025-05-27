import React from "react";
import { GiCrossMark } from "react-icons/gi";
// import { useContext } from "react";
// import { TodoContext } from "./TodosProvider";

import { useTodos } from "./TodosProvider";

function Todo({ id, title, completed }) {
  const { handleDelete, handleToggle } = useTodos();

  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem auto",
        padding: "1rem",
        borderRadius: "8px",
        width: "90%" /* Responsive width */,
        maxWidth: "700px",
      }}
    >
      <input
        style={{ width: "20px", height: "20px", marginRight: "10px" }}
        onClick={() => handleToggle(id)}
        type="checkbox"
      ></input>

      <h4 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        title: {title}
      </h4>
      <div onClick={() => handleDelete(id)}>
        <GiCrossMark />
      </div>
    </div>
  );
}

export default Todo;
