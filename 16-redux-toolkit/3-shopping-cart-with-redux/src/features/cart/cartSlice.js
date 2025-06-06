import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (cart, action) => {
      for (let item of cart) {
        if (item.id === action.payload.id) {
          toast.error("Item already exists in cart");
          return cart;
        }
      }
      toast.success("Item added succesfully!");
      return [...cart, action.payload];
    },
    RemoveItemToCart: (cart, action) => {
      return cart.filter((item) => item.id !== action.payload.id);
    },
    IncQty: (cart, action) => {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    DcQty: (cart, action) => {
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
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, RemoveItemToCart, IncQty, DcQty } =
  cartSlice.actions;
