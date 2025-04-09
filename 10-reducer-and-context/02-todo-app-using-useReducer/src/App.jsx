import { useReducer } from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import Todos from "./Todos.jsx";

function App() {
  const initialState = [
    { id: "1", title: "do nothing", completed: false },
    { id: "2", title: "do everything", completed: false },
    { id: "3", title: "do something", completed: false },
  ];
  const reducer = (todos, action) => {
    // if (action.type === "DELETE_TODO") {
    //   let newState = [];

    //   for (let todo of todos) {
    //     if (todo.id !== action.payload.id) {
    //       newState.push(todo);
    //     }
    //   }
    //   return newState;
    // }

    // if (action.type === "DELETE_TODO") {
    //   return todos.filter((todo) => {
    //     return todo.id !== action.payload.id;
    //   });
    // }

    if (action.type === "DELETE_TODO") {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    if (action.type === "TOGGLE_TODO") {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
    if (action.type === "ADD_TODO") {
      return [...todos, action.payload.newTodo];
    }

    alert("Unknown action type");
    return todos;
  };

  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        border: " 2px solid red",
      }}
    >
      <AddTodoForm dispatch={dispatch} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Todos todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
