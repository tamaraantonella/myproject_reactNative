import { createStore, combineReducers } from 'redux';
import { categoryReducer, petsReducer } from "./reducers";

const rootReducer = combineReducers({
  categoryReducer,
  petsReducer,
});

export default createStore(rootReducer);
