import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todosSlice";

function SingleTodos({ id, title, completed }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteTodo({ id }));
  }

  return (
    <div style={{ border: "2px solid black", margin: "1rem", padding: "1rem" }}>
      <p>id:{id}</p>
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        title:{title}
      </p>
      <p>completed:{completed ? "true" : "false"}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          dispatch(toggleTodo({ id }));
        }}
      >
        ToggleTodo
      </button>
    </div>
  );
}

export default SingleTodos;
