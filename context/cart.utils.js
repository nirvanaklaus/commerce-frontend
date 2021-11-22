export const addItemToCart = (cartItems, cartItemToAdd, add = false) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    if (add) {
    } else {
      console.log("object already exists");
      return cartItems;
    }
  }

  let result = [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  localStorage.setItem("007-tasche", JSON.stringify(result));
  return result;
};

export const changeQuantity = (cartItems, cartItemToIncrease, quantity) => {
  let result = cartItems.map((cartItem) =>
    cartItem.id === cartItemToIncrease.id ? { ...cartItem, quantity } : cartItem
  );
  localStorage.setItem("007-tasche", JSON.stringify(result));
  return result;
};

export const removeOneItemFromCart = (cartItems, cartItemToRemove) => {
  let result = cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToRemove.id
  );
  localStorage.setItem("007-tasche", JSON.stringify(result));
  return result;
};

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );
export const getCartTotal = (cartItems) =>
  Math.round(
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem?.specs?.price,
      0
    ) * 100
  ) / 100;
