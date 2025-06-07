import { useState, useRef, useEffect } from "react";

import { useTodos } from "./TodosProvider";

function AddTodoForm() {
  const autoFocusRef = useRef();
  useEffect(() => {
    autoFocusRef.current.focus();
  });
  const { addTodo } = useTodos();
  const [title, setTitle] = useState(""); // making new State to store new todo entered by user

  const handleSubmit = (e) => {
    e.preventDefault();

    // to avoid empty response from user
    if (title.trim().length === 0) {
      alert("please type something");
      return;
    }

    const newTodo = { title: title, id: crypto.randomUUID(), completed: false };
    addTodo(newTodo);
    setTitle("");
  };
  return (
    <div style={{ padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 120px",
          alignItems: "center",
          margin: "1rem auto",
          padding: "0.7rem",
          borderRadius: "8px",
          width: "90%" /* Responsive width */,
          maxWidth: "700px",
          backgroundColor: "#fff",
        }}
      >
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "80%",
            height: "25px",
            boxSizing: "border-box",
            border: "none",
            outline: "none",
          }}
          ref={autoFocusRef}
        />
        <button
          type="Submit"
          style={{
            height: "30px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "560",
            border: "none",
            backgroundColor: "#2c3e50",
            color: "white",
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
