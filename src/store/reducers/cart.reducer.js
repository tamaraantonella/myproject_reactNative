import { cartTypes } from "../types";

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  CLEAR_CART,
  CONFIRM_ORDER,
} = cartTypes;

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCart = [];
      const item = action.payload;
      const existItem = state.items.find((x) => x.id === item.id);
      if (existItem) {
        updatedCart = state.items.map((x) =>
          x.id === existItem.id ? (item.quantity += 1) : x
        );
      } else {
        const newItem = { ...item, quantity: 1 };
        updatedCart = [...state.items, newItem];
      }
      return {
        ...state,
        items: [...state.items, updatedCart],
        total: sumTotal(updatedCart),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((x) => x.id !== action.payload),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((x) =>
          x.id === action.payload ? { ...x, quantity: x.quantity - 1 } : x
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
