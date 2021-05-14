import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {cartReducer} from "./reducers/cartReducers"
const reducer = combineReducers({
  cart: cartReducer
});

const middlewere = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewere))
);

export default store;
