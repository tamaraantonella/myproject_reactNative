import { newPetTypes } from "../types";
const { NEW_PET } = newPetTypes;
import * as FileSystem from "expo-file-system";
import Pet from "../../model/Pet";

export const newPet = (pet) => async (dispatch) => {
  try {
    await FileSystem.moveAsync({
      from: image,
      to: path,
    });
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
    const newPetsi = new Pet(pet.id, pet.name, pet.image);
    console.log(newPetsi)
      dispatch(newPet(newPetsi));
    // }
  } catch (error) {
    throw error;
  }
};
