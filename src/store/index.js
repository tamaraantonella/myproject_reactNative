import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { categoryReducer,cartReducer,productsReducer } from "./reducers";
import thunk from "redux-thunk";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
