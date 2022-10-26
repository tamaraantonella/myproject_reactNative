import { orderTypes } from "../types";
const { GET_ORDERS, DELETE_ORDER } = orderTypes;

const initialState = {
  list: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        list: state.orders.filter((order) => order.id !== action.payload),
      };
    default:
      return state;
  }
}

export default ordersReducer;