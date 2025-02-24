import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "Learn cricket", completed: false },
  ]);
  function addTodo(newTodo) {
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo]);
  }
  return (
    <>
      <h1 className="unique">Hello Sumit</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
