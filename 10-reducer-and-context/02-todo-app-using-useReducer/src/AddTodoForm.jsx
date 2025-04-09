import React from "react";
import { useState } from "react";

function AddTodoForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // to avoid empty response from user
    if (title.trim().length === 0) {
      alert("please type something");
      return;
    }

    const newTodo = { title: title, id: crypto.randomUUID(), completed: false };
    dispatch({ type: "ADD_TODO", payload: { newTodo } });
    setTitle("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          border: "none",
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <input
          type="text"
          id="title"
          name="title"
          style={{ border: "none", height: "30px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="Submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
