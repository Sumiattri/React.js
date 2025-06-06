import { useDispatch } from "react-redux";
import { fetchTodos } from "./todosSlice";
import { useEffect } from "react";

function TodosList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return <div>TodosList</div>;
}

export default TodosList;
