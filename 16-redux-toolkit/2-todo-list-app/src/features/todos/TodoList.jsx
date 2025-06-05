import { useSelector } from "react-redux";
import SingleTodos from "./SingleTodos";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => {
        return <SingleTodos key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default TodoList;
