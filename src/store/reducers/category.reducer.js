import { categories } from "../../constants/data";

//estado inicial
const initialState = {
  categories: categories,
  selected: null,
  loading: false,
  error: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STARTED":
      return { ...state, loading: true };
    case "CATEGORIES_OK":
      return { ...state, categories: action.payload, loading: false };
    default:
      return state;
  }
}

export default categoryReducer;