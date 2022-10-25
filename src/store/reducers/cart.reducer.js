import { pets } from "../../constants/data/index";

const initialState = {
  items:pets,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  return state
};

export default cartReducer;
