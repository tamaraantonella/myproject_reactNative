import { newPetTypes } from "../types";
const { NEW_PET } = newPetTypes;
import * as FileSystem from "expo-file-system";
import Pet from "../../model/Pet";

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

export const saveImage = (pet) => async (dispatch) => {
  // const fileName = pet.image.split("/").pop();
  // const path = FileSystem.documentDirectory + fileName;
  try {
    // const result = await FileSystem.moveAsync({
    //   from: fileName,
    //   to: path,
    // });
    // if (result.status) {
    // }
  } catch (error) {
    throw error;
  }
};
