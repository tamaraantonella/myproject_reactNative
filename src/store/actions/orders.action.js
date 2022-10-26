import { orderTypes } from "../types";
import { URL_API } from "../../constants/firebase";
const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => async (dispatch) => {
  try {
    const response = await fetch(
      URL_API+"orders.json"
    );
    const result = await response.json();
    const orders = Object.keys(result).map((key) => {
      return {
        id: key,
        ...result[key],
      }
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    dispatch({
      type: GET_ORDERS,
      payload: orders,
    });
  } catch (error) {
    throw error;
  }
}

export const deleteOrder = (id) => async (dispatch) => {

  try {
    const response = await fetch(
      `${URL_API}orders/${id}.json`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    console.log(result);
    dispatch({
      type: DELETE_ORDER,
      payload: id,
    });
  } catch (error) {
    throw error;
  }
}