import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { addTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = { title: title, id: nanoid(), completed: false };
    dispatch(addTodo(newTodo));
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
