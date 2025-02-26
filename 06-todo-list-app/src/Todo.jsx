import React from "react";
import { GiCrossMark } from "react-icons/gi";

function Todo({ title, completed, id, toggleCompleted, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}> {title}</p>
      </div>
      <div className="cross-btn" onClick={() => removeTodo(id)}>
        <GiCrossMark />
      </div>
    </div>
  );
}

export default Todo;
