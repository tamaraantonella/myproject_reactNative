import { petTypes } from "../types";

const { SELECTED_PET, FILTERED_PET } = petTypes;

export const selectPet = (pet) => {
  return {
    type: SELECTED_PET,
    petId:pet,
  };
};

export const filterPet = (query) => {
  return {
    type: FILTERED_PET,
    categoryId:query,
  };
};