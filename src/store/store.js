import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import reduser from "./reduser";

const rootReducer = combineReducers({
  category: reduser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
