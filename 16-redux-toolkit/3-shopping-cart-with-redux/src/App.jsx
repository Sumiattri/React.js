import Products from "./components/Products";
import CartProvider from "./context/CartProvider";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={600}
      />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
