import AddTodoForm from "./AddTodoForm.jsx";
import Todos from "./Todos.jsx";
import TodosProvider from "./TodosProvider.jsx";

function App() {
  return (
    <TodosProvider>
      <div
        style={{
          maxWidth: "900px",
          width: "95%",
          margin: "auto",
          display: "grid",
        }}
      >
        <AddTodoForm />
        <Todos />
      </div>
    </TodosProvider>
  );
}

export default App;
