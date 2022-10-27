import { newPetTypes } from "../types";
const { NEW_PET } = newPetTypes;

export const newPet = (pet) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_PET,
      payload: pet,
    });
  } catch (error) {
    throw error;
  }
};