import React from "react";
import Todo from "./Todo";

function Todos({ todos, toggleCompleted, removeTodo }) {
  return (
    <div class="todos_container">
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
}

export default Todos;
