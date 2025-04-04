import React from "react";
import Todo from "./Todo.jsx";
// import { useContext } from "react";
// import { TodoContext } from "./TodosProvider.jsx";

import { useTodos } from "./TodosProvider.jsx";

function Todos() {
  const { todos } = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Todos;
