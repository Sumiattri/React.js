import Products from "./components/Products";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={600}
      />
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
//hii
