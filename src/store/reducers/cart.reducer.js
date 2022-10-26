import { cartTypes } from "../types";
let carritoEjemplo = [
  {
    id: 1,
    title: "Pelota",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    title: "Snack",
    price: 200,
    quantity: 1,
  },
];

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  CLEAR_CART,
  CONFIRM_ORDER,
} = cartTypes;
const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);
const initialState = {
  items: carritoEjemplo,
  total: sumTotal(carritoEjemplo),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCart = [];
      const item = action.payload;
      console.log(item);
      const existItem = state.items.find((x) => x.id === item.id);
      if (existItem) {
        updatedCart = state.items.map((x) => {
          x.id === state.items.id ? (x.quantity += 1) : x;
        });
        console.log(updatedCart);
      } else {
        const newItem = { ...item, quantity: 1 };
        updatedCart = [...state.items, newItem];
      }
      console.log(updatedCart);
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };
    case REMOVE_FROM_CART:
      const filteredCart = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
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
