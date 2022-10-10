import { createStore, combineReducers } from 'redux';
import { categoryReducer, petsReducer } from "./reducers";

const rootReducer = combineReducers({
  category:categoryReducer,
  pets:petsReducer,
});

export default createStore(rootReducer);
