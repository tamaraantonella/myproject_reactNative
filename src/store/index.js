import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { categoryReducer, petsReducer,cartReducer } from "./reducers";
import thunk from "redux-thunk";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  pets: petsReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
