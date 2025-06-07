import { useDispatch } from "react-redux";
import { fetchTodos } from "./todosSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleTodos from "./SingleTodos";

function TodosList() {
  const { todos } = useSelector((state) => state.todos);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTodos())
      .unwrap()

      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (isLoading) {
    return <h1>Loading ......</h1>;
  }
  return (
    <div>
      <h2>Todos</h2>

      {todos.map((todo) => (
        <SingleTodos key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodosList;
