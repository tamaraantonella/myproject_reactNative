import { createStore, combineReducers,applyMiddleware } from 'redux';
import { categoryReducer, petsReducer } from "./reducers";
import { thunk} from "redux-thunk";

const rootReducer = combineReducers({
  category:categoryReducer,
  pets:petsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
