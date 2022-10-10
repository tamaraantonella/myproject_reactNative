import { pets } from "../../constants/data";

const initialState = {
  pets: pets,
  filtered:[],
  selected: null,
  loading: false,
  error: false,
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default petsReducer;