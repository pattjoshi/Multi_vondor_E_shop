import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    const item = action.payload;
    /* The line `const isItemExist = state.cart((i) => i._id == item._id);` is checking if an item with 
   the same `_id` as the `item` being added already exists in the `cart` array. */ //[19.48]
    const isItemExist = state.cart.find((i) => i._id === item._id);
    if (isItemExist) {
      return {
        ...state,
        /* The line `cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i))` is updating the
      `cart` array in the state. */
        cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
      };
    } else {
      return {
        ...state,
        /* The line `cart: [...state.cart, item],` is adding the `item` to the `cart` array in the
       state. It uses the spread operator (`...`) to create a new array that includes all the
       elements from the existing `state.cart` array, and then appends the `item` to the end of the
       new array. This ensures that the original `state.cart` array is not mutated, and a new array
       is created with the updated items. */
        cart: [...state.cart, item],
      };
    }
  },

  // Remove from cart
  removeFromCart: (state, action) => {
    return {
      ...state,
      cart: state.cart.filter((i) => i._id !== action.payload),
    };
  },
});
