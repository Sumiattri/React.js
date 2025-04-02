import React from "react";
import { GiCrossMark } from "react-icons/gi";

function Todo({ id, title, completed, dispatch }) {
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id: id } });
  };
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  };
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
        onClick={handleToggle}
        type="checkbox"
      ></input>

      <h4 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        title: {title}
      </h4>
      <div onClick={handleDelete}>
        <GiCrossMark />
      </div>
    </div>
  );
}

export default Todo;
