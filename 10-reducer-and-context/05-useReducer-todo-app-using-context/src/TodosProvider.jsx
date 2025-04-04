import { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();

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

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id: id } });
  };
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  };

  function addTodo(newTodo) {
    dispatch({ type: "ADD_TODO", payload: { newTodo } });
  }

  return (
    <TodoContext.Provider
      value={{ dispatch, todos, handleDelete, handleToggle, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export default TodosProvider;
