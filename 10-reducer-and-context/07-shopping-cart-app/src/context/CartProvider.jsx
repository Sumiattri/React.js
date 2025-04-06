import { useContext, createContext, useReducer } from "react";
const CartContext = createContext();

const cartReducer = (cart, action) => {
  if (action.type === "ADD_ITEM") {
    return [...cart, action.payload];
  }
  return cart;
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  function addItemToCart(newCartItem) {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  }
  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
