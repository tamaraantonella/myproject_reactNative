import { authTypes } from "../types";
const { SIGN_IN, SIGN_UP } = authTypes;
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constants/firebase";

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_AUTH_SIGN_UP}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log(error)
      }
  };
};