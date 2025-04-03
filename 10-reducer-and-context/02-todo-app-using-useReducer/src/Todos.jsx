import React from "react";
import Todo from "./Todo.jsx";

function Todos({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default Todos;
