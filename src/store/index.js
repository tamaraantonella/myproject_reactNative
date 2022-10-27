import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import {
  categoryReducer,
  cartReducer,
  productsReducer,
  ordersReducer,
  authReducer,
  newPetReducer
} from "./reducers";
import thunk from "redux-thunk";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  newPet: newPetReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
