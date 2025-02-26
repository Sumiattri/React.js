import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      // toast.dismiss(); // Dismiss any existing toast
      // toast.error("please fill a input", { autoClose: 1000 });

      // toast.success("please fill a input", { autoClose: 1000 });

      const toastId = "unique-toast"; // Unique ID for this toast
      if (!toast.isActive(toastId)) {
        toast.error("Please fill  input 🎉", { toastId, autoClose: 1000 });
      }

      // alert("please give valid input");

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
      <form onSubmit={handleClick} className="todoForm">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="todoForm__input"
        />
        <button type="submit" className="todoForm__btn">
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
