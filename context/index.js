import { useState } from "react";
import ProductContext from "./ProductContext";
import CartContext from "./CartContext";
// import PrismicContext from "./PrismicContext";
import UserContext from "./UserContext";
import {
  addItemToCart,
  removeOneItemFromCart,
  filterItemFromCart,
  changeQuantity,
  getCartTotal,
} from "./cart.utils";
import SavedContext from "./SavedContext";
import AuthModalContext from "./AuthModalContext";
import AuthContext from "./AuthContext";

const ContextProvider = ({
  cartContextValue,
  productContextValue,
  savedContextValue,
  children,
  userContextValue,
  //   authContextValue,
  //   prismicContextValue,
  //   authModalContextValue,
}) => {
  const { cartItems, setCartItems } = cartContextValue;

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeOneItem = (item) =>
    setCartItems(removeOneItemFromCart(cartItems, item));
  const setQuantity = (item, quantity) =>
    setCartItems(changeQuantity(cartItems, item, quantity));
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("007-tasche", JSON.stringify([]));
  };
  const cartTotal = () => {
    return getCartTotal(cartItems);
  };

  return (
    // <AuthModalContext.Provider value={authModalContextValue}>
    //   <AuthContext.Provider value={authContextValue}>
    <UserContext.Provider value={userContextValue}>
      {/* <PrismicContext.Provider value={prismicContextValue}> */}
      <ProductContext.Provider value={productContextValue}>
        <SavedContext.Provider value={savedContextValue}>
          <CartContext.Provider
            value={{
              cartItems,
              setCartItems,
              clearCart,
              addItem,
              setQuantity,
              removeOneItem,
              clearItemFromCart,
              cartTotal,
            }}
          >
            {children}
          </CartContext.Provider>
        </SavedContext.Provider>
      </ProductContext.Provider>
      {/* </PrismicContext.Provider> */}
    </UserContext.Provider>
    //   </AuthContext.Provider>
    // </AuthModalContext.Provider>
  );
};

export default ContextProvider;
