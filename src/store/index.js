import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { categoryReducer,cartReducer,productsReducer,ordersReducer } from "./reducers";
import thunk from "redux-thunk";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  orders:ordersReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
