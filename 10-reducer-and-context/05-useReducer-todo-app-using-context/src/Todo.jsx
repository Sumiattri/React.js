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
        border: "1px solid black",
        margin: "10px",
        padding: "3px",
        borderRadius: "10px",
        backgroundColor: "rgb(156, 150, 150)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%", // Change this to a percentage or fixed width
        maxWidth: "800px", // Increase max width
        height: "50px",
        paddingLeft: "15px",
        paddingRight: "15px",
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
