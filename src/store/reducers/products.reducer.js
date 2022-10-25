import { products } from "../../constants/data";
import { petTypes } from "../types";

const { SELECTED_PET, FILTERED_PET } = petTypes;
const initialState = {
  products: products,
  filtered: [],
  selected: null,
  loading: false,
  error: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PET:
      const indexPet = state.products.findIndex(
        (item) => item.id === action.petId
      );
      if (indexPet === -1) return state;
      return { ...state, selected: state.products[indexPet] };

    case FILTERED_PET:
      const filter = state.products.filter(
        (item) => item.categoryId === action.categoryId
      );
      return { ...state, filtered: filter };
    default:
      return state;
  }
};

export default productsReducer;
