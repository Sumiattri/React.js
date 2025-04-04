import AddTodoForm from "./AddTodoForm.jsx";
import Todos from "./Todos.jsx";
import TodosProvider from "./TodosProvider.jsx";

function App() {
  return (
    <TodosProvider>
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AddTodoForm />
        <Todos />
      </div>
    </TodosProvider>
  );
}

export default App;
