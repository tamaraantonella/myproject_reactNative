import { categories } from "../../constants/data";
import { categoryTypes } from "../types";

const { SELECTED_CATEGORY } = categoryTypes;
//estado inicial
const initialState = {
  categories: categories,
  selected: null,
  loading: false,
  error: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      const indexCat = state.categories.findIndex(
        (item) => item.id === action.categoryId
      );
      if(indexCat === -1) return state;
      return { ...state, selected: state.categories[indexCat]};
    default:
      return state;
  }
};

export default categoryReducer;
