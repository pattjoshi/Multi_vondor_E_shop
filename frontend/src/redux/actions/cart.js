// add To cart

export const addTocart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "addToCart",
    payload: data,
  });

  /* `localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));` is storing the cart
  items in the browser's local storage. */
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};

// Remove From cart
export const removeFromCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "removeFromCart",
    payload: data._id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};

// Trigger an event , and call reducer
// What is dispatch?
// The dispatch function is typically used to send messages to objects that are part of a larger application
