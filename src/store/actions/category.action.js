import { categoryTypes } from "../types";

export const selectCategory = (category) => {
  const {SELECTED_CATEGORY} = categoryTypes;
  return {
    type: SELECTED_CATEGORY,
    categoryId: category
  };
}