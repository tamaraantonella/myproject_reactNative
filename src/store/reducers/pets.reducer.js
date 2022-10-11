import { pets } from "../../constants/data";
import { petTypes } from "../types";

const { SELECTED_PET, FILTERED_PET } = petTypes;
const initialState = {
  pets: pets,
  filtered: [],
  selected: null,
  loading: false,
  error: false,
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PET:
      const indexPet = state.pets.findIndex((item) => item.id === action.petId);
      if (indexPet === -1) return state;
      return { ...state, selected: state.pets[indexPet] };

    case FILTERED_PET:
      const filter = state.pets.filter(
        (item) => item.categoryId === action.categoryId
      );
      return { ...state, filtered: filter };
    default:
      return state;
  }
};

export default petsReducer;
