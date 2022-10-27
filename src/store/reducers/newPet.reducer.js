import { newPetTypes } from "../types";
const { NEW_PET } = newPetTypes;

const initialState = {
  pets: [],
};


const newPetReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PET:
      return {
        ...state,
        pets: [...state.pets, action.payload],
      };
    default:
      return state;
  }
};

export default newPetReducer;
