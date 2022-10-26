import { authTypes } from "../types";
const { SIGN_IN, SIGN_UP } = authTypes;

const initialState = {
  token: null,
  userId: null,
};

 const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN:
      return {
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
}

export default authReducer;
