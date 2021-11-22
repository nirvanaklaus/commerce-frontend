import { createContext } from "react";
const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addItem: (item) => {},
  setQuantity: (item, quantity) => {},
  removeOneItem: (item) => {},
  reduceOneItem: (item) => {},
  clearItemFromCart: (item) => {},
  clearCart: () => {},
  cartTotal: () => {},
  cartItemTotal:()=>{}
});

CartContext.displayName = "CartContext";

export default CartContext;
