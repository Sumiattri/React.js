import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import TodosApp from "./features/todos/TodosApp";

function App() {
  return (
    <Provider store={store}>
      <TodosApp />
    </Provider>
  );
}

export default App;
