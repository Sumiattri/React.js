import { useDispatch } from "react-redux";
import { deleteTodos, toggleTodos } from "./todosSlice";

function SingleTodos({ title, id, completed }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteTodos({ id }));
  }

  function handleToggle() {
    dispatch(toggleTodos({ id, completed }));
  }
  return (
    <div style={{ border: "2px solid white", margin: "1rem", padding: "1rem" }}>
      <p>id:{id}</p>
      <p>title:{title}</p>
      <p>completed:{completed ? "true" : "false"}</p>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleDelete}> Delete</button>
    </div>
  );
}

export default SingleTodos;
