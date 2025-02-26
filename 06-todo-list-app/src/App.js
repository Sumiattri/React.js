import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: "Learn Guitar", completed: false },
    // { id: 2, title: "Learn React", completed: true },
    // { id: 3, title: "Learn cricket", completed: false },
  ]);

  function addTodo(newTodo) {
    // console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo]);
  }

  function removeTodo(id) {
    // let newTodo = [];
    // for (let todo of todos) {
    //   if (todo.id !== id) {
    //     newTodo.push(todo);
    //   }
    // }
    // setTodos(newTodo);

    // setTodos((prevState) => {
    //   return prevState.filter((todo) => {
    //     return todo.id !== id;
    //   });
    // });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    // const newTodo = [];
    // for (let todo of todos) {
    //   if (todo.id === id) {
    //     newTodo.push({ ...todo, completed: !todo.completed });
    //   } else {
    //     newTodo.push(todo);
    //   }
    // }
    // setTodos(newTodo);

    //   todos.map((todo) => {
    //     if (todo.id === id) {
    //       newTodo.push({ ...todo, completed: !todo.completed });
    //     } else {
    //       newTodo.push(todo);
    //     }
    //   });
    //   setTodos(newTodo);

    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <h1 className="main-title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
