import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please give valid Input");
      return;
    }

    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
