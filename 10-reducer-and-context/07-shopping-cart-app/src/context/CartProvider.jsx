import { useContext, createContext, useReducer } from "react";
const CartContext = createContext();
import { toast } from "react-toastify";

const cartReducer = (cart, action) => {
  //   if (action.type === "ADD_ITEM") {
  //     // console.log([...cart, action.payload]);

  //     return [...cart, action.payload];
  //   }

  switch (action.type) {
    case "ADD_ITEM":
      //   const exists = cart.some((item) => item.id === action.payload.id);
      //   if (exists) {
      //     alert("Item already exists in cart");
      //     return cart;
      //   }
      //   return [...cart, action.payload];
      for (let item of cart) {
        if (item.id === action.payload.id) {
          toast.error("Item already exists in cart");
          return cart;
        }
      }
      toast.success("Item added succesfully!");
      return [...cart, action.payload];
      break;
    case "INC_ITEM":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      break;
    case "DEC_ITEM":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity >= 2) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
      break;
    case "DEL_ITEM":
      return cart.filter((item) => item.id !== action.payload.id);
    default:
      return cart;
  }
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  function addItemToCart(newCartItem) {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  }
  function handleInc(id) {
    dispatch({ type: "INC_ITEM", payload: { id } });
  }
  function handleDec(id) {
    dispatch({ type: "DEC_ITEM", payload: { id } });
  }
  function handleDel(id) {
    dispatch({ type: "DEL_ITEM", payload: { id } });
  }
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, handleInc, handleDec, handleDel }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
