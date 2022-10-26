import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import {
  categoryReducer,
  cartReducer,
  productsReducer,
  ordersReducer,
  authReducer,
} from "./reducers";
import thunk from "redux-thunk";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
