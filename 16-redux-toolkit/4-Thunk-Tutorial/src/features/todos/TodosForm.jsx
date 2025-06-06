import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./todosSlice";

function TodosForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    dispatch(addTodos(title))
      .unwrap()
      .then(() => {
        setTitle("");
      })

      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "loading" : "add"}
        </button>
      </form>
    </div>
  );
}

export default TodosForm;
