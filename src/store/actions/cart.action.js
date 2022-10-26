import { cartTypes } from "../types";
import { URL_API } from "../../constants/firebase";
const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  CLEAR_CART,
  CONFIRM_ORDER,
} = cartTypes;

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const confirmOrder = (cart, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toDateString(),
          items: cart,
          total: total,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      console.log(result);
      dispatch({
        type: CONFIRM_ORDER,
        result:result
      });
    } catch (error) {
      throw error;
    }
  };
};
